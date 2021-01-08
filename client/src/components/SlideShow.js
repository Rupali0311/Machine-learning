import React, { Component } from 'react'
//import { Link, withRouter } from 'react-router-dom'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpeg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import './SlideShow.css'
class SlideShow extends Component{
render(){
    return(
<div>

<div id="carouselExampleSlidesOnly" class="carousel-slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img4} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img5} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img6} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
</div>
      </div>
);}
}
export default SlideShow;