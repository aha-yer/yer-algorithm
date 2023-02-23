/*
 * @Author: yer
 * @Date: 2023-02-22 15:50:40
 * @LastEditors: yer
 * @LastEditTime: 2023-02-22 22:11:39
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/stack.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
interface StackInterface<E> {
  push(val: E): void;
  pop(): E;
  peek(): E;
  isEmpty(): boolean;
}

export class ArrayStack<E> implements StackInterface<E> {
  private stack: E[];
  private rearIndex: number;
  constructor() {
    this.stack = [];
    this.rearIndex = -1;
  }
  push(val: E): void {
    this.stack[++this.rearIndex] = val;
  }
  pop(): E {
    return this.stack[this.rearIndex--];
  }
  peek(): E {
    return this.stack[this.rearIndex];
  }
  isEmpty(): boolean {
    return this.rearIndex === -1;
  }
}
