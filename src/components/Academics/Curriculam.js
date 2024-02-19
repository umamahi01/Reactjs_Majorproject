import { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import pic from '../images/image3.jpg';
import './Curriculam.css';


class Curriculam extends Component {
    render(){
      const containerStyles = {
        marginTop: "50px",
        marginBottom: "50px",
      };
      
      const rowStyles = {
        marginTop: "25px",
        marginBottom: "25px",
      };
     
    
    return(
     <div className="Main">
          <Container fluid className="Grid-Page">
    <Row>
      <Col>
        
          <Image className="img-Height" style={{ width: "100vw", objectFit: "cover" }}src={pic} alt='/'   />
          <h1 className="Txt"> This is Curriculam Page</h1>

          
      </Col>
    </Row>
    <div className="chaild">

    <Container  className="conta" style={containerStyles} >
      <Row style={rowStyles}>
        <Col xs={12} md={3}>
          <Card className="cardboxStyles">
            <Card.Body>
            <Card.Title>Books and Library</Card.Title>
              <Card.Text>
                We have a rich collection of books certified by ministry of education and top social children organisations.
                 
              </Card.Text>
               
           
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="card1">
            <Card.Body>
            <Card.Title>Great Teacher</Card.Title>
              <Card.Text>
              Our teaching staff undoubtedly consists of highly experienced and talented.
              </Card.Text>
               
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="mycard">
            <Card.Body>
            <Card.Title> Certification</Card.Title>
              <Card.Text>
               even the all-powerful pointing has no control about the blind texts it is an almost unorthographic.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="card2">
            <Card.Body>
            <Card.Title>Special Education </Card.Title>
              <Card.Text>
              even the all-powerful pointing has no control about the blind texts it is an almost unorthographic.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
     
    </div>
  </Container>
   
  <div >
  <p className="bg-para">
        <h1 className="war">About  Curriculam </h1>
        Curriculam is a standard-based sequence of planned experiences where students practice and achieve proficiency in content and applied learning skills.
        Subjects included in the curriculam are:
        <ul>
          <li>english</li>
          <li> Mathematics</li>
          <li> Science</li>
          <li> Social</li>
          </ul> 
          Main goal of curriculam is to  ensure a lively sense of curiosity and wonder among students.Curriculam include the learning standards that the students are expected from teachers ;units and lessons that teachers teach;assingnments and projects given to students and other methods used to evaluate student learning.
          The Curriculam contains:
          <ol>
          <li>course content</li>
          <li> Objectives</li>
          <li> Methodologies</li>
            
      
          </ol>
          Explore our school in more detail on your website.

      </p>
 </div>
 <div class="honey">
      <div class="card5">
      
        <i class="icon">&#9899;</i>
        <p>Class Size:20</p>
      </div>
      <div class="card6">
        <i class="icon">&#128463;</i>
        <p>Curriculam:CBSE</p>
      </div>
      <div class="card7">
        <i class="icon">&#128100;</i>
        <p>Age Range:2.5-17</p>
      </div>
      <div class="card8">
        <i class="icon">&#9990;</i>
        <p>Telephone:+123-000999125</p>
      </div>
    </div> 
    <div class="grid-container">
  <div class="grid-item">
    <iframe src="https://www.youtube.com/embed/aFA7sH4IbMQ"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    
     
  </div>
</div>
    
 <div className='jeny'>
      <Row>
    <Col>
      <h3 >Boarding Facility</h3>
      <p>
      Located on a green, urban campus, we cultivate a truly diverse experience, providing students of over 20 different nationalities with a pathway to top universities around the world. Life in the boarding transforms students to become confident, independent and focused young learners who excel in academics, co-curriculuar and extra-curricular activities.
      <ul >
        <li>Spacious and air conditioned four-bedded rooms</li>
        <li>House parent on every floor</li>
        <li>24×7 CCTV Surveillance</li>
      </ul>
       
      </p>
    </Col>
    <Col>
      <h3 align= 'center' >Pre-Primary Schools</h3>
      <p>
      Oakridge Pre-primary campuses with it’s interactive, engaging, and safe environment with child-friendly infrastructure & experienced faculty offers the ideal foundation for your child.
      <ul>
        <li>Spacious Play Areas</li>
        <li>Modern Interactive Play equipment</li>
        <li>CCTV Security with No-Shadow Zones</li>
      </ul>
      </p>
    </Col>
  </Row>
        </div>

    

   </div>
     
      
     
     
      );
    }
}
export default Curriculam;