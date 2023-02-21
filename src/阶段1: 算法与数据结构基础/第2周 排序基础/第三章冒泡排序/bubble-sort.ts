/*
 * @Author: yer
 * @Date: 2023-02-21 22:14:23
 * @LastEditors: yer
 * @LastEditTime: 2023-02-21 22:18:35
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第2周 排序基础/第三章冒泡排序/bubble-sort.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
class BubbleSort<T> {
  public sort(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--)
      for (let j = 0; j < i; j++)
        if (arr[j] > arr[j + 1]) this.swap(arr, j, j + 1);
    return arr;
  }

  private swap(arr: T[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const bs = new BubbleSort<number>();
console.log(bs.sort([2, 1, 6, -1, 3, 10]));
