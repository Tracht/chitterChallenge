import React from 'react';
import './index.css'

class User extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "To start tweeting, please login or signup.",
      user: {
        handle: "",
        id: ""
      }
    }
  };

  signupHandler = (event) => {
    event.preventDefault();
    let newSignup = {
      user: {
        handle: this.state.handle,
        password: this.state.password
      }
    }
    fetch('https://chitter-backend-api-v2.herokuapp.com/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json'}, 
      body: JSON.stringify(newSignup),
    })
    .then(response => response.json())
    .then((result) => {
      if (result.handle[0] === "has already been taken") {
        this.setState({ 
          user: { id: "", handle: "" },
          message:  "This handle is already registered, pick another."
         })
      } else {
        this.setState({ 
          user: { id: result.id, handle: result.handle },
          message: `Your sign up was successful.`
       })
      }
      console.log(this.state.message);
    });
    // this.cancelCourse()
  }

  cancelCourse = () => {
    document.getElementsByClassName("signup-form").reset();
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
   
    const { handle, password, message } = this.state;

    return ( 
      <div class="user-position">
        <p class="message"> { message } </p>

        <form class="signup-form" onSubmit={this.signupHandler}>
          <input onChange={this.onChange} type="text" id="signup-handle" name="handle" value={handle} placeholder="pick a handle" ></input>
          <input onChange={this.onChange} type="text" id="signup-password" name="password" value={password} placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form>

      </div>
    );
  }

}

export default User;

