/*
 * @Author: yer
 * @Date: 2023-02-22 15:50:40
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 19:58:07
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/stack.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export interface StackInterface<E> {
  push(val: E): void;
  pop(): E;
  peek(): E;
  isEmpty(): boolean;
}

export class ArrayStack<E> implements StackInterface<E> {
  private stack: E[];

  constructor() {
    this.stack = [];
  }

  push(val: E): void {
    this.stack.push(val);
  }

  pop(): E {
    return this.stack.pop();
  }

  peek(): E {
    return this.stack[this.stack.length - 1];
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
