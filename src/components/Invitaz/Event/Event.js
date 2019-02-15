import React, {Component} from 'react';
import EventComponent from '../Event/Event1/EventComponent';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card, Col, Container, Row} from 'react-bootstrap';

import Resume from '../../../assets/images/resume.png';
import Settings from '../../../assets/images/setting.png';


class Event extends Component {

    state = {
        current: 0,
        isEnable: true,

        form: {
            adSoyad1: '',
            adSoyad2: '',
            aciklama: '',
            tarih: new Date(),
            lokasyon: ''
        }

    }
    next = () => {
        const current = this.state.current + 1;

        if (current > 4)
            this.setState({current: 0});
        else
            this.setState({current: current});
    }
    prev = () => {
        const current = this.state.current - 1;
        if (current < 0) {
            this.setState({current: 4});
        }
        else
            this.setState({current: current});
    }

    handleTextChange = (event, elementKey) => {


        console.log(elementKey)

        const disabledInfo = {
            ...this.state.form
        };
        for (let key in disabledInfo) {

            if (key === elementKey)
                disabledInfo[key] = event.target.value.toUpperCase();
        }

        this.setState({form: disabledInfo});


    }

    onHandleChangeDate=(date)=> {

        console.log("Date"+this.state);

        const disabledInfo = {
            ...this.state.form
        };

        disabledInfo['tarih']=date;

        this.setState({form: disabledInfo});
    }

    postDataHandler = () => {
        const data = {
            ...this.state.form
        }

        console.log(data)

        axios.post('http://localhost:8080/rest/country/addCountry', data)
            .then(response => {
                console.log(response);
                this.props.history.replace('/posts');
                // this.setState( { submitted: true } );
            });
    }

    render() {

        const currentId = this.state.current;
        const isEnable = currentId === 4;


        return (
            <div>

                <Container>
                    <Row>
                        <Col sm={10}>

                            <Card style={{backgroundColor: 'transparent'}}>
                                <Card.Header as="h5">DÜĞÜN & NİŞAN DAVETİYESİ</Card.Header>
                                <Card.Body style={{}}>

                                    <EventComponent current={this.state.current}
                                                    form={this.state.form}
                                                    onHandlerDate={this.onHandleChangeDate}
                                                    onChangeInput={this.handleTextChange}/>

                                    <div style={{margin: 'auto', marginTop: '15px', width: '50%'}}>
                                        <Button color="danger" onClick={this.prev}>GERİ</Button>
                                        <Button style={{marginLeft: '20px'}} color="danger"
                                                onClick={this.next}>İLERİ</Button>
                                    </div>
                                    <div hidden={!isEnable} style={{margin: 'auto', marginTop: '15px', width: '50%'}}>
                                        <Button color="danger" onClick={this.postDataHandler}>TAMAMLA</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={1}>sm=4</Col>
                        <Col sm={1}>

                            <img src={Resume} style={{width:'100%',marginTop:'10px'}} alt="MyBurger"/>
                            <img src={Settings} style={{width:'100%'}} alt="MyBurger"/>


                        </Col>
                    </Row>
                </Container>

                <div>
                </div>

            </div>
        );
    }

}


export default Event;
