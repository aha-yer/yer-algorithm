/*
 * @Author: yer
 * @Date: 2023-02-23 15:19:25
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 18:06:24
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/loop-queue.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

/**
 * TODO
 * 1. 使用size时, 做到不浪费一个空间
 * 2. 可以浪费一个空间, 但是不能使用size, 直接用 front 和 tail 计算 size
 *
 * 解决
 * 浪费一个空间在于, 使用 tail === front 判断是否为空, 同时tail 和 front 表示他们的下标。此时当 tail 比 front 快一个循环时就不能让他们重合, 因此会浪费一个空间
 * 1. 那么解决的方案有两个, front 和 tail 改变的时候不用转换成对应的下标, 而是直接让他们 +1 即可, rear 至多只会比 front 快一个循环
 *    - 每次插入或弹出一个元素的时候, 让 tail++ 或 front++ 即可
 *    - 队满的情况为 front === tail
 *    - 每次计算的时候需要用 front%capacity & tail%capacity 来计算 front & tail 的下标
 * 2. 或者不用 tail === front 判断是否为空, 而是使用单独的 size 字段, 那么就不需要浪费一个空间了
 */

import { QueueType } from "./queue";

class LoopQueue<E> implements QueueType<E> {
  private array: (E | undefined)[];
  private front: number;
  private tail: number;
  private size: number;

  constructor(capacity: number) {
    this.front = 0;
    this.tail = 0;
    this.size = 0;
    this.array = new Array(capacity + 1);
  }

  enqueue(val: E): void {
    if ((this.tail + 1) % this.array.length === this.front) {
      this.resize((this.array.length - 1) * 2);
    }
    this.array[this.tail] = val;
    this.tail = (this.tail + 1) % this.array.length;
    this.size++;
  }

  dequeue(): E {
    if (this.isEmpty()) throw new Error("循环数组为空");

    const frontValue: E = this.array[this.front] as E;
    this.array[this.front] = undefined;
    this.front = (this.front + 1) % this.array.length;
    this.size--;

    return frontValue;
  }

  getFront(): E {
    if (this.isEmpty()) throw new Error("循环队列为空");
    return this.array[this.front] as E;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.tail === this.front;
  }

  resize(capacity: number): void {
    const newArray: (E | undefined)[] = new Array(capacity);
    for (let i = 0; i < this.size; i++)
      newArray[i] = this.array[(i + this.front) % this.array.length];

    this.array = newArray;
    this.front = 0;
    this.tail = this.size;
  }
}

const lq = new LoopQueue(4);
lq.enqueue(1);
lq.enqueue(2);
lq.enqueue(3);
lq.enqueue(4);
lq.dequeue();
lq.dequeue();
lq.enqueue(5);
lq.enqueue(6);
lq.enqueue(7);
lq.enqueue(8);
lq.enqueue(9);
lq.dequeue();
console.log(lq);
