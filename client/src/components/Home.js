import React, { Component } from 'react'
import SlideShow from './SlideShow'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SlideShow/>
      <div className="wrap">
        <div className="content">
            <h1 className="text-center"><b>Welcome to techCare.com</b></h1>
            <p>The world today is all about "<b>Technology</b>". People around us are all much fascinated 
            about it, <br></br>that it is quite a tough job to find a person without a cellphone. Today, people spend<br></br> 
            most of their time on phone or computer as technology has made lives easier to survive by <br></br>
            making everything available in just a click. But even in this modern era of growing <br></br>
            technologies, there are some people like our parents, granparents, uncles and aunts<br></br> 
            and even people living in rural areas, who are not that much connected to these<br></br>
             technologies, feel that they are lacking behind and cannot match up to the modern society<br></br>
           people. So, our site is an initiative to ensure that these people also keep themselves<br></br> 
            updated and get benefitted from all the facilities from buying groceries to other stuffs,<br></br>
            paying at small stores to large scale transactions in just a click.<br></br>
            Excited about getting started with us and get your way with technologies?<br></br> 
            <b>Join Us by logging in, we are always more than happy to help you.</b> </p>
          </div>
          </div>
     </div>
      
    )
  }
}

export default Home;
