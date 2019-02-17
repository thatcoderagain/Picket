import './react.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import * as serviceWorker from './serviceWorker';

if (document.getElementById('react')) {
    ReactDOM.render(<Router />, document.getElementById('react'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// const tags = document.querySelectorAll('.tag');
// if(tags.length > 0) {
//     tags.forEach((tag) => {
//         ReactDOM.render(<TAGNAME />, tag)
//     });
// }
