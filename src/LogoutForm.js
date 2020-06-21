import React from 'react';
import './index.css'

class LogoutForm extends React.Component {

  render() {
    return(
      <div>
        <form class="logout-form" onSubmit={this.logoutHandler}>
          <input type="submit" value="Logout"></input>
        </form>
      </div>
    )
  }

}

export default LogoutForm; 