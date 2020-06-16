import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './HomepageComponent';
import Tweets from './TweetsComponent';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Tweets />,
  document.getElementById('tweets'),
);

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('homepage'),
);

ReactDOM.render(
  <React.StrictMode>
    <Tweets />
  </React.StrictMode>,
  document.getElementById('tweets'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
