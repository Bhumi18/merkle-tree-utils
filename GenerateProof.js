const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require('fs')

const tree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json", "utf8")))

for (const [i, v] of tree.entries()) {
    if (v[0] == "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf") {
        const proof = tree.getProof(i);
        console.log('Value:', v)
        console.log('Proof:', proof)
    }
}
