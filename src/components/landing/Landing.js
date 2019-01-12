import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Hand Crafted Jewelry by Susan</h1>
        </div>

        <div className="landing-feature">
          <div className="lading-feature-image-div">
            <img src="https://images.pexels.com/photos/356148/pexels-photo-356148.jpeg?auto=compress&cs=tinysrgb&h=350" />
          </div>
            <div className="landing-feature-content">
              <p>
              <strong>Metal Necklaces</strong> <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
        </div>
      
      <hr/>

        <div className="landing-feature2">
          <div className="lading-feature-image-div" >
            <img src="https://media.istockphoto.com/photos/beautiful-wedding-jewelry-bracelet-picture-id484226515?k=6&m=484226515&s=612x612&w=0&h=axcTNbHR8vZ5iVDFKF9zlW5v6J0H_XZbv8rmC4jlAZ0=" />
          </div>
            <div className="landing-feature-content2">
              <p>
                <strong>Gemstone Necklaces</strong> <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
        </div>

        <hr/>

        <div className="landing-feature">
          <div className="lading-feature-image-div">
            <img src="https://images.pexels.com/photos/356148/pexels-photo-356148.jpeg?auto=compress&cs=tinysrgb&h=350" />
          </div>
            <div className="landing-feature-content">
              <p>
              <strong>Metal Necklaces</strong> <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
        </div>

        <hr/>

        <div className="landing-feature2">
          <div className="lading-feature-image-div">
            <img src="https://media.istockphoto.com/photos/beautiful-wedding-jewelry-bracelet-picture-id484226515?k=6&m=484226515&s=612x612&w=0&h=axcTNbHR8vZ5iVDFKF9zlW5v6J0H_XZbv8rmC4jlAZ0=" />
          </div>
            <div className="landing-feature-content2">
              <p>
              <strong>Sea Glass Jewelry</strong> <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
        </div>

      </div>  
    );
  }
}

export default Landing;
