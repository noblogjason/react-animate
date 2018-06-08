
import React from 'react';
import { Row, Col, Card, Switch, Button, Input } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

const styles = {
    input: { width: 200, outline: 'none', fontSize: 20, padding: 10, border: 'none', backgroundColor: '#ddd', marginTop: 10, display: 'block' },
    button: { width: 180, height: 50, border: 'none', borderRadius: 4, fontSize: 20, cursor: 'pointer', transition: '.25s all', },
    buttonEnabled: { backgroundColor: '#ffc107', width: 220, }
}

class App extends React.Component {
    state = { disabled: true, }
    onChange = (e) => {
        const length = e.target.value.length;
        if (length >= 4) { this.setState(() => ({ disabled: false })) }
        else if (!this.state.disabled) {
            this.setState(() => ({ disabled: true }))
        }
    }
    render() {
        const label = this.state.disabled ? 'Disabled' : 'Submit';
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="基于React组件状态的js动画" />
                <Row gutter={14}>
                    <Card style={{ background: 'white' }}>
                        <Button style={Object.assign({}, styles.button, !this.state.disabled && styles.buttonEnabled)}
                            disabled={this.state.disabled} >{label}
                        </Button>

                        <Input style={styles.input}
                            onChange={this.onChange} />

                    </Card>
                </Row>
            </div>
        );
    }
}

export default App;