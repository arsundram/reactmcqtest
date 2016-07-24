import React from 'react';

var Header = React.createClass ({

    /*getInitialState() {
        return {
            status: 'disconnected',
            title: ''
        }
    },*/

    propTypes: {
          title: React.PropTypes.string.isRequired,
           status: React.PropTypes.string
    },

    render() {
        return (
            <header className="row">
                <div className="col-xs-10">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="col-xs-2">
                    <span id="connection-status" className={this.props.status}>{this.props.status}</span>
                </div>
            </header>
        );
    }
});

module.exports = Header;
