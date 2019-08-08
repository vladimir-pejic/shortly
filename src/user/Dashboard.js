import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="bg-white mx-auto rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <ul className="flex">
                            <li className="mr-6"><a className="text-blue-500 hover:text-blue-800" href="#">Active</a></li>
                            <li className="mr-6"><a className="text-blue-500 hover:text-blue-800" href="#">Link</a></li>
                            <li className="mr-6"><a className="text-blue-500 hover:text-blue-800" href="#">Link</a></li>
                            <li className="mr-6"><a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a></li>
                            <li className="mr-6 justify-right"><Link to="/">Close</Link></li>
                        </ul>
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