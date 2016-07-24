var React =  require('react');
/*var ReactDOM = require('react-dom');*/

var RadioInput = require('./parts/RadioInput');
var ScoreBox = require('./parts/ScoreBox');

//var quiz;


/*$.getJSON("./templates/multipleChoiceQustion.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    //quiz = json;
});*/

//var multipleChoiceQuestionData = require('./templates/multipleChoiceQustion.json');
//console.log(multipleChoiceQuestionData);

var quiz = [{
    "question": "What does CSS stand for?",
    "choices": ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
    "answer": "Cascading Style Sheets"
}, {
    "question": "Which CSS property controls the text size?",
    "choices": ["text-size", "font-size", "font-style"],
    "answer": "font-size"
}, {
    "question": "What does HTML stand for?",
    "choices": ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    "answer": "Hyper Text Markup Language"
}];

var QuizContainer = React.createClass( {
    getInitialState: function() {
        return {
            current: 0,
            current_quiz: quiz[ 0 ],
            user_choice: "",
            score: 0,
            verifying_answer: false,
            quizlength: quiz.length
        };
    },
    selectedAnswer: function( option ) {
        this.setState( { user_choice: option } );
    },
    handleSubmit: function() {
        if ( !this.state.verifying_answer ) {
            if ( this.state.current_quiz.answer === this.state.user_choice ) {
                this.setState( {
                    score: this.state.score + 1,
                } );
            }
            this.setState( { verifying_answer: true } );
        } else {
            if ( this.state.current < quiz.length -1 ) {
                this.setState( {
                    current_quiz: quiz[ this.state.current + 1 ],
                    current: this.state.current + 1,
                    verifying_answer: false,
                    user_choice: ""
                } );
            }
        }
    },
    render: function() {
        var self = this;
        var choices = this.state.current_quiz.choices.map( function( choice, index ) {
            var classType  = "";
            if ( self.state.verifying_answer ) {
                if ( choice === self.state.current_quiz.answer ) {
                    classType = "text-success";
                } else if ( choice === self.state.user_choice && self.state.user_choice !== self.state.current_quiz.answer ) {
                    classType = "text-danger";
                }
            }
            return (
                <RadioInput key={choice} choice={choice} index={index} onChoiceSelect={self.selectedAnswer} disable={self.state.verifying_answer} classType={classType}/>
            );
        } );
        var button_name = !this.state.verifying_answer ? "Submit" : "Next Question";
        return(
            <div className="quizContainer">
                <h1>Quiz</h1>
                <p>{this.state.current_quiz.question}</p>
                {choices}
                <button id="submit" className="btn btn-default" onClick={this.handleSubmit}>{button_name}</button>
                <ScoreBox score={this.state.score} quizlength={this.state.quizlength} />
            </div>
        );
    }
} );

/*ReactDOM.render(
    <QuizContainer />,
    document.getElementById('container')
);*/

module.exports = QuizContainer;