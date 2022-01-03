import React, { Component } from "react";
import { useRef } from 'react';
import { useHistory } from "react-router";
function SignUp() {

    const nameRef = useRef();
    const countRef = useRef(0);
  let history = useHistory();
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    history.push("/About")
  };

   
        return (
            <form className="login">
                <h1>SignUp</h1>
                <div className="form-group">
                    <label className="in">First name</label>
                    <input  type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label className="in">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label className="in" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="in">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

<br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={handle} >Submit</button>
                <p className="forgot-password text-right">
                    Already registered <a href="About">Log in?</a>
                </p>
            </form>
        );
    
}
export default SignUp;