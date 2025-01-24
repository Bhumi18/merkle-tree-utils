const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require("fs");

// Define the input values for the Merkle Tree
const values = [
    [
        "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf",
        "0xDE5a0e3a6802b2CFB9e37bab0146003aE75F98bC",
        "50000000000000000000",
    ],
    [
        "0x2B30bC9F81f919B01a09d5A3De574B15eAF2C3BC",
        "0xDE5a0e3a6802b2CFB9e37bab0146003aE75F98bC",
        "20000000000000000000",
    ],
    [
        "0x18e23191359F9Dc403Ba2942b87a896535c935C4",
        "0xDE5a0e3a6802b2CFB9e37bab0146003aE75F98bC",
        "10000000000000000000",
    ],
];

// Create a Merkle Tree using OpenZeppelin's library
// Specify the encoding types for each input field: ["address", "address", "uint256"]
const tree = StandardMerkleTree.of(values, ["address", "address", "uint256"])

console.log('Merkle Root:', tree.root)

// Export the Merkle Tree to a JSON file
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()))