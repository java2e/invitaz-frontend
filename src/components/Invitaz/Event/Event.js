import React, {Component} from 'react';
import Event1 from '../Event/Event1/Event1';
import Event12 from '../Event/Event1/Event12';
import { Button,ButtonToolbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const steps = [{
    title: 'First',
    content: <Event1/>,
}, {
    title: 'Second',
    content: <Event12/>,
}, {
    title: 'Last',
    content: <Event1/>,
}
    , {
        title: 'Last2',
        content: <Event1/>,
    }
    , {
        title: 'Last3',
        content: <Event1/>,
    }];

class Event extends Component {

    state = {
        current: 0
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current:current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }


    render() {

        return (
            <div>
                <div>
                    {steps[1].content}
                </div>
                <div style={{margin:'auto',width:'50%'}}>
                        <Button color="danger">Danger!</Button>
                        <Button color="danger" onClick={this.next}>Danger!</Button>
                </div>
            </div>
        );
    }

}


export default Event;