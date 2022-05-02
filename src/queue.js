const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 Каждый экземпляр очереди должен иметь 3 метода:
    * `enqueue(value)` — помещает `value` в конец **очереди** 
    * `deque` — извлекает значение с начала **очереди** и удаляет его
    * `getUnderlyingList` - возвращает **связный список**, лежащий в основе данной **очереди**

 */

class Queue {
    
	constructor() {
		this._head = null;
		this._last = null;
	}	
    
  getUnderlyingList() {
    return this._head; 
  }

  enqueue(value) {
    let newItem = new ListNode();
	newItem.value = value;
	
	if (this._head === null) {
		this._head = newItem;
	}
	else {
		this._last.next = newItem;
	}
	this._last = newItem;
  }

  dequeue() {
    let output = this._head.value;
	if (this._head === null) return;
	this._head = this._head.next;
	return output;
  }
}

module.exports = {
  Queue
};
