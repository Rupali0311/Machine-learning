import React, { Component } from 'react'
import facebook from './facebook.png'
import insta from './insta.jpg'
import tweeter from './twitter.png'
import './Footer.css'
class Footer extends Component{
    render(){
        return(
        <div class="footer">
                <img src={facebook} alt=""/>
                <img src={tweeter} alt=""/>
                <img src={insta} alt=""/>
                <p> &nbsp;&nbsp;&nbsp;Copyright © 2021 Techcare. All rights reserved.</p>
               <div className="p"> 
                  <p> Mail us: techcare@gmail.com</p>  
               </div></div>
        );
    }
}export default Footer;