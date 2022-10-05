import React from 'react';
import './Login.css';
import BG from '../Assets/bg.svg';
import AVATAR from '../Assets/avatar.svg';
import WAVE from '../Assets/wave.png';

function Login() {
  const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  return (
    <div className="App">
    <img className="wave" src={WAVE} alt="wave"/>
    <div className="container">
      <div className="img">
        <img src={BG} alt="bg"/>
      </div>
      <div className="login-content">
        <form>
          <img src={AVATAR} alt="avatar"/>
          <h2 className="title">Welcome</h2>
                <div className="input-div one">
                   <div className="i">
                      <i className="fas fa-user"></i>
                   </div>
                   <div className="div">
                      <h5>Username</h5>
                      <input type="text" className="input"></input>
                   </div>
                </div>
                <div className="input-div pass">
                   <div className="i">
                      <i className="fas fa-lock"></i>
                   </div>
                   <div className="div">
                      <h5>Password</h5>
                      <input type="password" className="input"></input>
                   </div>
                </div>
                <a href="login">Forgot Password?</a>
                <input type="submit" className="btn" value="Login"></input>
              </form>
          </div>
      </div>
    </div>
  );
}

export default Login;
