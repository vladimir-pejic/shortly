import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: null,
        };
    }

    componentDidMount() {
        fetch('/check-token', { method: 'GET' })
            .then(res => {
                this.setState({ logged: res.statusText });
            });
    }

    render() {
        return (
            <div className="w-full container mx-auto p-6">
                    
                <div className="w-full flex items-center justify-between">
                    <a className="flex items-center text-white hover:text-purple-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
                        <svg className="h-8 fill-current text-purple-800 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg> Shrtd!
                    </a>
                    
                    { this.state.logged != 'OK'
                        ? (
                            <div className="flex w-1/2 justify-end content-center">
                                <span className="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 ">
                                    <Login></Login>
                                </span>
                                <span className="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 ">
                                    Register
                                </span>
                            </div>
                        )
                        : (
                            <div className="flex w-1/2 justify-end content-center">
                                <span className="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 ">
                                    <Link to="/dashboard">Dashboard</Link>
                                </span>
                                <span className="inline-block text-white no-underline hover:text-yellow-400 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 ">
                                    Logout
                                </span>
                            </div>
                        )
                    }
                </div>

            </div>
        );
    }
    
}