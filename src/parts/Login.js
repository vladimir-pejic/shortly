import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { login } from "../storage/actions/index";
import store from "../storage/store/index";

// function mapDispatchToProps(dispatch) {
//     return {
//       login: logged => dispatch(login(true))
//     };
// }

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            email : '',
            password: ''
        };

        this.handleOpenLogin = this.handleOpenLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpenLogin(event) {
        this.setState({dialog: !this.state.dialog});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                this.setState({dialog: !this.state.dialog});
                // this.props.login({logged: true});
                store.dispatch(login(true));
                this.props.history.push('/dashboard');
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><a href="#" onClick={this.handleOpenLogin}>Login</a></div>
                { this.state.dialog 
                    ? (
                        <div className="mt-px rounded bg-white border p-4 mb-4 absolute top-100 right-100">
                            <label className="float-left text-black">Email</label>
                            <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <label className="float-left text-black">Password</label>
                            <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"/>
                        </div> 
                    ) 
                    : null 
                }

            </form>
        );
    }
    
}

// const Login = connect(null, mapDispatchToProps)(ConnectedLogin);

export default withRouter(Login);