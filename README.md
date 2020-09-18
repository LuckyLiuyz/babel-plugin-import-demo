# babel-plugin-import-demo

babel 插件，实现在项目中把自写的业务组件，按需导入;

## 命令

## 入口

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Example, LodashCom, EchartsCom } from 'lyz'; // 通过babel插件，实现按需批量导入，比较简单并且实现了tree-shaking的效果！！
// import { Example, LodashCom, EchartsCom } from './lyz/lib/index'; // 旧版的通过相对路径的引用方式，比较繁琐并且不能实现按需导入！！

class APP extends React.PureComponent {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="app">
                <Example />
                <LodashCom />
                <EchartsCom />
            </div>
        );
    }
}

ReactDOM.render(<APP />, document.querySelector('#app'));
```

### 3 个组件全部导入

![avatar](/src/assets/img/1.png)

### 不导入 echarts，只导入另两个组件

![avatar](/src/assets/img/2.png)

### 不导入 echarts 和 lodash，只导入 1 个组件

![avatar](/src/assets/img/3.png)

### 特别注意

![avatar](/src/assets/img/4.png)
