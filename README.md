# React + Mobx

`项目需要故研究mobx, 遇到的问题, 对于装饰器的开启, mobx的语法解析`

## 装饰器Decorators

  1. 两篇博客配合食用

    * https://blog.csdn.net/qq_41234284/article/details/81532294 基本配置
    * https://blog.csdn.net/zhangyabo_code/article/details/83066844装饰器配置

  2. 步骤: 

    1. 执行命令 `yarn eject`
    2. 安装babel插件 `yarn add babel-plugin-transform-decorators-legacy --dev`
    3. 在 package.json 中添加以下 babel 配置

```json
  {
    "plugins": [
      "transform-decorators-legacy"
    ],
    "presets": [
      "react-app"
    ]
  }
```
  4. 此时还会报错`The ‘decorators’ plugin requires a ‘decoratorsBeforeExport’ option`

  5. `yarn add @babel/plugin-proposal-decorators --dev`

  6. 在 package.json babel中添加, 到此浏览器不报错

```json
  "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]
```

  7. 此时 vscode提示报错 `experimentalDecorators`, 设置里面 `javascript.implicitProjectConfig.experimentalDecorators`改为true即可


---到此装饰器配置部分完成---
  
## Mobx

 ` mobx与redux类似, 均不是只为react服务, mobx相较于redux来的简单, 但是大项目中的数据追踪做的不够严谨,mobx有点类Vue`

### mobx

1. 主要api

  1. @observable

    * 概念: 创建一个被监听的对象, 没有@observable声明的视图不能检测到变化

  2. @computed 

    * 概念: 类比vue的Computed, 当依赖的值有变化时会执行一遍

  3. @action

    * 概念: 改变store的值的行为

  4. extendObservable

    * 概念: 初始为被 @observable设置为被监听值的, 可以通过extendObservable添加
      否则自行添加的没办法被mobx检测到变化

  5. autorun

    * 概念: 初始执行一次, 当依赖的值有变化时候就会执行里面的函数, 此方法在mobx-react中被 @observer 所替代

### mobx-react

1. 主要api

  1. Provider

    * 概念: Provide与redux类似, 把利用context把store注入全局中

  2. inject 

    * 概念: 给组件注入其需要的 store（利用 React context 机制）

  3. @observer

    * 概念: 监听store的变化, 同时更新视图的变化

### mobx可以创建多个store, 然后通过根store把所有的子store整合

## Demo

  1. 跟redux的demo一致, 只是做一个todoList

  2. 项目结构

      |--App.js               根组件
      |--store                根store文件夹
          |-- index.js        整合所有子store
      |--pages                子页面文件夹
          |--Home             Home子页面文件夹
              |--index.jsx    子页面
              |--store        子页面的store文件夹
                  |--index.js 

--- 项目开始了, 剩余的用法再补充---

