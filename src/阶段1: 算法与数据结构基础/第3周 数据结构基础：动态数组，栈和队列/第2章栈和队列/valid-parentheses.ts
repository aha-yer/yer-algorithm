/*
 * @Author: yer
 * @Date: 2023-02-22 21:50:24
 * @LastEditors: yer
 * @LastEditTime: 2023-02-22 22:17:48
 * @FilePath: /alge/src/阶段1: 算法与数据结构基础/第3周 数据结构基础：动态数组，栈和队列/第2章栈和队列/valid-parentheses.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ArrayStack } from "./stack";

type ParenthesesType = "[" | "{" | "(";
const ParentHesesChange = {
  "[": "]",
  "{": "}",
  "(": ")",
};

function isValid(s: string): boolean {
  const stack: ParenthesesType[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") stack.push(ch);
    else {
      if (
        !stack.length ||
        ParentHesesChange[stack.pop() as ParenthesesType] !== ch
      )
        return false;
    }
  }

  return !stack.length;
}

console.log(isValid("({[]})"));
console.log(isValid("({[]])"));
