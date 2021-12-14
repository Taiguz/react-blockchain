import { Block } from "../Block/types";

export interface BlockChain {
    blocks: Block[]
    checkBlockChainValidation: () => boolean
    searchInvalidBlock: () => number | undefined
    addBlock: (newBlock: Block) => void
    lastBlock: () => Block
}