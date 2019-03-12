import React, { Component } from "react";
import classes from "./Login.css";
import * as actions from "../../store/actions/index";

import mainCss from '../../assets/login/css/main.css';
import utilCss from '../../assets/login/css/util.css';
import '../../assets/login/vendor/animate/animate.css';
import '../../assets/login/vendor/css-hamburgers/hamburgers.min.css';
import '../../assets/login/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/login/vendor/select2/select2.min.css';
import '../../assets/login/vendor/daterangepicker/daterangepicker.css';
import '../../assets/login/fonts/iconic/css/material-design-iconic-font.min.css';

import {connect} from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form : {
                name:"",
                username:"",
                email: "",
                password: "",
                passwordConfirm:""
            }
        };
    }

    validateForm() {
        return this.state.form.email.length > 0 && this.state.form.password.length > 0;
    }

    handleChange = event => {

        console.log(event.target.id);

        const data = {
            ...this.state.form
        }

        data[event.target.id]=event.target.value;

        console.log(data);

        this.setState({
            form: data
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = {
            ...this.state.form
        }
        data['username']=data['email'];
        console.log(data)

        this.props.signUp(data);
    }
    render() {
        return (
            <div className={classes.LoginContent}>
                <div className={mainCss["wrap-login100"]}>
                    <form onSubmit={this.handleSubmit} className={mainCss["login100-form"]}>
					<span className={mainCss["login100-form-title"]}>
						Welcome
					</span>
                        <span className={mainCss["login100-form-title"]}>
						<i className={"zmdi zmdi-font"}></i>
					</span>

                        <div className={mainCss["wrap-input100"]} data-validate="Valid email is: a@b.c">
                            <input id="name" className={mainCss["input100"]}
                                   type="text" name="name"
                                   value={this.state.form.name}
                                   onChange={this.handleChange}/>
                            <span className={mainCss["focus-input100"]} data-placeholder="Name"></span>
                        </div>

                        <div className={mainCss["wrap-input100"]} data-validate="Valid email is: a@b.c">
                            <input id="email" className={mainCss["input100"]}
                                   type="text" name="email"
                                   value={this.state.form.email}
                                   onChange={this.handleChange}/>
                            <span className={mainCss["focus-input100"]} data-placeholder="Email"></span>
                        </div>


                        <div className={mainCss["wrap-input100"]} data-validate="Enter password">
						<span className={mainCss["btn-show-pass"]}>
							<i className="zmdi zmdi-eye"></i>
						</span>
                            <input id="password" className={mainCss["input100"]}
                                   type="password" name="pass"
                                   value={this.state.form.password}
                                   onChange={this.handleChange}/>
                            <span className={mainCss["focus-input100"]} data-placeholder="Password"></span>
                        </div>

                        <div className={mainCss["wrap-input100"]} data-validate="Enter password">
						<span className={mainCss["btn-show-pass"]}>
							<i className="zmdi zmdi-eye"></i>
						</span>
                            <input id="passwordConfirm" className={mainCss["input100"]}
                                   type="password" name="pass"
                                   value={this.state.form.passwordConfirm}
                                   onChange={this.handleChange}/>
                            <span className={mainCss["focus-input100"]} data-placeholder="Password Confirm"></span>
                        </div>

                        <div className={mainCss["container-login100-form-btn"]}>
                            <div className={mainCss["wrap-login100-form-btn"]}>
                                <div className={mainCss["login100-form-bgbtn"]}></div>
                                <button className={mainCss["login100-form-btn"]} type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>

                        <div className={utilCss["text-center"]}>
						<span className={mainCss.txt1}>
							Do have an account?
						</span>

                            <a className={mainCss.txt2} href="#">
                               Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp:(form) => dispatch(actions.signUp(form))
    }
}

export default  connect(null,mapDispatchToProps) (SignUp);
