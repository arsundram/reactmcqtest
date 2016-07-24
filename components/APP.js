import React from 'react';
var io = require('socket.io-client');
var Header = require('./parts/Header');

class APP extends React.Component {
    constructor() {
        super();
        this.state = ({
            status: 'disconnected',
            title: 'Header Text'
        });
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
    }

    connect() {
        console.log('connected');
        this.setState({ status: 'connected' });
    }

    disconnect() {
        console.log('disconnected');
        this.setState({ status: 'disconnected' });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status}/>
            </div>
        );
    }
}

module.exports = APP;
//https://www.lynda.com/Web-Development-tutorials/Handling-disconnects/387145/433099-4.html
//http://stackoverflow.com/questions/32907607/react-router-1-0-0rc1-passing-state-as-properties-to-child-routes