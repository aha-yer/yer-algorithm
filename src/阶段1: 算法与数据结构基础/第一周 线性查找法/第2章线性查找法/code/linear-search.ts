/*
 * @Author: yer
 * @Date: 2023-02-20 15:48:52
 * @LastEditors: yer
 * @LastEditTime: 2023-02-21 17:11:56
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第一周 线性查找法/第2章线性查找法/code/linear-search.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

class LinearSearch<T> {
  private arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }

  search(target: T): number {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === target) return i;
    }
    return -1;
  }
}

interface StudentsInterface {}
class Students implements StudentsInterface {}

// const ls = new LinearSearch<number>([1, 2, 3]);
// console.log(ls.search(1));

const stu1 = new Students(),
  stu2 = new Students(),
  stu3 = new Students();
const ls = new LinearSearch([stu1, stu2, stu3]);
console.log(ls.search(new Students()));
console.log(ls.search(stu2));
