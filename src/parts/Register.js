import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        };

        this.handleOpenRegister = this.handleOpenRegister.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpenRegister(event) {
        this.setState({dialog: !this.state.dialog});
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/user/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                this.props.history.push('/');
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
                <div><a href="#" onClick={this.handleOpenRegister}>Register</a></div>
                { this.state.dialog 
                    ? (
                        <div className="mt-px rounded bg-white border p-4 mb-4 absolute top-100 right-100">
                            <label className="float-left text-black">First Name</label>
                            <input type="text" name="firstName" placeholder="Enter first name" value={this.state.firstName} onChange={this.handleFirstNameChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <label className="float-left text-black">Last Name</label>
                            <input type="text" name="email" placeholder="Enter last name" value={this.state.lastName} onChange={this.handleLastNameChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <label className="float-left text-black">Email</label>
                            <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <label className="float-left text-black">Password</label>
                            <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} required 
                                className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                            />
                            <label className="float-left text-black">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} required 
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

export default withRouter(Register)