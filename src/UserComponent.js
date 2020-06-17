import React from 'react';
import './index.css'

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "To start tweeting, please login or signup."
    }
  }

  componentDidMount() {
    this.signup('https://chitter-backend-api-v2.herokuapp.com/users')
  }

  signup = (postData) => {
    
  }

  render() {
    return ( 

    <div class="user-position">
      
      <section> 
        <form action="" class="signup-form">
          <input type="text" id="sign-up-handle" name="handle" placeholder="pick a handle"></input>
          <input type="text" id="sign-up-password" name="handle" placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form>
      </section>

    </div>

    )
   
  }


}

export default User;

