import SimpleBlock from "../Block";
import { Block } from "../Block/types";
import { BlockChain } from "./types";

//Implementing a blockchain
export default class SimpleBlockChain implements BlockChain{
    blocks: Block[]
    constructor(){
        this.blocks = []
        //Adding a first block when the blockchain is created
        this.addBlock(
            new SimpleBlock({
                blockNumber: 0,
                data: { someData: 'the genesis block'}
            }) )
    }
    addBlock(newBlock: Block){
        this.blocks.push(newBlock)
    }
    searchInvalidBlock(){
        return this.blocks.slice(1,this.blocks.length).findIndex((block, index) => {
          //index is already the previous index
          return block.previousHash !== this.blocks[index].generateHash()
        })
    }
    checkBlockChainValidation() {
        return this.searchInvalidBlock() === -1
    }
    lastBlock(){
        return this.blocks[this.blocks.length - 1]
    }
}