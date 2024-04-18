import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from '../assets/resume.pdf';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Memoize the 'toRotate' array using useMemo
  const toRotate = useMemo(() => ["Fullstack Developer", "Web Designer", "Frontend Developer"], []);

  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setLoopNum(loopNum + 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate]); // Include 'toRotate' in the dependency array

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility offset={100}>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Linna `}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a passionate and versatile professional with expertise in 
                    Fullstack Development, Web Design, and Web Development. 
                    With a keen eye for detail and a commitment to excellence, 
                    I bring creativity and technical proficiency to every project I undertake.<br/><br/>
                    If you're looking for a skilled and passionate Fullstack Developer, Web Designer, 
                    and Web Developer to bring your projects to life, I'd love to collaborate with you.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    <a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download CV 
                    </a> 
                    <ArrowRightCircle size={25} />
                  </button>
                
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility offset={100}>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};






// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import resume from '../assets/resume.pdf';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const toRotate = ["Fullstack Developer", "Web Designer", "Frontend Developer"];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => clearInterval(ticker);
//   }, [text, delta]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setLoopNum(loopNum + 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setDelta(500);
//     }
//   };

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility offset={100}>
//               {({ isVisible }) => (
//                 <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
//                   <span className="tagline">Welcome to my Portfolio</span>
//                   <h1>
//                     {`Hi! I'm Linna `}
//                     <span className="txt-rotate">
//                       <span className="wrap">{text}</span>
//                     </span>
//                   </h1>
//                   <p>
//                     I am a passionate and versatile professional with expertise in 
//                     Fullstack Development, Web Design, and Web Development. 
//                     With a keen eye for detail and a commitment to excellence, 
//                     I bring creativity and technical proficiency to every project I undertake.<br/><br/>
//                     If you're looking for a skilled and passionate Fullstack Developer, Web Designer, 
//                     and Web Developer to bring your projects to life, I'd love to collaborate with you.
//                   </p>
//                   <button onClick={() => console.log('connect')}>
//                     <a href={resume} download>Download CV</a>
//                     <ArrowRightCircle size={25} />
//                   </button>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility offset={100}>
//               {({ isVisible }) => (
//                 <div className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}>
//                   <img src={headerImg} alt="Header Img" />
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };