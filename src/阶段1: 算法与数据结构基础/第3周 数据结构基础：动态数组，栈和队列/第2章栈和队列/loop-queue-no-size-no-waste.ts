/*
 * @Author: yer
 * @Date: 2023-02-23 17:34:35
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 17:53:43
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/loop-queue-no-size-no-waste.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

/**
 * 不使用size
 * 不浪费一个空间
 */

import { QueueType } from "./queue";

class LoopQueueNoSize<E> implements QueueType<E> {
  private array: (E | undefined)[];
  private front: number;
  private tail: number;

  constructor(capacity: number) {
    this.front = 0;
    this.tail = 0;
    this.array = new Array(capacity);
  }

  enqueue(val: E): void {
    if (
      this.tail &&
      this.tail % this.array.length === this.front % this.array.length
    ) {
      this.resize(this.array.length * 2);
    }
    this.array[this.tail % this.array.length] = val;
    this.tail++;
  }

  dequeue(): E {
    if (this.isEmpty()) throw new Error("循环数组为空");

    const frontValue: E = this.array[this.front % this.array.length] as E;
    this.array[this.front % this.array.length] = undefined;
    this.front++;

    return frontValue;
  }

  getFront(): E {
    if (this.isEmpty()) throw new Error("循环队列为空");
    return this.array[this.front % this.array.length] as E;
  }

  getSize(): number {
    return this.tail - this.front;
  }

  isEmpty(): boolean {
    return this.tail === this.front;
  }

  resize(capacity: number): void {
    const newArray: (E | undefined)[] = new Array(capacity);
    const size = this.getSize();
    const front = this.front % this.array.length;
    for (let i = 0; i < size; i++)
      newArray[i] = this.array[(i + front) % this.array.length];

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
// lq.dequeue();
lq.enqueue(5);
// lq.enqueue(6);
lq.dequeue();
// lq.enqueue(7);
// lq.enqueue(8);
// lq.enqueue(9);
// lq.dequeue();
console.log(lq);
