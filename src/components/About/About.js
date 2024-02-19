import React, { Component } from "react";
import'./About.css';

import { Card} from 'react-bootstrap';
// import { Container, } from 'react-bootstrap';
import pic from '../images/img3.jpg' 




class About extends Component {
    render()
    { 
      return(
       
        <div className="First" > 
        <div className="earth">
      
     <h1>WELCOME TO MY SCHOOL</h1>
        <p>my school is an international day and boarding school located in a beautiful port city. Our state-of-the-art campus and amenities make the perfect home away from home for young children looking for a premium boarding school experience. We also have outstanding sports, performing arts and science facilities so students can pursue their interests and unlock their full potential. 100% of parents surveyed said their child loves coming to our school. Explore our school in more detail on our website.</p>
        </div>
      <div className="Round">
        <h1 className="war">About Our School</h1>
        <Card className=" _Nano " >
            <Card.Img  variant="Top"  src={pic} style={{ width: '200px' }}  />
            <Card.Body>
            <Card.Text>
                Our focus is on developing each child’s character and personality, and ensuring that an Oakridger is a well-rounded, confident individual prepared for all the challenges and opportunities that the world will offer.
                </Card.Text>
              <button>know More</button>
            </Card.Body>
          </Card>
       
         
         
    
     
        </div>
        </div>
        
       
  );   
    }
}
export default About;