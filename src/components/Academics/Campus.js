import { Component } from  "react";
import {Row, Col, Image} from "react-bootstrap";
import './Campus.css';
const pic=" https://www.vestaproperties.com/wp-content/uploads/2021/03/School-Drone-shot-Low-REs.jpg"
const pic1="https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2020/12/classroom-stock.jpg?quality=90&strip=all&ssl=1"
const pic2="https://th.bing.com/th/id/OIP.FmkhpkICsPB5Lnwb6kgNsAHaE8?w=305&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const pic3="https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2019/06/17161635/L1010578_23780578693-min.jpg"
const pic4="https://th.bing.com/th/id/R.631c39b4b70a9de25ebbf6931956413e?rik=VUALQFO%2fnjYDDQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1082412%2fimages%2fo-SCHOOL-LIBRARIES-facebook.jpg&ehk=%2fDpYBkuyb9H5eMngXHCxQ3MP6dzt0bgfq5HExtddJwY%3d&risl=&pid=ImgRaw&r=0"
const pic5="https://th.bing.com/th/id/OIP.A6vZ3zaabTvxIByXJEfurAHaE8?pid=ImgDet&rs=1"
const pic6="https://th.bing.com/th/id/OIP.OGn1EA9_4MUE6z4Cw5-2IAHaE7?pid=ImgDet&rs=1"
const pic7=" https://th.bing.com/th/id/OIP.VbnlEz2IQCDYS4OrpO4jcgHaE7?pid=ImgDet&rs=1"
const pic8="https://th.bing.com/th/id/OIP.1jqjkPhHQMGL6FNR0_d0-gHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const pic9="https://sh-prod-storage.s3.amazonaws.com/uploads/image/image/3748/big_IMG_3226.JPG"
const pic10=" https://www.polamschool.co.uk/wp-content/uploads/sites/19/2016/05/JKP_0292.jpg"
const pic11=" https://www.parkrecord.com/wp-content/uploads/2016/07/20160513__5RecAquaticsp1.jpg"
const pic12="https://th.bing.com/th/id/OIP.PWLFTXiHIcDGCg5P23RP6QHaE8?pid=ImgDet&rs=1"
const pic13="https://www.jbcnschool.edu.in/wp-content/uploads/2017/02/school-ground-parel.jpg"
const pic14="https://th.bing.com/th/id/R.22845da907df666a6b4fcba52564ea19?rik=IS79EKd2te1yIA&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f02%2f35%2f44%2f38_full.jpeg&ehk=nd9QIkZ3wkkRufJMWoXdgKNV1KrwXdRoSD3029Bc7is%3d&risl=&pid=ImgRaw&r=0"
class  Campus extends Component {
    render(){
    return(
        <div className="Campus">
            <div className="hello"> 
        <Image src={pic} alt="/" width="100%" height="600px"></Image>
        </div>
        <div className="class">
        <button className="law">CAMPUS</button>
        <p>The school is situated in an 8-acre campus at Chiguruwada, Tirupati. Easily accessible from all parts of the town, the ambience is rural and peaceful with the abundance of space that is so vital for the needs of children who need to run and romp and play, engaging in a variety of outdoor activities and even going exploring in the mango orchards (supervised) which belongs to the school.</p>
         
        <Row>
           <Col xs={12} md={4}>
                <Image className="name"src={pic1} alt='/'></Image>

                </Col>
                <Col xs={12} md={4}>
                <Image className="name"src={pic2} alt='/'></Image>
                </Col>
                <Col  xs={12} md={4}>
                <Image className="name"src={pic3} alt='/'></Image> 
                </Col>
             </Row>
             <Row>
             <Col xs={12} md={4}>
                <Image className=" property"src={pic4} alt='/'></Image>

                </Col>
                <Col xs={12} md={4}>
                <Image className=" property" src={pic5} alt='/'></Image>
                </Col>
                <Col  xs={12} md={4}>
                <Image  className=" property"src={pic6} alt='/'></Image> 
                </Col>
             </Row>
             <div>
             <button className="hire">DINING HALL</button>
             </div>
        </div>
            <div class="Container">
            
             <Image src= {pic7} alt={'/'} ></Image>
            <Image src= {pic8} alt={'/'} ></Image>
            <Image src={pic9} alt= {'/'}></Image>
        </div>
        <div>
             <button className=" wire"> SWIMMING POOL</button>
             </div>
        <div class="contain ">
           <Image src= {pic10} alt={'/'} ></Image>
            <Image src={pic11}  alt= {'/'}></Image>
        </div>
        <div>
             <button className="  pop"> PLAY AREA</button>
             </div>
        <div class="content">
          <Image src={pic12} alt= {'/'}></Image>
            <Image src={pic13} alt={'/'} ></Image>
            <Image src={pic14}  alt= {'/'}></Image>
         </div>
         <div className=" append" >
          <Row>
            <Col xs={12} md={6}>
              <h1 className=" push">JOIN TIRUPATI'S BEST INTERNATIONAL SCHOOL </h1>
              <p className=" list" >
              To book our campus tour, Please call +91 9581978737
              </p>
              
            </Col>
            <Col xs={12} md={6}>
            <button className=" set">I'M Interested</button>
            </Col>
            
          </Row>
        </div>
  
        </div>
        
      );
    }
}
export default Campus;