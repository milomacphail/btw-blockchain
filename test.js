const Blockchain = require('./Blockchain');

const btw = new Blockchain();

// btw.createNewBlock(3312, "A0NQ30F9ASNDVOAS", "ASODIFNQ309AFN");
// btw.createNewTransaction("Cliff", "BTW", 23);
// btw.createNewTransaction("Arnell", "BTW", 313);

const previous = "ASODIFNQ309NDAF";
const dummyData = [
    {
        amount: 32,
        sender: 'ASD0F9NQ30',
        recipient: "Q304NDF0NQ"
    },
    {
        amount: 148,
        sender: 'A09WENFASOID',
        recipient: "AP8VNASD9A0ER"
    }
]

console.log(btw.proofOfWork(previous, dummyData))