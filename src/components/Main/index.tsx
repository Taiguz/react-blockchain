import React, { useState } from 'react'
import BlockComponent from '../Block'
import { Block } from '../../class/Block/types'
import Miner from '../Miner'
import { BlocksContainer, Button, ButtonContainer, Container, Input } from './style'
import { BlockChain } from '../../class/BlockChain/types'
import SimpleBlockChain from '../../class/BlockChain'

const blockChain = new SimpleBlockChain()

const Main: React.FC = () => {
    const [blockChainBlocks, setBlockChainBlocks] = useState<Block[]>(blockChain.blocks)
    const [difficulty, setDifficulty] = useState(2)
    const [showMiner, setShowMiner] = useState(false)
    const [invalidBlock, setInvalidBlock] = useState<number>(-1)


    //Adds a new block to the blockchain
    const addBlock = (newBlock: Block) => {
        blockChain.addBlock(newBlock)
        setBlockChainBlocks(blockChain.blocks)
    }

    //Check if blockchain is valid
    const checkBlockChainValidation = () => {
        const invalid = blockChain.searchInvalidBlock()
        setInvalidBlock(invalid)
        alert(invalid === -1 ? 'Block chain is valid !' : 'Block chain is invalid !' )
    }

    return (
        <Container>
            {showMiner && 
                <Miner 
                    show={showMiner} 
                    setShow={setShowMiner} 
                    blockNumber={blockChain.lastBlock().blockNumber + 1}
                    previousHash={blockChain.lastBlock().hash}
                    difficulty={difficulty}
                    addBlock={addBlock}
                />
            }
            <BlocksContainer>
                {blockChainBlocks.map((block, index) => <BlockComponent key={index} invalid={invalidBlock !== -1 && index >= invalidBlock} {...block} />)}
            </BlocksContainer>
            <ButtonContainer>
                <Button onClick={() => setShowMiner(true)}>+ Add New Block</Button>
                <Button onClick={checkBlockChainValidation}>Check Block Chain Validation</Button>
                <label htmlFor="diff">Set Block Chain Difficulty:</label>
                <Input id="diff" type="number" placeholder="Set Difficulty" value={difficulty} onChange={event => setDifficulty(Number(event.target.value))}/>
            </ButtonContainer>
        </Container>
    )
}

export default Main