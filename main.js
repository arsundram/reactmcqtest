var React =  require('react');
var ReactDOM = require('react-dom');
/*var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;*/

var APP = require('./components/APP');
var QuizContainer = require('./components/multipleChoiceQuestion');
/*var Audiance = require('./components/Audiance');
var Board = require('./components/Board');
var Speaker = require('./components/Speaker');

var routes = (
    <Route handler={APP}>
        <DefaultRoute handler={Audiance} />
        <Route name="speaker" path="speaker" handler={Speaker}></Route>
        <Route name="audiance" path="audiance" handler={Audiance}></Route>
        <Route name="board" path="borad" handler={Board}></Route>
);

Router.run(routes, function(Handler) {
   React.render(<Handler />, document.getElementById('react-container'))
})*/
/*ReactDOM.render(<APP text="Hello From Outside the React Component" />, document.getElementById('react-container'));*/
ReactDOM.render(<QuizContainer />, document.getElementById('container'));