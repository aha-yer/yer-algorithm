/*
 * @Author: yer
 * @Date: 2023-02-23 17:34:35
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 17:40:23
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/loop-queue-no-size.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { QueueType } from "./queue";

class LoopQueueNoSize<E> implements QueueType<E> {
  private array: (E | undefined)[];
  private front: number;
  private tail: number;

  constructor(capacity: number) {
    this.front = 0;
    this.tail = 0;
    this.array = new Array(capacity + 1);
  }

  enqueue(val: E): void {
    if ((this.tail + 1) % this.array.length === this.front) {
      this.resize((this.array.length - 1) * 2);
    }
    this.array[this.tail] = val;
    this.tail = (this.tail + 1) % this.array.length;
  }

  dequeue(): E {
    if (this.isEmpty()) throw new Error("循环数组为空");

    const frontValue: E = this.array[this.front] as E;
    this.array[this.front] = undefined;
    this.front = (this.front + 1) % this.array.length;

    return frontValue;
  }

  getFront(): E {
    if (this.isEmpty()) throw new Error("循环队列为空");
    return this.array[this.front] as E;
  }

  getSize(): number {
    if (this.front > this.tail)
      return this.array.length + (this.tail - this.front);
    return this.tail - this.front;
  }

  isEmpty(): boolean {
    return this.tail === this.front;
  }

  resize(capacity: number): void {
    const newArray: (E | undefined)[] = new Array(capacity);
    const size = this.getSize();
    for (let i = 0; i < size; i++)
      newArray[i] = this.array[(i + this.front) % this.array.length];

    this.array = newArray;
    this.front = 0;
    this.tail = size;
  }
}

const lq = new LoopQueueNoSize(4);
lq.enqueue(1);
lq.enqueue(2);
lq.enqueue(3);
lq.enqueue(4);
lq.dequeue();
lq.dequeue();
lq.enqueue(5);
lq.enqueue(6);
// lq.dequeue();
lq.enqueue(7);
lq.enqueue(8);
lq.enqueue(9);
lq.dequeue();
console.log(lq);
