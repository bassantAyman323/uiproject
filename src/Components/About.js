import React, { Component } from "react";
import { useRef , useState} from 'react';
import { useHistory } from "react-router";
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom'

function LogIn(){
   
    const nameRef = useRef();
    const countRef = useRef(0);
  let history = useHistory();
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    history.push("/Home")
  };
  function submitHandler(event) {
    event.preventDefault();

    const nameInput = nameRef.current.value;

    console.log(nameInput);
    return <Redirect to='/Home' />
    
  
  }
  console.log('I rendered!');
  const [isLoggedIn, setLogin] = useState(false);

const onFinish = function onfinish(data){
    if(data.password === "password") setLogin(true);
}

if(isLoggedIn){
  console.log('Redirecting..')
//   return <Redirect to='/Home' />
}
        return (
            <form className="login" onSubmit={submitHandler} onFinish={onFinish}>
                <h1>LOGIN</h1>

              
                <div className="form-group">
                    <label className="in">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={nameRef} required />
                </div>

                <div className="form-group">
                    <label className="in">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

<br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={handle} >LOGIN</button>
                <div className="About">
                <p className="forgot-password text-right">
                    You don't have account?  <Link to={"/SignUp"}>SignUp</Link>
                </p>
                </div>

            </form>
        );
    
}
export default LogIn;