## 编程语言通识
### 语言按语法分类
* 非形式语言
    * 中文、英文
* 形式语言（乔姆斯基谱系）
    * 0型 无限制文法
    * 1型 上下文相关文法
    * 2型 上下文无关文法
    * 3型 正则文法

### 产生式（BNF）
* 用括号括起来的名称标识语法结构名
* 语法结构分成基础结构和需要其他语法结构定义的复合结构
    * 基础结构称终结符
    * 复合结构称非终结符
* 引号和中间的字符表示终结符
* 可以有括号
* *表示重复多次
* |表示或
* +表示至少一次

### 基本概念

#### Program Errors

1. trapped errors: 导致程序终止执行，如除0，数组越界访问
2. untrapped errors: 出错后继续执行，但可能出现任意行为。如C里的缓冲区溢出、Jump到错误地址
3. Forbidden Behaviours

> 语言设计时，可以定义一组forbidden behaviors. 它必须包括所有untrapped errors, 但可能包含trapped errors.

#### Well behaved、ill behaved

1. well behaved: 如果程序执行不可能出现forbidden behaviors, 则为well behaved。
2. ill behaved: 否则为ill behaved...
### 强、弱类型

1. 强类型strongly typed: 如果一种语言的所有程序都是well behaved——即不可能出现forbidden behaviors，则该语言为strongly typed

2. 弱类型weakly typed: 否则为weakly typed。比如C语言的缓冲区溢出，属于trapped errors，即属于forbidden behaviors..故C是弱类型

> 弱类型语言，类型检查更不严格，如偏向于容忍隐式类型转换

### 动态、静态类型

1. 静态类型 statically: 如果在编译时拒绝ill behaved程序，则是statically typed;
2. 动态类型dynamiclly: 如果在运行时拒绝ill behaviors, 则是dynamiclly typed。# 每周总结可以写在这里