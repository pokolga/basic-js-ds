const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	constructor() {
		this._head = null;
		this._last = null;
	}	
	
  push( element ) {
	let newItem = {};
	newItem.element = element;
	
	if (this._head === null) {
		this._head = newItem;
		newItem.prev = null;
	}
	else {
		newItem.prev = this._last;
		this._last.next = newItem;
	}
	newItem.next = null;
	this._last = newItem;
  }

  pop() {
	if (this._last === null) return null;
    let output = this._last.element;
	this._last = this._last.prev;
	this._last.next = null;
	return output;
  }

  peek() {
	if (this._last === null) return null;
	return this._last.element;
  }
}

module.exports = {
  Stack
};
