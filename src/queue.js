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
    constructor(value){
        super();
        this.value = value;
    }
  getUnderlyingList() {
    alert("getUnderlyingList")
  }

  enqueue(/* value */) {
    alert("enqueue")
  }

  dequeue() {
      alert("dequeue")
  }
}

module.exports = {
  Queue
};
