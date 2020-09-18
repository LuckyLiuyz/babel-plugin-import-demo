import React from 'react';
import ReactDOM from 'react-dom';
import { Example, LodashCom, EchartsCom } from 'lyz';
// import { Example, LodashCom, EchartsCom } from './lyz/lib/index';

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