import React from 'react';
import { VelocityComponent,VelocityTransitionGroup } from 'velocity-react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Row, Col, Card, Switch, Button, Input } from 'antd';
import './public.css';

const VelocityLetter = ({ letter }) => (
    <VelocityComponent runOnMount animation={{ opacity: 1, marginTop: 0 }} duration={500} >
        <p style={styles.letter}>{letter}</p>
    </VelocityComponent>
)
class App extends React.Component {
    state = {
        letters: [],
        duration: 1500,
        open: false,
    }
    

    handleMouseDown = () => {
        this.setState({ open: !this.state.open });
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="velocity react动画进出场" />

                <Card style={{ background: 'white' }}>
                    <div className="container">
                        <Button
                            onMouseDown={this.handleMouseDown.bind(this)}
                            onTouchStart={this.handleTouchStart.bind(this)}>
                            进出
                        </Button>
                        {/* <input onChange={this.onChange} style={styles.input} /> */}
                        <VelocityTransitionGroup runOnMount
                            enter={{ animation: 'slideDown', duration: this.state.duration }}
                            leave={{ animation: 'slideUp', duration: this.state.duration }}
                        >
                            {this.state.open && <div className="border" style={{width:"200px",height:"200px"}}></div>}
                        </VelocityTransitionGroup>
                    </div>
                </Card>
            </div>
        );
    }
}

const styles = {
    input: { height: 40, backgroundColor: '#ddd', width: 200, border: 'none', outline: 'none', marginBottom: 20, fontSize: 22, padding: 8, },
    letters: { display: 'flex', height: 140, },
    letter: { opacity: 0, marginTop: 100, fontSize: 22, whiteSpace: 'pre', }
}

export default App;


