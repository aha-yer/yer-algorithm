/*
 * @Author: yer
 * @Date: 2023-02-23 19:13:31
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 20:00:41
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/leetcode/232-my-queue.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class MyQueue {
  private data: number[];
  constructor() {
    this.data = [];
  }

  push(x: number): void {
    const tempStack = [];
    while (this.data.length > 0) {
      tempStack.push(this.data.pop() as number);
    }
    this.data.push(x);

    while (tempStack.length) {
      this.data.push(tempStack.pop() as number);
    }
  }

  pop(): number {
    if (!this.data.length) throw new Error("队列为空");
    return this.data.pop() as number;
  }

  peek(): number {
    return this.data[this.data.length - 1] as number;
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}

var obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.empty());
