const sha256 = require("sha256");

function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    this.createNewBlock(100, "0", "0"); //genesis block
}

Blockchain.prototype.createNewBlock = function(
    nonce, previousBlockHash, hash
) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = [];

    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.createNewTransaction = function(
    sender, recipient, amount
) {
    const newTransaction = {
        timestamp: Date.now(),
        sender: sender,
        recipient: recipient,
        amount: amount
    }

    this.pendingTransactions.push(newTransaction);
}

Blockchain.prototype.hashBlock = function(
    previousBlockHash,
    currentBlockData,
    nonce
) {
    const data = 
        previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(data);
    
    return hash;
}

Blockchain.prototype.proofOfWork = function(
    previousBlockHash, 
    currentBlockData
) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0, 4) !== "0000") {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        console.log(hash);
    }
    console.log(nonce);
    return nonce;
}

module.exports = Blockchain;