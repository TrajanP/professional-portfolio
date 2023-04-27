//Library Imports
import {React, useState} from 'react';
//Component Imports
import Header from '../Components/Header.js'
//CSS Imports
import './CSS-Pages/pages.css';
import css from'./CSS-Pages/faq.module.css';
//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import {IoPlanetSharp} from 'react-icons/io5';

const faqData = [
  {
    title: "Where did I go to university?",
    content: "I went to Lipscomb University in Nashville, TN. I recieved my Bachelors of Science in Software Engineering and gradutes in 2023."
  },
  {
    title: "What is my future plan as a developer?",
    content: "I plan to find a developer position in the Nashville area. Hoping such position will allow me to both learn from those experienced in the industry as well as strengthen my independent developer abilities."
  },
  {
    title: "What languages do I know?",
    content: "C++, Java Script, SQL, Java"
  },
  {
    title: "What is my favorite framework?",
    content: "I love to develop with the React framework. It makes development much more efficient and intuitive."
  },
  {
    title: "Backend or Frontend?",
    content: "I'm somewhere in the middle."
  },
  {
    title: "Spaces or Tabs?",
    content: "I'm not crazy!"
  },
];

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (itemIndex) => {
      if(selected === itemIndex)
      {
        return setSelected(null);
      }
      setSelected(itemIndex);
    };

    return (

      <div>
        <Header/>
        <Container align = "center">
          <Row className={css.wrapper}>
            <Col>
              <img className={css.contactImage} src="./Media/believeAlien.gif" alt ="First Contact"/>
            </Col>
            <Col className={css.accordion}>
              <div className={css.accordionTitle}>
                Can you believe that?
              </div>
              {faqData.map((item, itemIndex) => (
                <div key={itemIndex} className={css.item}>
                  <div  className={css.itemTitle} onClick={() => toggle(itemIndex)}>
                    <h2> {item.title} </h2>
                    <span>{selected === itemIndex ? <IoPlanetSharp style={{color:"#0088a9", scale: "2.0"}}/> : <IoPlanetSharp style={{color:"#ffff", scale: "2.0"}}/>}</span>
                  </div>
                  <div className={selected === itemIndex ? 'itemContent show' : 'itemContent'}>
                    {item.content}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container> 
      </div>   
    );
  }
  
  export default Faq;