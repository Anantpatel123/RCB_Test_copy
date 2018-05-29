import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
// import App from './App';


ReactDOM.render(<CommentBox  url='http://localhost:3001/api/comments'
pollInterval={2000}/>,document.getElementById('root'));
// ReactDOM.render(<App />,document.getElementById('root'));