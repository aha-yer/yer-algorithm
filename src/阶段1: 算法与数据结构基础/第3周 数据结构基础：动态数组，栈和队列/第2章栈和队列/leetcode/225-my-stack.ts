/*
 * @Author: yer
 * @Date: 2023-02-23 19:13:42
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 19:41:54
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/leetcode/225-my-stack.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { LoopQueueNoSizeNoWaste } from "../loop-queue-no-size-no-waste";

class MyStack {
  private data: LoopQueueNoSizeNoWaste<number>;
  constructor() {
    this.data = new LoopQueueNoSizeNoWaste<number>(5);
  }

  push(x: number): void {
    const tempQueue = new LoopQueueNoSizeNoWaste<number>(
      this.data.getCapacity()
    );
    tempQueue.enqueue(x);
    while (this.data.getSize()) {
      tempQueue.enqueue(this.data.dequeue());
    }
    this.data = tempQueue;
  }

  pop(): number {
    if (this.empty()) throw new Error("栈为空");
    return this.data.dequeue();
  }

  top(): number {
    if (this.empty()) throw new Error("栈为空");
    return this.data.getFront();
  }

  empty(): boolean {
    return this.data.getSize() === 0;
  }
}

var obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
console.log(obj.pop());
console.log(obj.top());
console.log(obj.empty());
