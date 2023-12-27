// Priority Queue class
class PriorityQueue {
    constructor() {
      this.queue = [];
    }
    // Function to add an element to the queue with a given priority

    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.sortQueue();
    }
    // Function to remove and return the element with the highest priority
    dequeue() {
      if (this.isEmpty()) return null;
      return this.queue.shift().element;
    }
    // Function to check if the queue is empty

    isEmpty() {
      return this.queue.length === 0;
    }
    // Function to sort the queue based on priority (ascending order)
    sortQueue() {
      this.queue.sort((a, b) => a.priority - b.priority);
    }

  } 

  // Example usage
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("Task 10", 10);
  priorityQueue.enqueue("Task 7", 7);
  priorityQueue.enqueue("Task 3", 3);

  console.log(priorityQueue.dequeue()); // Output: "Task 3"
  console.log(priorityQueue.dequeue()); // Output: "Task 7"
  console.log(priorityQueue.dequeue()); // Output: "Task 10"
  console.log(priorityQueue.dequeue()); // Output: null (queue is empty)

// Sets in Javascript