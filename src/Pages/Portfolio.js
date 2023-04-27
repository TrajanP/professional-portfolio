//Library Imports
import {React, useState} from 'react';
//CSS Import
import css from './CSS-Pages/portfolio.module.css';
//Component Imports
import ProjectSlide from '../Components/ProjectSlide.js';
import Header from '../Components/Header.js';
//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Lipscomb Plus
const project1 = [
  {url: "./Media/bisonbits1.png"},
  {url: "./Media/bisonbits2.png"},
  {url: "./Media/bisonbits3.png"},
  {url: './Media/bisonbits4.png'},
  {url: './Media/bisonbits5.png'},
  {url: './Media/bisonbits6.png'},
];

//Nissan PQE
const project2 = [
  {url: "./Media/bisonbits1.png"},
  {url: "./Media/bisonbits2.png"},
  {url: "./Media/bisonbits3.png"},
  {url: './Media/bisonbits4.png'},
  {url: './Media/bisonbits5.png'},
  {url: './Media/bisonbits6.png'},
];

//Provides size for slides
const containerStyle = {
  width: "600px",
  height: "280px",
  margin: "0px auto",
};

const Portfolio = () => {

    //Component State

    //Modal 1 State
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    
    //Modal 2 State
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
  //   componentDidMount() {
  //     this.props.pictures.forEach((picture) => {
  //         const img = new Image();
  //         img.src = picture.fileName;
  //     })
  // }

    return (
      <div>
        <Header/>
        <Container>
          {/* FIRST PROJECT ----- Lipscomb Plus */}
          <Row className={css.project}>
            <Col>
              <div className={css.description}>
                <p>
                  <div className={css.descriptionTitle}>Bison Bits - A streaming platform</div> 
                  <h4>- Refreshed and modern approach to University connection with campus media.</h4>
                </p>
              </div>
              <div style={containerStyle}>
                <ProjectSlide slides={project1}/>
              </div>
            </Col>
            <Col align="center">
              <img style={{marginBottom: "50px", margintTop: "20px"}} src="./Media/galaxyfinal.gif" alt="Space Icon"/>
              <button className={css.readMoreBtn} data-bs-toggle="modal" data-bs-target="#modal1" onClick={handleShow1}>
                Learn More
              </button>
              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                  <Modal.Title>Lipscomb Plus</Modal.Title>
                </Modal.Header>
                <Modal.Body>Here you can find info about my project!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>

          {/* SECOND PROJECT ----- Nissan PQE*/}
          <Row className={css.project}>
            <Col align="center">
              <img style={{marginBottom: "50px", margintTop: "20px", height: "550px"}} src="./Media/astrofinal.gif" alt="Space Icon"/>
              <button className={css.readMoreBtn} data-bs-toggle="modal" data-bs-target="#modal2" onClick={handleShow2}>
                Learn More
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Nissan PQE</Modal.Title>
                </Modal.Header>
                <Modal.Body>Here you can find info about my project!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col>
              <div className={css.description}>
                <p>
                  <div className={css.descriptionTitle}>Nissan PQE - A vehicle reservation service</div> 
                  <h4>- Allowing Nissan engineers to checkout vehicles with a clean and easy to use UI and feature list.</h4>
                </p>
              </div>
              <div style={containerStyle}>
                <ProjectSlide slides={project2}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>   
    );
  }
  
  export default Portfolio;