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