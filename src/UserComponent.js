import React from 'react';
import './index.css'

class User extends React.Component {

  constructor() {
    super();
    this.state = {
      alert: "",
      message: "To start tweeting, please login or signup.",
      successMessage: "",
      user: { handle: "", password: "", id: "" },
      session: { session_key: "" }
    }
  };

  loginHandler = (event) => {
    event.preventDefault();
    let handle = {
      user: {
        handle: this.state.handle 
      }
    }
    let password = {
      user: {
        password: this.state.password
      }
    }
    let login = {
      session: {
        handle: handle.user.handle,
        password: password.user.password
      }
    }
    fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(login),
    })
    // console.log(login)
    .then(response => response.json())
    // .then((response => { console.log(response); console.log("1")}))
    .then((result) => {
      console.log(result);
      if (result.errors != null ) {
        this.setState({ 
          alert:  "Wrong handle and/or password combination.", 
          message: "",
          successMessage: "",
      })} else {
        this.setState({
          user: { id: result.user_id },
          session: { session_key: result.session_key },
          successMessage: "Welcome back.", 
          message: "", 
          alert: ""
        })
      }
      // console.log(this.state.message);
      // console.log(this.state.user.id);
      // console.log(this.state.session.session_key);
    })
    .catch((error) => { console.log(error); console.log("2") })
  }

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
          message:  "",
          alert: "This handle is already registered, pick another."
         })
      } else {
        this.setState({ 
          user: { id: result.id, handle: result.handle },
          successMessage: "Your sign up was successful.",
          message: "",
          alert: ""
       })
      }
      console.log(this.state.message);
      console.log(this.state.user.password);
      console.log(this.state.user.handle);
      console.log(this.state.user.id);
    });
    // this.cancelCourse()
  }

  cancelCourse = () => {
    document.getElementsByClassName("signup-form").reset();
  }

  onFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
   
    const { loginHandle, loginPassword, signupHandle, signupPassword, message, alert, successMessage } = this.state;
    return ( 
      <div class="user-position">
        <p class="message"> { message } </p>
        <p class="alert"> { alert } </p>
        <p class="success-message"> { successMessage } </p>

        <form class="login-form" onSubmit={this.loginHandler}>
          <input onChange={this.onFormChange} type="text" id="login-handle" name="handle" value={loginHandle} placeholder="enter your handle" ></input>
          <input onChange={this.onFormChange} type="text" id="login-password" name="password" value={loginPassword} placeholder="enter your password"></input>
          <input type="submit" value="Login"></input>
        </form>

        <br></br>

        <form class="signup-form" onSubmit={this.signupHandler}>
          <input onChange={this.onFormChange} type="text" id="signup-handle" name="handle" value={signupHandle} placeholder="pick a handle"></input>
          <input onChange={this.onFormChange} type="text" id="signup-password" name="password" value={signupPassword} placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form>

      </div>
    );
  }

}

export default User;

