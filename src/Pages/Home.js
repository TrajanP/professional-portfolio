//Component Imports
import { useEffect, useState } from 'react';
import Header from '../Components/Header.js';
//Media Imports
import Background from '../indexBackground.gif';
import {FaGithubSquare} from 'react-icons/fa';
import {DiGithubFull} from 'react-icons/di';
import {BsLinkedin} from 'react-icons/bs';
//Bootstrap Imports
import Alert from 'react-bootstrap/Alert';
//Background Image Styling
const homeStyle = { 
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',      
  backgroundRepeat: 'no-repeat',
  color:"white",
  width: '100vw',
  height: '100vh'
};

const Home = () => {
  const [show, setShow] = useState(false);
  const [prevRendered, setPrevRendered] = useState(false);

  //Timer triggers on first render to send Banner Alert
  setTimeout(function () {
      if(!prevRendered)
      {
        setShow(true);
        setPrevRendered(true);
      }
      console.log("hi");
  }, 5000);

    return (
      <div style={homeStyle}>
        <Header/>
        <div style={{position:"absolute", zIndex: "10", width: "450px", top:"10%", left:"35%"}}>
        <Alert show={show} variant="dark">
            <Alert.Heading>Greetings Earthling!</Alert.Heading>
            <p>
                Feel like learning more about me? <br/>
                Find me on....
                <ul> 
                    <li> <FaGithubSquare style={{color:"rgb(0,136,169,1)", fontSize:"45px",}}/> <Alert.Link href="http://github.com/TrajanP"><DiGithubFull style={{fontSize:"90"}}/></Alert.Link></li>
                    <li> <BsLinkedin style={{color:"rgb(0,136,169,1)", fontSize:"45px"}}/> <Alert.Link href="http://www.linkedin.com/in/trajan-parkes">Linkedin</Alert.Link></li>
                </ul>
            </p>
            <hr/>
            <div className="d-flex justify-content-end">
                <button style={{borderRadius: "5px", width: "120px"}} onClick={() => setShow(false)}>Dismiss</button>
            </div>
        </Alert>
        </div>
        <div class="main">
           <div class="main-title">
              Welcome Explorer
            </div>
            <div class="main-body">
              <h3>Click around to learn about me and my software engineering passion and journey!</h3>
            </div>
        </div> 
      </div>  
    );
  }
  
  export default Home;