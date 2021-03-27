import { IStack, Collection } from './abstract';
import { MAX_STACK_ERROR } from './constants';

/**
 * Stack
 */
export class Stack<T> implements IStack<T> {
  private storage: T[] = [];
  constructor(private capacity: number = Infinity) {}

  push(item: T) {
    if (this.size() === this.capacity) {
      throw new Error(MAX_STACK_ERROR);
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

/**
 * StackCollection Extends Abstract Class
 */
export class StackCollection<T> extends Collection<T> implements IStack<T> {
  constructor(private capacity: number = Infinity) {
    super();
  }

  push(item: T): void {
    if (this.isFull()) {
      throw new Error(MAX_STACK_ERROR);
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  isFull(): boolean {
    return this.capacity === this.size();
  }

}