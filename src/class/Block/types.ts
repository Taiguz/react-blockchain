export interface Block {
    blockNumber: number
    timestamp: Date
    data: { [key: string | number]: any}
    hash: string
    previousHash: string
    nonce: number
    generateHash: () => string
}

export interface BlockConstructor { 
    blockNumber: number
    data: { [key: string | number]: any}
    previousHash?: string
    nonce?: number
}