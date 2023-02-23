/*
 * @Author: yer
 * @Date: 2023-02-23 17:25:19
 * @LastEditors: yer
 * @LastEditTime: 2023-02-23 17:26:58
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/double-end-queue.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

interface DequeType<E> {
  addFront(value: E): void;
  remoteFront(): E;
  addLast(value: E): void;
  removeLast(): E;
}

class Deque<E> implements DequeType<E> {
  addFront(value: E): void {
    throw new Error("Method not implemented.");
  }
  remoteFront(): E {
    throw new Error("Method not implemented.");
  }
  addLast(value: E): void {
    throw new Error("Method not implemented.");
  }
  removeLast(): E {
    throw new Error("Method not implemented.");
  }
}
