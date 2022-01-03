import React from 'react';
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Col,Row } from 'react-bootstrap';
  
const Footer = () => (
  

           <div className="footer">
             <header className="us">About Us</header>

             <div className="about">
<Row lg={3} md ={2} xs={1}>
               {/* <div className="column1"> */}
               <Col sm={3} style={{padding:2}}>
 <header>
    

            <div id="column" >
            
                <div id="row"  >
                    <h5 className="na"><b>Bassant Ayman fathey</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
               </div>
            </div>
        </header>
    <main >

<br></br>

        <ul><h5 className="na">Education</h5>

            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
     
    {/* </div> */}
    </Col>
    {/* <div className="column"> */}
    <Col sm={3}>
 <header>
    
          
            <div id="column2" >
            
                <div id="row2" >
                    <h5 className="na"><b>Rowan Mahmoud Amin</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >
    <br></br>

        <ul><h5 className="na">Education</h5>
            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
{/*      
    </div> 
    */}
    </Col>
    <br></br>
    <Col sm={3}>
 <header>
    
          
            <div id="column2" >
            
                <div id="row2" >
                    <h5 className="na"><b>Yomna Fathi Mohamed</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >
    <br></br>

        <ul><h5 className="na">Education</h5>
            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
{/*      
    </div> 
    */}
    </Col>
    
    
    
 
               {/* <div className="column1"> */}
               <Col sm={3} style={{padding:2}}>
                
 <header>
    

            <div id="column" >
            
                <div id="row"  >
                    <h5 className="na"><b>Arwa Khalid Mohamed</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >

<br></br>

        <ul><h5 className="na">Education</h5>

            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
     
    {/* </div> */}
    </Col>
    {/* <div className="column"> */}
    <Col sm={1}>
 <header>
    
          
            <div id="column2" >
            
                <div id="row2" >
                    <h5 className="na"><b>Mennatullah Nabil</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >
    <br></br>

        <ul><h5 className="na">Education</h5>
            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
{/*      
    </div> 
    */}
    </Col>
    <Col sm={1}>
 <header>
    
          
            <div id="column2" >
            
                <div id="row2" >
                    <h5 className="na"><b>Rowan Adel Mohamed</b></h5>
                    <h6 className="na"><b>My fav pic is:</b></h6>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >
    <br></br>

        <ul><h5 className="na">Education</h5>
            <li className="na">
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
{/*      
    </div> 
    */}
    </Col>
    
    </Row>
    



             </div>
       <div>
      <p className="social-container">
        <a
          href="https://www.youtube.com/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
    </div>
);
const rootElement = document.getElementById("root");
render(<Footer />, rootElement);
  
export default Footer;