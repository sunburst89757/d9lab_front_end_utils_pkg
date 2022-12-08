# d9lab_front_end_utils_pkg

这是一个前端工具库，源于实验室频繁遇到的需求，我们将其中通用的工具函数提炼出来汇总制作而成的一个工具库。预计工具库会主要包括常见的时间处理和科学计算。
库的配置方法见[本文](https://sunburst89757.github.io/2022/12/01/rollup/)

## 特性

- typescript 开发
- rollup 打包 支持浏览器 node 多端环境适配
- 使用 eslint prettier husky commitizen 规范编写环境和 git 提交规范

## 安装使用

- 安装库

```shell
npm i d9lab_front_end_utils_pkg
```

- 基本使用

```js
import { transferTime } from "d9lab_front_end_utils_pkg";

transferTime("2022-10-16T04:46:00.949Z"); // 2022-10-16 12:46:00
```

## 添加库功能

### 前提

- 安装 vscode prettier eslint 插件
- [设置 vscode 默认换行符为 lf](https://blog.csdn.net/sdujava2011/article/details/83827343)

### 编写发布打包

在 lib 文件夹下新建一个关于新的功能模块的文件，功能模块比如 time.ts 这个文件主要处理关于时间函数的功能 ，在这个文件中导出的无论是函数还是类，都使用具名导出的方式，然后在根目录下的 index.ts 中统一导出

```ts
export * from "./lib/time";
```

编写完功能函数/类，编写相应的单元测试，通过后再进行打包,发布

```shell
npm run build
```

### git 提交

```shell
npm run commit

```
