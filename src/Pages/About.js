//Styling Imports
import css from'./CSS-Pages/about.module.css';
//Componet Imports
import Header from '../Components/Header.js';
//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
//Media Imports
import {SiCplusplus, SiJavascript} from 'react-icons/si';
import {FaJava, FaAws, FaReact} from 'react-icons/fa';
import {BsFiletypeCss, BsFiletypeSql} from 'react-icons/bs';


const About = () => {
    return (
      <div>
        <Header/>
        <Container align = "center">
          <Row className={css.wrapper}>
            <Col>
              <img className={css.contactImage} src="./Media/Coder.gif" alt ="First Contact"/>
              <div className={css.infoBox}>
                <div className={css.leftBox}>
                    <img src="./Media/Planet4.png" style ={{width:"130px", margin:"15px", marginTop: "65px"}}/>
                </div>
                <div className={css.rightBox}>
                  <p> <h3>Goal as a Developer</h3> - 
                    <h5>Software Developer in the Nashville area.
                      I've had valuable experience with project based development. 
                      Experienced in Agile Development with both Backend and Frontend abilities. 
                      I enjoy expanding my skills through personal projects and love to code with the React framework.
                    </h5>
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={css.aboutTitle}>
                About Me
              </div>
              <div className={css.infoBox}>
                <div className={css.leftBox}>
                    <img src="./Media/Planet1.png" style ={{width:"100px", margin:"25px", marginTop: "60px"}}/>
                </div>
                <div className={css.rightBox}>
                  <p> <h3>Passion for Development</h3> - 
                    <h5>When I started my first Software Studio class in college, I was blown away by the realization of 
                      what coding can be outside the classroom. Ever since then, I've been eager 
                      to learn and broaden my technical abilities and developer toolset. 
                    </h5>
                  </p>
                </div>
              </div>
              <div className={css.infoBox}>
                <div className={css.leftBox}>
                    <img src="./Media/Planet2.png" style ={{width:"100px", margin:"25px", marginTop: "60px"}}/>
                </div>
                <div className={css.rightBox}>
                  <p> <h3>Life in Nashville</h3> - 
                    <h5> Living in Nashville for most my life, it's a great city to call home. 
                      I attended Lipscomb University with the whole city on my doorstep. The 
                      most exciting bit about Nashville though is the large number of tech companies moving in!
                    </h5>
                  </p>
                </div>
              </div>
              <div className={css.infoBox}>
                <div className={css.leftBox}>
                    <img src="./Media/Planet3.png" style ={{width:"100px", margin:"25px", marginTop: "60px"}}/>
                </div>
                <div className={css.rightBox} style={{paddingRight:"178px", textAlign:"center"}}>
                  <p> <h3>Languages & Skills</h3> 
                    <h5>
                      <ul>
                        <li> <SiCplusplus/> C++ </li>
                        <li> <SiJavascript/> Java Script</li>
                        <li> <BsFiletypeCss/> HTML & CSS </li>
                        <li> <FaJava/> Java </li>
                        <li> <FaAws/> AWS Systems </li>
                        <li> <FaReact/> React </li>
                        <li> <BsFiletypeSql/> SQL </li>
                      </ul> 
                    </h5>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container> 
      </div>   
    );
  }
  
  export default About;