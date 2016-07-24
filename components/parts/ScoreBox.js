var React =  require('react');

var ScoreBox = React.createClass({
    render: function() {
        return (
            <div className="score">
                <p>Score: {this.props.score} right answers out of {this.props.quizlength} possible.</p>
            </div>
        );
    }
});

module.exports = ScoreBox;
