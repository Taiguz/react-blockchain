import React, { useEffect, useState } from 'react'
import { Block} from '../../class/Block/types'
import { Button, Input } from '../Main/style'
import { BlockStyled, Invalid, Valid } from './style'

interface BlockProps extends Block{
    invalid: boolean
}

const BlockComponent: React.FC<BlockProps> = (data: BlockProps) => {

    const [block, setBlock] = useState<Block>(data)
    const [editing, setEditing] = useState(false)
    const [newData, setNewData] = useState(block.data.someData)

    //Saves the new data from the user input
    const saveData = () => {
        setEditing(editing => {
            editing = !editing
            if(editing === false)
                data.data.someData = newData
            return editing
        })
    }


    return (
        <BlockStyled>
            <h5>Block Number - #{block.blockNumber} - {block.timestamp.toISOString()} {data.invalid ? <Invalid>Block Invalid!</Invalid> : <Valid>Block Valid</Valid>}</h5>
            <hr/>
            <p>{editing ? <Input value={newData} onChange={event => setNewData(event.target.value)}/> : JSON.stringify(block.data)} <Button onClick={saveData}>{editing ? 'Save' : 'Edit Block Data'}</Button></p>
            <hr/>
            <h6>Previous Hash: {block.previousHash}</h6>
            <h6>Block Hash: {block.hash}</h6>
        </BlockStyled>
    )
}

export default BlockComponent