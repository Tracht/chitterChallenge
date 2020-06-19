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

  // loginHandler = (event) => {
  //   event.preventDefault();
  //   let login = {
  //     user: {
  //       handle: this.state.handle,
  //       password: this.state.password
  //     }
  //   }
  //   fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' }, 
  //     body: JSON.stringify(login),
  //   })
  //   .then(response => response.json())
  //   .then((result) => {
  //     console.log(result.user_id);
  //     if (result.user_id !== 77 ) {
  //       this.setState({ message:  "Wrong handle and/or password combination." })
  //     } else {
  //       this.setState({
  //         user: { id: result.user_id },
  //         session: { session_key: result.session_key },
  //         message: "Welcome back."
  //       })
  //     }
  //     console.log(this.state.message);
  //     console.log(this.state.session.session_key);
  //   })
  // }

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
          message: ""
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

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
   
    // const { handle, password, message } = this.state;
    const { loginHandle, loginPassword, signupHandle, signupPassword, message, alert, successMessage } = this.state;
    return ( 
      <div class="user-position">
        <p class="message"> { message } </p>
        <p class="alert"> { alert } </p>
        <p class="success-message"> { successMessage } </p>

        {/* <form class="login-form" onSubmit={this.loginHandler}>
          <input onChange={this.onChange} type="text" id="login-handle" name="loginHandle" value={loginHandle} placeholder="enter your handle" ></input>
          <input onChange={this.onChange} type="text" id="login-password" name="loginPassword" value={loginPassword} placeholder="enter your password"></input>
          <input type="submit" value="Login"></input>
        </form>

        <br></br>

        <form class="signup-form" onSubmit={this.signupHandler}>
          <input onChange={this.onChange} type="text" id="signup-handle" name="signupHandle" value={signupHandle} placeholder="pick a handle"></input>
          <input onChange={this.onChange} type="text" id="signup-password" name="signupPassword" value={signupPassword} placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form> */}

        <form class="login-form" onSubmit={this.loginHandler}>
          <input onChange={this.onChange} type="text" id="login-handle" name="handle" value={loginHandle} placeholder="enter your handle" ></input>
          <input onChange={this.onChange} type="text" id="login-password" name="password" value={loginPassword} placeholder="enter your password"></input>
          <input type="submit" value="Login"></input>
        </form>

        <br></br>

        <form class="signup-form" onSubmit={this.signupHandler}>
          <input onChange={this.onChange} type="text" id="signup-handle" name="handle" value={signupHandle} placeholder="pick a handle"></input>
          <input onChange={this.onChange} type="text" id="signup-password" name="password" value={signupPassword} placeholder="pick a password"></input>
          <input type="submit" value="Sign up"></input>
        </form>

      </div>
    );
  }

}

export default User;

