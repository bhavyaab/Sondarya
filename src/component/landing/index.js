'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import ImageContent from '../imageContent'

import About from '../about'
import Contact from '../contact'
import Carousel from '../carousel'
import Services from '../services'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    
  }
  // <ImageContent></ImageContent>
  // <Two></Two>
  // <Three></Three>
  
  
  // <img src="/../image/comb.png" />
  background = {
    one: '/../image/wallpapers.jpeg',
    two: '/../image/landing.jpg',
    three: '/../image/facial-2.jpg',
  }
  render(){
    
    return (
      <section className='landing'>
        <Carousel background={this.background}></Carousel>
        <div className="landingText">
          <img src="../../image/logo.svg" alt="logo" />
          <h4 id="brand-name">Sondarya</h4>
          <div id="salon" >Beauty <i className="fas fa-cut"></i> Salon</div>
          <div className="landigInfo">
          <h4>Days: Monday - Friday,</h4>
          <h4>Hours: 10am - 8pm,</h4>
          <h4>by appointment only </h4>
          <h4><i className="fa fa-mobile" aria-hidden="true"></i> +1 (425) 233 8888 </h4>
          <a href="https://www.google.com/maps/place/5504+NE+8th+Pl,+Renton,+WA+98059/@47.4968557,-122.1477913,17z/data=!3m1!4b1!4m5!3m4!1s0x549067d5528f3e65:0xffcbfd30fa59106b!8m2!3d47.4968559!4d-122.1455952" target="blank">
           <i className="fa fa-map-marker" aria-hidden="true"></i> Click to view location</a> <i className="fa fa-location-arrow" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)
