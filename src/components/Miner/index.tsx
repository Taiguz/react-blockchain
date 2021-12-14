import React, { useEffect, useRef, useState } from 'react'
import { Button, Input } from '../Main/style'
import { Container, MinerContent, MinerRow, Overlay, Strong } from './style'
import hash from 'crypto-js/sha256'
import hex from 'crypto-js/enc-hex'
import { Block } from '../../class/Block/types'
import SimpleBlock from '../../class/Block'
import { v4 } from 'uuid'

interface Props {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    blockNumber: number
    previousHash: string
    difficulty: number
    addBlock: (newBlock: Block) => void
}

const Miner: React.FC<Props> = (props: Props) => {

    const [blockData, setBlockData] = useState('')
    const [blockMined, setBlockMined] = useState<Block | null>(null)
    const [logs, setLogs] = useState<{nonce: number, hash: string}[]>([])
    const [mining, setMining] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const hashContent = useRef<HTMLDivElement | null>(null)
    const [newBlock] = useState( new SimpleBlock({ 
            blockNumber: props.blockNumber,
            data: {someData: blockData},
            previousHash: props.previousHash,
            nonce: 0
    }))

    const interval = useRef<NodeJS.Timeout | null>(null)
    const intervalLogs = useRef<NodeJS.Timeout | null>(null)

    //Check if the hash matches the difficulty set
    const checkHash = (hash: string) =>  hash.slice(0, props.difficulty) === Array(props.difficulty).fill('0').join('')

    useEffect(() => {
        newBlock.data = { someData: blockData}
    },[blockData])

    //Increases the seconds counter every second
    useEffect(() => {
        if(mining)
           interval.current = setInterval(() => setElapsedTime(e => e + 1), 1000)
        else clearInterval(interval.current as NodeJS.Timeout)

        return () => clearInterval(interval.current as NodeJS.Timeout)
    },[mining])

    //Output the hashes generated for the user every 200 milliseconds
    useEffect(() => {
        if(mining)
           intervalLogs.current = setInterval(() => setLogs(l => [...l, { nonce: newBlock.nonce, hash: newBlock.hash}]), 200)
        else clearInterval(intervalLogs.current as NodeJS.Timeout)

        return () => clearInterval(intervalLogs.current as NodeJS.Timeout)
    },[mining])



    useEffect(() => {
        if(hashContent.current)
            hashContent.current.scrollTo(0,hashContent.current.scrollHeight)
    },[logs.length, blockMined])


    //Give a human readable output for time
    const sanitizeTime = () => {
        const hour = Math.floor((elapsedTime % 216000) / 3600)
        const minutes = Math.floor((elapsedTime % 3600) / 60)
        const seconds = elapsedTime % 60
        return `${hour.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    }

    //Search for the hash with the number of zeros given by the difficulty
    const mine = () => {
        setMining(true)
        const searchHash = () => {
            newBlock.nonce++
            newBlock.generateHash()
            if(!checkHash(newBlock.hash)) 
                return setTimeout(searchHash,0)
            setBlockMined(newBlock)
            setMining(false)
        }

        searchHash()
    }

    //Syncronously mine 10 blocks, to calculate mean time to generate hashes
    const mine10BlocksSync = async () => {
        console.log('Started mining 10 blocks...')
        const numberOfBlocks = 10
        const intervals = []
        for(let index = 0; index < numberOfBlocks; index++){
            const inicio = new Date()
            const newBlock = new SimpleBlock({ 
                blockNumber: props.blockNumber,
                data: {someData: v4()},
                previousHash: props.previousHash,
                nonce: 0
            })
            while(!checkHash(newBlock.hash)){
                newBlock.nonce++
                newBlock.generateHash()
            }
            const final = new Date()
            console.log('1 Block mined')
            intervals.push(final.getTime() - inicio.getTime())
        }
        const media = intervals.reduce((previous, current) => previous + current) / numberOfBlocks
        console.log(`Mean time to mine 10 blocks: ${media} milliseconds`)
    }

    //Add a new block to the blockchain
    const addBlock = () => {
        if(blockMined === null) return
        props.addBlock(blockMined)
        props.setShow(false)
    }

    return (
        <Overlay>
            <Container>
                <MinerRow>
                    <h2>Block Miner{mining && ' - mining...'} {(mining || blockMined) && `Elapsed time: ${sanitizeTime()}`}</h2>
                </MinerRow>
                <hr/>
                <MinerRow>
                    <Input 
                        placeholder="New block data..."
                        value={blockData}
                        onChange={evento => setBlockData(evento.target.value)}
                        disabled={mining}
                    />
                    <Button disabled={mining} onClick={mine}>{mining ? 'Mining...' : 'Mine New Block'}</Button>
                </MinerRow>
                <MinerContent ref={hashContent}>
                    {logs.slice(-100).map(({ nonce, hash}, index) => <p key={index}><Strong>Nonce: </Strong>{nonce} <Strong>Hash: </Strong>{hash}</p>)}
                    {blockMined && <h4>Block mined!! Hash found {blockMined.hash}</h4>}
                </MinerContent>
                <hr/>
                <MinerRow>
                    <Button disabled={blockMined === null} onClick={addBlock}>Add Block</Button>
                    <Button disabled={mining} onClick={() => props.setShow(false)}>Cancel</Button>
                    <Button onClick={mine10BlocksSync}>mine 10</Button>
                </MinerRow>
            </Container>
        </Overlay>
    )

}

export default Miner