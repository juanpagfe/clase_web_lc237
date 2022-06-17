const Tree = require('./Tree')
const TreeNode = require('./TreeNode')
const Graph = require('./Graph')



console.log("============== Tree ==============")
const tree = new Tree(1, 'A');

tree.insert(1, 11, 'B');
tree.insert(1, 12, 'C');
tree.insert(12, 121, 'D');

console.log("PreOrder: ", [...tree.preOrderTraversal()].map(x => x.value));

console.log("Root leaf: ", tree.root.value);
console.log("Root has children: ", tree.root.hasChildren);

console.log("Node 12 is leaf: ", tree.find(12).isLeaf);
console.log("Node 121 is leaf: ", tree.find(121).isLeaf);
console.log("Parent of 121: ", tree.find(121).parent.value);
console.log("Removes 12: ", tree.remove(12))

console.log("PostOrder: ",[...tree.postOrderTraversal()].map(x => x.value))

console.log("============== Tree ==============")

console.log("\n\n")

console.log("============== Graph ==============")
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(JSON.stringify(g, null, 2));

console.log("============== Tree ==============")

console.log("\n\n")