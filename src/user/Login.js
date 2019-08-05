import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <div className="mb-4">
                    <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} required 
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                    />
                    <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} required 
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-4 border-solid border-pink-600" 
                    />
                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"/>
                </div> 
            </form>
        );
    }
    
}