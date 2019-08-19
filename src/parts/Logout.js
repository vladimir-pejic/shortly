import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        // try {
        //     console.error('local storage:', localStorage);
        //     console.error('session storage:', sessionStorage);
        //     localStorage.removeItem('token');
        //     sessionStorage.removeItem('token');
        //     this.props.history.push('/');
        // } catch (error) {
        //     console.log(error);
        // }
        fetch('/api/user/logout', {
            method: 'GET',
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
            alert('Error logging out please try again');
        });
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.handleLogout}>Logout</a>
            </div>
        );
    }
    
}

export default withRouter(Logout);