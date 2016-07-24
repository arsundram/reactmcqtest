var React =  require('react');

var TextArea = React.createClass({
    render: function() {
        return (
            <div className="score">
                <p>Score: {this.props.score} right answers out of {this.props.quizlength} possible.</p>
            </div>
        );
    }
});

module.exports = TextArea;
