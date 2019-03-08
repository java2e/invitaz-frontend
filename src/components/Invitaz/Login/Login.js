import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import classes from "./Login.css";

import * as actions from '../../../store/actions/index';

import {connect} from 'react-redux';

 class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isSignUp:true
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onAuth(this.state.email,this.state.password,this.state.isSignUp);
    }

    switchAuthHandler =()=> {
        this.setState(prevState=> {
            return{isSignUp:!prevState.isSignUp};
        });
    }

    render() {
        return (
            <div className={classes.LoginContent}>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <Form.Label>Email</Form.Label>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <Form.Label>Password</Form.Label>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
                <Button onClick={this.switchAuthHandler}>SWITCH TO {this.state.isSignUp ? 'SIGNIN':'SIGNUP'}</Button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
     return {
         onAuth:(email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
     }
}

export default connect(null,mapDispatchToProps)(Login);
