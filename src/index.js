import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomepageHeader from './HomepageHeader';
import Tweets from './Tweets';
import User from './User';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <HomepageHeader />
  </React.StrictMode>,
  document.getElementById('homepage-header'),
);

ReactDOM.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById('user'),
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
