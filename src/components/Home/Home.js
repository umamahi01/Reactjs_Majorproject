
import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import './Home.css';

import img6 from '../images/down.jpg'
import img4 from '../images/OIP.jpg'
import img5 from '../images/OIP (1).jpg'
import img3 from "../images/img4.jpg"
import img2 from '../images/img3.jpg'
import img from '../images/img2.jpg'
import { Container, FormControl, Row, Col,Card } from 'react-bootstrap';


const Home = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const handleSubmit = () => {
    alert(` ${name}!`);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  return (
  <div className='Home' >
   
 <div className='home_1'  style={{
        height: screenWidth < 400 ? '1800px' : 'auto',
        backgroundColor: 'red'
      }}>
      
    <Container >
      <Row>
        <Col xs={12} md={6}>
          <div className="main-content">

          <Row>
        <Col  xs={12}>
            <div className='header_2'>
             <h6  style={{ margin: "10px 0" ,  color: "#d71b1b" }}>welcome to our website </h6>
              <h1 style={{ margin: "5px 0" ,  color: "#0c4105" }}>Bring Fun Life To Your Kids</h1>
              <h5 style={{ margin: "12px 2px" ,  color: "#9c72c9" }}>Amazing Playground for your kids</h5>
              </div>
        </Col>
  
      </Row>
           
      
      {!isLoggedIn && !isSignUp && (
        <div className='button-main'>
          <Button variant="primary" style={{ backgroundColor: "#337e82", borderColor: "transparent", color: "white" }} onClick={handleSignUpClick}>
            Sign Up
          </Button>{' '}
          <Button  style={{ backgroundColor: "#98a43e", borderColor: "transparent", color: "white" }}onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      )}
          </div>
         
        </Col>
        <Col xs={12} md={6}>
          <div className="auth-section">
            <div className="sign-in">
              {/* sign in form goes here */}
              {isSignUp && (
        <div className='form'>
         
          <Form className="signup-form">
              <div className='header'>
              <h2 >Sign Up</h2>
              </div>
              <Form onSubmit={handleSubmit}>
              <Form.Label>Parent Name</Form.Label>
      <FormControl
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     
    </Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className='formBasicPassword'>
              <Form.Label>ReEnter Password</Form.Label>
              <Form.Control type="password" placeholder="confrim Password" />
            </Form.Group>
            <div className='container'>
            <Button className="form-button" style={{ backgroundColor: "rgb(28, 26, 26", borderColor: "transparent", color: "white" }} type="submit">
              Sign Up
            </Button>
            </div>
          </Form>
        </div>
      )}
            </div>
            <div className="login">
              {/* login form goes here */}
              {isLoggedIn && (
        <div className='Login_form'>
          <h2 style={{marginLeft:"200px" ,color:"#191970"}}>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{color:"#800080" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{color:"#800080" }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button  className="button_2" variant="primary" style={{ backgroundColor: "rgb(28, 26, 26)", borderColor: "transparent", color: "white" }} type="submit">
              Login
            </Button>
          </Form>
        </div>
      )}
            </div>
          </div>
        </Col>
        
         <Container xs={12} className='HomeBox ' style={{borderRadius: "50px", backgroundColor: "#ffdab9",marginTop:"5px",paddingTop:"13px",paddingBottom:"10px"}}>
    <Row>
    <Col xs={12} md={4}>
          <p style={{margin:"16px",fontFamily: "'Roboto', sans-serif"}}>Our School is a co-educational day boarding school which offers the play way method of learning for 
            Preschool and the Central Board of Secondary Education (CBSE Affiliation number: 130371) syllabus for higher classes. The school currently offers classes from Kindergarten to grade 6 with Hindi, Sanskrit as second and third language options.</p>
            <Button className="form-button" style={{ backgroundColor: "#4169e1", borderColor: "transparent",borderRadius: ' 0 20px 0 20px', color: "white" }} type="submit">
            Learn More
            </Button>
        </Col>
        <Col xs={6} md={4}>
          <Image src={img} alt="Image"style={{borderRadius: "30px"}} fluid />
        </Col>
        <Col xs={8} md={4}>
          <Col  >
            <Col xs={8} md={5} >
              <Card style={{backgroundColor:"#558b2f",borderRadius: "30px",color:"#ffff",marginBottom:"1px"}}>
                <Card.Body >QUICK ACCESS</Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={5}  >
              <Card style={{backgroundColor:"#add8e6",borderRadius: "30px",color:"#000000",marginBottom:"1px"}}>
                <Card.Body>Easy to Learn </Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={5} >
              <Card style={{backgroundColor:"#f4a460",borderRadius: "30px",color:"#000000",marginBottom:"1px"}}>
                <Card.Body>Holistic Education</Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={5}  >
              <Card style={{backgroundColor:"#800000",borderRadius: "30px",color:"#ffff",marginBottom:"1px"}}>
                <Card.Body>Sports Facilities</Card.Body>
              </Card>
            </Col>
          </Col>
        </Col>
    </Row>
  </Container>

  <Container xs={12} style={{margin:"12px" }}>
      <Row>
        <Col xs={12} md={4}>
          <div className="responsive-div_1"> <Col xs={6} md={12}  >
              <Card style={{backgroundColor:"#c9ffe5  ",color:"#000000",borderRadius: ' 0 30px 0 30px'}}>
                <Card.Body><Image src={img2} alt="/" fluid></Image>
                <h2 style={{marginLeft:"12px",color:"#560319"}}>GolbalCampus</h2>
               <p style={{fontFamily:"'Roboto', sans-serif"}}>Global Campus is a personalised online learning platform that only students from Nord Anglia
                 have access to. Our team of experts monitors all online activities, so your child is always safe.</p></Card.Body>
              </Card>
            </Col></div>
        </Col>
        <Col xs={12} md={4}>
          <div className="responsive-div" >
            <Col><h2 style={{fontFamily: "'Rowdies', cursive"  , display: 'flex', justifyContent: 'center'}}>Boarding Facilities</h2></Col>
            <p style={{fontFamily:"'Roboto', sans-serif",fontSize:"20px" }}>Located on a green, urban campus, we cultivate a truly diverse experience, providing students of over 20 different nationalities with a pathway to top universities around the world. Life in the boarding transforms students to become confident, 
              independent and focused young learners who excel in academics, co-curriculuar and extra-curricular activities.</p>
              <ul style={{fontFamily:"'Roboto', sans-serif",fontSize:"20px" }}>
                <li>School has the ambiance and the expertise to provide children. </li>
                <li>extra-curricular activities that will ensure a child’s all round development.</li>
                <li>Dedicated and talented teachers will make learning loads of fun.</li>
                <li>Our campus provides a perfect blend of modern amenities and natural surroundings.</li>
              </ul>
            </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="responsive-div">
          <Col xs={6} md={12}  >
             <Card style={{backgroundColor:"#c9ffe5  ",color:"#000000",borderRadius: ' 0 30px 0 30px'}}>
                <Card.Body><Image src={img3} alt="/" fluid></Image>
                <h2 style={{marginLeft:"12px",color:"#560319"}}>Beyond Academics</h2>
               <p style={{fontFamily:"'Roboto', sans-serif"}}>We promise more than a traditional education. We collaborate with pioneering institutions such as MIT and UNICEF, developing programmes that will give them the skills, qualities and outlook to create their own exciting future.during and after the school day.</p></Card.Body>
              </Card>
              </Col>
              </div>
        </Col>
      </Row>
    </Container>
       
        
     
   </Row>
    
    </Container>
    
    </div>
   
  <Container xs={12}>
    <Row>
      <Col xs={12}  >
        <Col>
      

        <div style={{alignItems: "center",margin:"10px",padding:"50px"}}>
        
          <h1 style={{fontFamily: "'Rowdies', cursive",textAlign:"center"}}>ILLUSRATE of our school</h1>
        <p style={{textAlign:"left",fontSize:"20px",fontFamily: " cursive", lineHeight: "1.5"}}> international day and boarding school located in a beautiful port 
        city.we believe in the enormous contribution that parents can make in the running of hole-hearted participation in school activities. We view our parents as our strength and will provide every opportunity for the parents to suggest ideas and to participate in the various activities and events in the school which will motivate the children and strengthen the hands of the teachers
         and the management. . As professionals from different walks of life parents are a vast talent pool whose involvement in school will help enrich the culture and ethos of the institution and help the school to anchor itself in the society which it strives to serve. Our state-of-the-art campus and amenities make the perfect home away from home for young children looking for a premium boarding school experience. We also have outstanding sports, performing arts and science facilities so students can pursue their interests and unlock their full potential. 100% of parents surveyed said their child loves coming to our school. Explore our school in more detail on our website.</p>
      <div>
        <p  style={{textAlign:"left",fontSize:"20px",fontFamily: " cursive"}}>Parent Teacher Meetings will happen after every assessment (Two Months Once) and monthly personal files of students will be shared with parents which contains progress Report for all the below parameters through our school Mobile App or Email or in a printed format.</p>
      </div>
        </div>
    
        </Col>
      </Col>

      
    </Row>
   </Container>
  
  <Container xs={12} className='footerup' fluid style={{ backgroundColor: "rgba(0, 0, 0)" }}>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{backgroundColor:"#000000"}}><Card.Body>
          <img src={img4} alt="/" />
          <p style={{fontSize:"20px",color:"#ffffff"}}>Students are challenged to make a difference locally and globally by tackling the Sustainable Development Goals.</p>
          </Card.Body></Card>
        </Col>
        <Col xs={12} md={4}>
        <Card style={{backgroundColor:"#000000"}}><Card.Body>
          <img className="image-class" id="image-id" src={img5} alt="/" />
          <p style={{fontSize:"20px",color:"#ffffff"}}>Our collaboration with the world’s most renowned arts institution enriches our students’ love of dance, drama and music.</p>
          </Card.Body></Card>
        </Col>
        <Col xs={12} md={4}>
        <Card style={{backgroundColor:"#000000"}}><Card.Body>
          <img className="image-class" id="image-id" src={img6} alt="/" />
          <p style={{fontSize:"20px",color:"#ffffff"}}> The programme helps our students to develop their creativity and problem-solvingchallenges facing the world today.</p>
          </Card.Body></Card>
        </Col>
      </Row>
    </Container>
    
    </div>
    
    
   
  );
};
export default Home;