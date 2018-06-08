import React from 'react';
import { VelocityComponent } from 'velocity-react';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Row, Col, Card, Switch, Button, Input } from 'antd';

const VelocityLetter = ({ letter }) => (
    <VelocityComponent runOnMount animation={{ opacity: 1, marginTop: 0 }} duration={500} >
        <p style={styles.letter}>{letter}</p>
    </VelocityComponent>
)
class App extends React.Component {
    state = { letters: [], }
    onChange = (e) => {
        const letters = e.target.value.split('');
        const arr = []
        letters.forEach((l, i) => { arr.push(<VelocityLetter letter={l} />) })
        this.setState(() => ({ letters: arr }))
    }
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="动画" second="velocity react动画案例" />

                <Card style={{ background: 'white' }}>
                    <div className="container">
                        <input onChange={this.onChange} style={styles.input} />
                        <div style={styles.letters}> {this.state.letters}
                        </div>
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


