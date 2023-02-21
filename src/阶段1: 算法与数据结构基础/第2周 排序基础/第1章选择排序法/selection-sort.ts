/*
 * @Author: yer
 * @Date: 2023-02-21 17:54:34
 * @LastEditors: yer
 * @LastEditTime: 2023-02-21 18:13:54
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第2周 排序基础/第1章选择排序法/selection-sort.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class SelectionSort<T> {
  private arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }

  public getArr(): T[] {
    return this.arr;
  }

  public sort() {
    for (let i = 0; i < this.arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.arr.length; j++)
        if (this.arr[minIndex] > this.arr[j]) minIndex = j;
      if (minIndex !== i) this.swap(this.arr, minIndex, i);
    }
  }

  public sortRearToFront() {
    for (let i = this.arr.length; i > 0; i--) {
      let maxIndex = i;
      for (let j = i - 1; j >= 0; j--)
        if (this.arr[maxIndex] < this.arr[j]) maxIndex = j;
      if (maxIndex !== i) this.swap(this.arr, maxIndex, i);
    }
  }

  private swap(arr: T[], i: number, j: number) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
}

const ss = new SelectionSort([6, 4, 2, 3, 1, 5]);
// ss.sort();
ss.sortRearToFront();
console.log(ss.getArr());
