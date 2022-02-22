//File system import
const fs = require('fs');

//Binary tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() { 
        this.root = null;
    }
}

// helper method which creates a new node to
// be inserted and calls insertNode
function insert(data) {
    var newNode = new Node(data);                 
    if (this.root === null)
        this.root = newNode;
    else this.insertNode(this.root, newNode);
}
function insertNode(node, newNode) {
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else this.insertNode(node.left, newNode);
    } else {
        if(node.right === null)
            node.right = newNode;
        else this.insertNode(node.right,newNode);
    }
}

// helper method that calls the
// removeNode with a given data
function remove(data) {
    this.root = this.removeNode(this.root, data);
}
 
// Method to remove node with a
// given data
// it recurs over the tree to find the
// data and removes it
function removeNode(node, key) {
    if(node === null) {
        return null;
    } else if(key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
    } else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
    } else {
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
 
        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
 
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
}

// Performs inorder traversal of a tree
function inorder(node) {
    if(node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

// Performs preorder traversal of a tree   
function preorder(node) {
    if(node !== null) {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

function postorder(node) {
    if(node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
}

//  finds the minimum node in tree
// searching starts from given node
function findMinNode(node) {
    if(node.left === null) {
        return node;
    } else {
        return this.findMinNode(node.left);
    }
}

// returns root of the tree
function getRootNode() {
    return this.root;
}

// search for a node with given data
function search(node, data) {
    if(node === null) {
        return null;
    } else if(data < node.data) {
        return this.search(node.left, data);
    } else if(data > node.data) {
        return this.search(node.right, data);
    } else {
        return node;
    }
}

//Create new Binary Search Tree
var BST = new BinarySearchTree();

//Read in data from CSV file
fs.readFile('datastructures3.csv', 'utf8', function (_err, data) {
    const dataArray = data.split(/\r?\n/);
    
    //Populate BST with insert method
    for (let i = 0; i < dataArray.length; i++) {
        BST.insert(dataArray[i])
    }

    //Run searcg function by giving movie title
    BST.search(/*node, title*/)
  });