import React from 'react';
import './index.css';
import './User.js';
import './Tweets.js';

class HomepageHeader extends React.Component{

  render() {
    return <div>
        <h2 class="homepage-header">
          <img src="https://bit.ly/37wXEkG" alt="red angry bird" float="left" width="30" height="50"/>
          Welcome to Twitter 
        </h2>

    </div>
  }
  
}

export default HomepageHeader;