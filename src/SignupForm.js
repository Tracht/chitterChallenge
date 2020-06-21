import React from 'react';
import './index.css'

class SignupForm extends React.Component {

  render() {
    return(
      <div>
        <form class="login-form" onSubmit={this.loginHandler}>
          <input onChange={this.onFormChange} type="text" id="login-handle" name="handle" value={loginHandle} placeholder="enter your handle" ></input>
          <input onChange={this.onFormChange} type="text" id="login-password" name="password" value={loginPassword} placeholder="enter your password"></input>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    )
  }

}

export default SignupForm;