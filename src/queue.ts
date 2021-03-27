import { MAX_QUEUE_ERROR } from './constants';
import { Collection, IQueue } from './abstract';

/**
 * Queue
 */

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];
  constructor(private capacity: number = Infinity) {}

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw new Error(MAX_QUEUE_ERROR);
    }
    this.storage.push(item);
  }

  dequeue(): T {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  } 
}

/**
 * QueueCollection Extends Abstract Class
 */
export class QueueCollection<T> extends Collection<T> implements IQueue<T> {
  constructor(private capacity: number = Infinity) {
    super();
  }

  enqueue(item: T): void {
    if (this.isFull) {
      throw new Error(MAX_QUEUE_ERROR);
    }
    this.storage.push(item);
  }

  dequeue(): T {
    return this.storage.shift();
  }

  isFull(): boolean {
    return this.storage.length === this.size();
  } 
}