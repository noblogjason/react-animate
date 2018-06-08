
import React from 'react';
import { Motion, spring, TransitionMotion, presets } from 'react-motion'; //引用方式
import { Row, Col, Card, Switch, Button, Input } from 'antd';

import BreadcrumbCustom from '../BreadcrumbCustom';
import './public.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };//1

        this.state.list = [{
            key: "1"
        }];
        // this.state.hh = 1;
    }

    handleMouseDown = () => {
        this.setState({ open: !this.state.open });
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };



    handleMouseDownOutIn = () => {
        let list = (this.state.list.length ? [] : [{ key: "1" }])
        
        this.setState({ list });

        // let hh = this.state.hh == 1 ? 0.1 : 1
        // this.setState({ hh })
    };
    willEnter(e) {
     
        return {
            height: spring(200, presets.gentle),
            width: spring(200, {stiffness:20,damping:14}),
            opacity: spring(1, {stiffness:20,damping:14})
        };
      };
    
    willLeave(e) {

        return {
          height: spring(0, {stiffness:20,damping:14}),
          width: spring(0, {stiffness:20,damping:14}),
          opacity: spring(0, {stiffness:20,damping:14}),
        };
      };


    render() {
        const label = this.state.disabled ? 'Disabled' : 'Submit';
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="基于React组件状态的js动画" />
                <Row gutter={14}>
                    <Card style={{ background: 'white' }}>
                        <Button
                            onMouseDown={this.handleMouseDown.bind(this)}
                            onTouchStart={this.handleTouchStart.bind(this)}>
                            位移
                        </Button>
                        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
                            {({ x }) =>
                               
                                <div className="demo0">
                                    <div className="demo0-block" style={{
                                        WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                        transform: `translate3d(${x}px, 0, 0)`,
                                    }} />
                                </div>
                            }
                        </Motion>
                    </Card>
                    <Card style={{ background: 'white' }}>
                        <Button
                            onMouseDown={this.handleMouseDownOutIn.bind(this)}>
                            进出
                            </Button>
                        <TransitionMotion
                            styles={
                                this.state.list.map(item => {
                                    return {
                                        ...item,
                                        style: {
                                            height: spring(200, presets.gentle),
                                            width: spring(200, presets.gentle),
                                            opacity: spring(1, {stiffness:20,damping:14})
                                            // height: 200,
                                            // width: 200,
                                            // opacity: 1
                                        }
                                    }
                                })
                            }
                            willLeave={this.willLeave}
                            willEnter={this.willEnter}
                        >
                            {mystyle =>
                                <div>
                                    {mystyle.map((item) =>

                                        <li>
                                            <div key={item.key} style={item.style} className="border"></div>
                                        </li>
                                    )}
                                </div>

                            }
                            </TransitionMotion>
                        </Card>

                </Row >
            </div >
        );
    }
}

export default App;