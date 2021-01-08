import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import basic from './basic.jpg'
import food from './food.jpg'
import shopping from './shopping.jpg'
import medical from './medical.jpg'
import payments from './payments.jpg'
import tickets from './tickets.jpg'
import entertainment from './entertainment.jpg'
import social from './social.jpg'
import fitness from './fitness.jpg'
import parental from './parental.jpg'
import security from './security.png'
import business from './business.jpg'
import './Home2.css'

class Home2 extends Component {
  render() {
    return (
      <div>
        <Navbar2/>
          <div class="container"><h1>welcome Back!!!</h1>
          <p>Let's get started. Click on the icons(boxes) below to explore our tutorials on different fields.<br></br>
          <b>All the best!!!!</b></p></div>
            <div className="iconrow">
              <div className="icon">
               <img src={basic} alt=""/>
               <a href="">Basic</a>
              </div>
              <div className="icon">
               <img src={food} alt=""/>
               <a href="">Food</a>
              </div>
              <div className="icon">
               <img src={shopping} alt=""/>
               <a href="">Shopping</a>
              </div>
              <div className="icon">
               <img src={medical} alt=""/>
               <a href="">Medical</a>
              </div>
              </div>
              <br></br>
              <div className="iconrow"> 
              <div className="icon">
              <img src={payments} alt=""/>
              <a href="">Payments</a>
              </div>
              <div className="icon">
              <img src={tickets} alt=""/>
              <a href="">Travel</a>
              </div>
              <div className="icon">
              <img src={fitness} alt=""/>
              <a href="">Fitness</a>
              </div>
              <div className="icon">
              <img src={social} alt=""/>
              <a href="">Social</a>
              </div></div>
              <br></br>
              <div className="iconrow">
                <div className="icon">
                <img src={business} alt=""/>
                <a href="">Business</a>
                </div>
                <div className="icon">
                <img src={entertainment} alt=""/>
                <a href="">Entertainment</a>
                </div>
                <div className="icon">
                <img src={parental} alt=""/>
                <a href="">Parental</a>
                </div>
                <div className="icon">
                <img src={security} alt=""/>
                <a href="">Security</a>
                </div>
            </div>
      </div>
      
    )
  }
}

export default Home2;