import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Urls from './dashboard/Urls';
import Metrics from './dashboard/Metrics';
import Profile from './dashboard/Profile';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container pt-6 md:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="bg-white mx-auto rounded overflow-hidden shadow-lg relative">
                    <div className="px-6 py-4">
                        <ul className="flex">
                            <li className="mr-6"><Link to="/dashboard" className="text-blue-500 hover:text-blue-800">URLs</Link></li>
                            <li className="mr-6"><Link to="/dashboard/metrics" className="text-blue-500 hover:text-blue-800">Metrics</Link></li>
                            <li className="mr-6"><Link to="/dashboard/profile" className="text-blue-500 hover:text-blue-800">Profile</Link></li>
                        
                            {/* <li className="mr-6 justify-right"><Link to="/">Close</Link></li> */}
                            <li className="absolute" style={{top: 10 + 'px', right: 15 + 'px'}}>
                                <Link to="/">
                                    <svg class="h-6 w-6 fill-current text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        <Switch>
                            <Route exact path="/dashboard" component={Urls} />
                            <Route exact path="/dashboard/metrics" component={Metrics} />
                            <Route path="/dashboard/profile" component={Profile} />    
                        </Switch>
                        <hr />
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                    </div>
                </div>
            </div>
        );
    }
    
}