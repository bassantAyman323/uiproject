
import './App.css';
import { useMediaQuery } from 'react-responsive'
import {Nav,Container ,Navbar} from 'react-bootstrap';
import {BrowserRouter,browserHistory, Switch, Route, Link} from 'react-router-dom'
import React, { useState } from "react";
import Home from './Components/Home';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Heart from "react-animated-heart";
import Footer from './Components/Footer';


function App() {
  


  const [isClick, setClick] = useState(false);
  return (
  <>
 
  <BrowserRouter>
    <Navbar  className="nav">
    <Container>
    
    
    <Navbar.Brand  className="logo">Capature the moment</Navbar.Brand>
    
    <div >
    <Nav className="me-auto" style={{position:'relative', marginRight:800 }} >
      <Nav.Link  href="/Home">Home</Nav.Link>
      <Nav.Link href="/About">Login</Nav.Link>
      <Nav.Link href="/Profile">Profile</Nav.Link>
    
    </Nav>
    
</div>
    </Container>
    <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
  </Navbar>
  <Switch >
    <Route path="/" exact component={About}></Route>
    <Route path="/About" exact component={About}></Route>
    <Route path="/SignUp" exact component={SignUp}></Route>
    <Route path="/Profile" exact component={Profile}></Route>
    <Route path="/Home" exact component={Home}></Route>
  </Switch>

  </BrowserRouter>
  <Footer />
  </>
   
  );
}

export default App;
