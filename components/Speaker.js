/**
 * Created by asankab on 7/19/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Author extends React.Component {
    render() {
        return <h1>Methuka & Mischel Loves Anusha</h1>
    }
}

ReactDOM.render(<Author/>, document.getElementById('react-container'));