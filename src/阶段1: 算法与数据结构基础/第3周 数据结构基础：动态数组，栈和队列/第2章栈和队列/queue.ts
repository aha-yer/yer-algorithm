/*
 * @Author: yer
 * @Date: 2023-02-22 22:39:09
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 16:57:55
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/queue.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: yer
 * @Date: 2023-02-22 22:39:09
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 15:19:32
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/queue.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

export interface QueueType<E> {
  enqueue(val: E): void;
  dequeue(): E | undefined;
  getFront(): E | undefined;
  getSize(): number;
  isEmpty(): boolean;
}

class Queue<E> implements QueueType<E> {
  private array: E[];
  private lastIndex: number;
  constructor() {
    this.array = [];
    this.lastIndex = -1;
  }
  enqueue(val: E): void {
    this.array[++this.lastIndex] = val;
  }
  dequeue(): E | undefined {
    if (this.isEmpty()) return undefined;
    const firstValue = this.array[0];
    const tempArray = [];
    for (let i = 1; i <= this.lastIndex; i++) {
      tempArray[i - 1] = this.array[i];
    }
    this.array = tempArray;
    return firstValue;
  }
  getFront(): E | undefined {
    if (this.isEmpty()) return undefined;
    return this.array[0];
  }
  getSize(): number {
    return this.lastIndex + 1;
  }
  isEmpty(): boolean {
    return this.lastIndex === -1;
  }
}
