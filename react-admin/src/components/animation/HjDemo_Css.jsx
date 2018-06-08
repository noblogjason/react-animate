
import React from 'react';
import { Row, Col, Card, Switch } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import './HjDemo_Css.css';
class App extends React.Component {
    state = { focused: false }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    focus = () => {
        this.setState((state) => ({ focused: !state.focused }))
    }
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="基于React组件状态的css动画" />
                <Card style={{ background: 'white' }}>
                    <div className="container">
                        <input ref={input => this.input = input} className={['input', this.state.focused && 'input-focused'].join(' ')} />
                    </div>
                </Card>
            </div>
        );
    }
}

export default App;