import React, { Component } from 'react';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p className="text-gray-700 text-base">
                    User profile, change name, password, connect with google acc and facebook
                </p>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        );
    }
}