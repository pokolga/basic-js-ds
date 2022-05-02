const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor(){
		this._root = null;
	}
	
  root() {
    return this._root;
  }

  add( data ) {
	  if (this.has(data)) return;
	const obj =  new Node();
	obj.data = data;
	obj.left = null;
	obj.right = null;
	
	
	let current = this._root;
	
	if (current === null){
		this._root = obj;
		return;
	}

	while (true) {
        if (data < current.data) {
            if (current.left === null) {
                current.left = obj;
                return;
            } else {
                current = current.left;
            }
        } 
		else if (data > current.data) {
            if (current.right == null) {
                current.right = obj;
                return;
            } else {
                current = current.right;
            }
        } else {
            return;
        }
    }
	
  }

  has(data) {
    if (this.find(data) === null){
		return false;
	}
	return true;
  }

  find( data ) {
    let current = this._root;
	
	while (current){
		if (current.data === data) return current;
		if (current.data > data){
			current = current.left;
		} else{
			current = current.right;
		}
	}
	return null;
  }

  remove( data ) {
    if (this.has(data)) {
		
		
	}
  }

  min() {
    let current = this._root;
	let output = this._root;
	while (current){
		output = current;
		current = current.left;
	}
	return output.data;
  }

  max() {
    let current = this._root;
	let output = this._root;
	while (current){
		output = current;
		current = current.right;
	}
	return output.data;
  }
}

module.exports = {
  BinarySearchTree
};