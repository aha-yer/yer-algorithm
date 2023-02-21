/*
 * @Author: yer
 * @Date: 2023-02-21 18:15:17
 * @LastEditors: yer
 * @LastEditTime: 2023-02-21 22:53:49
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第2周 排序基础/第2章插入排序法/insertion-sort.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class InsertionSort<T> {
  /**
   * [0, i)有序, [i, n)未排序
   */
  public sort(arr: T[]): T[] {
    for (let i = 1; i < arr.length; i++)
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--)
        this.swap(arr, j, j - 1);
    return arr;
  }

  /**
   * 优化1
   * 内层循环不需要每次都进行交换, 实际每次操作都是某一部分数字平移的一个过程
   */
  public sort_optimize(arr: T[]): T[] {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      let valueI = arr[i];
      for (; j > 0 && valueI < arr[j - 1]; j--) arr[j] = arr[j - 1];
      arr[j] = valueI;
    }
    return arr;
  }

  /**
   * [0, i)未排序, [i, n)有序
   */
  public sort_rearToFront(arr: T[]): T[] {
    for (let i = arr.length - 2; i >= 0; i--) {
      let valueI = arr[i];
      let j = i;
      for (; j < arr.length - 1 && valueI > arr[j + 1]; j++)
        arr[j] = arr[j + 1];
      arr[j] = valueI;
    }
    return arr;
  }

  private swap(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const is = new InsertionSort<number>();
// console.log(is.sort([2, 1, 6, -1, 3, 10]));
// console.log(is.sort_optimize([2, 1, 6, -1, 3, 10]));
console.log(is.sort_rearToFront([2, 1, 6, -1, 3, 10]));
