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
    
    // console.log("Sign Up Handler 1");
    // console.log(newSignup);
    // console.log(this.state.message);
    // console.log("Sign Up Handler 2");

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
        // console.log(result);
        // console.log(result.handle);
        // console.log(result.id);
        this.setState({ 
          user: { id: result.id, handle: result.handle },
          message: `Your sign up was successful.`
       })
      }
      console.log(this.state.message);
    });

    // console.log("Post fetch")
    // console.log(this.state.message)

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
        <form action="post" class="signup-form" onSubmit={this.signupHandler}>
          <input onChange={this.onChange} type="text" id="sign-up-handle" name="handle" value={handle} placeholder="pick a handle" ></input>
          <input onChange={this.onChange} type="text" id="sign-up-password" name="password" value={password}placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form>
      </div>
    );
  }

}

export default User;

