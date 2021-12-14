import { Block, BlockConstructor} from './types'
import { SHA256 } from 'crypto-js'

//Implementing a blockchain block
export default class SimpleBlock implements Block {
    blockNumber: number
    timestamp: Date
    data: { [key: string | number]: any}
    hash: string
    previousHash: string
    nonce: number
    constructor({blockNumber, data, previousHash, nonce}: BlockConstructor){
        this.blockNumber = blockNumber
        this.timestamp = new Date()
        this.data = data
        this.previousHash = previousHash ? previousHash : '0'
        this.nonce = nonce ? nonce : 0
        this.hash = this.generateHash()
    }
    //Generates a new hash for the block and updates the hash attribute
    generateHash() {
        this.hash =  SHA256(
            this.blockNumber +
            JSON.stringify(this.data) +
            this.previousHash +
            this.nonce).toString()
        return this.hash
    }

}