import { Component } from "react";
import {  Row, Col, Image, Card   } from "react-bootstrap";
import pic from "../images/image5.jpg";

import'./Acadamic.css';
const pic6= "https://vlkarchitects.com/assets/insights_img/_1200x630_fit_center-center_82_none/Braswell_HighSchool_Lab.jpg?mtime=1542214624"
const pic5= "https://jaipuria.edu.in/lucknowschool/wp-content/uploads/2019/04/jaipuria_school_lucknow_3-768x512.jpg"
const pic4="https://ksltv.com/wp-content/uploads/2019/11/GettyImages-1077184960.jpg"
const pic1=" https://tse2.mm.bing.net/th?id=OIP.uYiMXem4OqEnCbDTUt-aGwHaE8&pid=Api&P=0"
const pic2="https://www.kidsdiscover.com/wp-content/uploads/2017/01/Syda-ProductionsShutterstock.jpg"
const pic3=" https://harvardcrcl.org/wp-content/uploads/sites/10/2018/11/Scientific_Research.jpg"
 
 
class  Acadamic extends Component {
    render(){
    return(
      <div className="song">
        <div className="photo">
        <Image src={pic} alt="/" width="100%" height="600px"></Image>
        <h1 className="txt"> Our School Academics</h1>
        </div>
         <div className="container">
        <Row>
        <Col xs={12} md={ 6}> 
        <div className="main">
           
         <Image className="sas" src={pic6} alt=" your-image-description"></Image>
         </div>
         </Col>
         
          
         <Col xs={12} md={ 6}> 
         <div className="man">
          <h3>ACADEMICS</h3>
         <h1>Approach to Learning</h1>
         
         <p >The learning culture that The Charter School imbibes is rooted in inculcating an independent, creative, enterprising value system in young minds, so that they can grow up to become world-citizens. The essential topography of our educational approach is summed up as:</p>
          
         <ol>
          <li> Aimed at completely holistic nurturing of students.</li>
          <li> Driven with zestful spirit of inclusive learning experience for students as well the parent-community through inclusion and active involvement in the learning process.</li>
          <li> Based on elemental pattern of “Diversity, Discipline and Dedication”  </li>
          <li> A transparent and purposeful stance that permits “enablement of education” in all spheres of both academic and extra-academic domains.</li>
          <li> An integrated model for fostering most benign core values of collaboration, cooperation and capability in students.</li>
          </ol>
         
          </div>
          </Col>
          </Row>
          </div>
          <div className="router">
          <Row>
            <Col  xs={12} md={6}>
            <div className=" can">
          <h3> AT  SCHOOL</h3>
         <h1> Student Support Services</h1>
         <p>For efficient propagation of learning values, having a robust support system is mandatory. The support system that we provide to students is based on counseling through interaction. The multiple features of our support system are:</p>
         <ul>
          <li>Understanding of individually specific needs of each student</li>
          <li> Driven with zestful spirit of inclusive learning experience for students as well the parent-community through inclusion and active involvement in the learning process.</li>
          <li>Giving a diverse atmosphere where the career and learning support system is vibrant.</li>
          <li>A transparent and purposeful stance that permits “enablement of education” in all spheres of both academic and extra-academic domains.</li>
          <li>An integrated model for fostering most benign core values of collaboration, cooperation and capability in students.</li>

         </ul>
         </div>
          </Col>

            <Col  xs={12} md={6} >
            <div className=" gain">
           
           <Image className="das" src={pic5} alt=" your-image-description"></Image>
           </div>
            </Col>

          </Row>
          </div>
          <div className="round" style={{padding:"5px"}}>
        
        <Row>
        <Col xs={12} md={ 3} >
          
          <Card className=" Nanone" style={{margin:"2px" , width: "370px",
  height: "400px",
  backgroundColor: "rgb(0,183,235)"}}>
          <h2  align="center">BOOK1</h2>
          <h1 className="Jenny">Becoming a Student</h1>
            <Card.Img     src={pic4 } style={{ width: '370px'}}  />
             
          </Card>
        </Col>
         
         <Col xs={12} md={ 3} >
           
          <Card className="  Southe" style={{margin:"2px",  width:  "370px",
  height:"400px",
  backgroundColor:  "rgb(255,200,124)"
   }}>
            <h2 align="center">BOOK2</h2>
          <h1 className="  Jenny">About Academics Work</h1>
            <Card.Img    src={pic1 } style={{ width: '370px'}}  />
            
               
          </Card>
        </Col>
         
        <Col xs={12} md={ 3}  >
          <Card className="  Weste" style={{margin:"2px" }}>
          <h2  align="center">BOOK3</h2>
            <h1 className=" Jenny">Writing Your Dissertation</h1>
            <Card.Img  src={pic2 } style={{ width: '370px'}}  />
            
          </Card>
        </Col>
        <Col xs={12} md={ 3}  >
          <Card className=" borthe"style={{margin:"2px" }}>
          <h2 align="center" >BOOK4</h2>
            <h1 className=" Jenny"> Scientific Resaerch Methods</h1>
          <Card.Img   src={ pic3} style={{ width: ' 370px'}} />
            
          </Card>
        </Col>
        </Row>
        </div>
        <div className="plant" >
          <Row>
            <Col xs={12} md={6}>
              <h1 className="tree">Download eBrochure</h1>
              <p className="herbs" >
              Download The Charter Brochure here and get an insight into the best schooling practices of a global nature.

              </p>
              
            </Col>
            <Col xs={12} md={6}>
            <button className="leaf">Download</button>
            </Col>
            
          </Row>
        </div>
        <div className="cat">
          <Row>
          <Col xs={12} md={4}>
           <h2>Contact Us</h2>
           <p>
           <span class="contact-icon location"></span>
           18/431A, Vayanashala Chemmalapady Road, Pukkattupady, Malayidamthuruth P.O, Ernakulam 683561
           </p>
           <p>
           <span class="contact-icon phone"></span>
            Phone: (555) 555-5555
           </p>

            <p>
            <span class="contact-icon email"></span>
             Email: info@example.com
             </p>
             <p>
             <span class="icon time"></span>
              Open Monday to Friday, 9am to 5pm
             </p>
            </Col>
            <Col xs={12} md={4}>
              <h2>Quick links</h2>
              <ul>
               <li>Academics</li>
              <li>Beyond Academics</li>
              <li>Admissions</li>
              <li>Careers</li>
              <li>Contact</li>
              </ul>

            </Col>
            <Col xs={12} md={4}>
              <h3>About</h3>
              <ul>
               <li>About Us-bak</li>
              <li>Blog</li>
              <li> Testimonial</li>
              <li>Gallery</li>
              <li>Infrastructure</li>
              </ul>

            </Col>


          </Row>
       

        </div>
         
      

        </div>
        
      
      );
    }
}
export default Acadamic;