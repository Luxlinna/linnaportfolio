import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
// import { ProjectCardDesign } from "./ProjectCardDesign";
// import { ProjectCardLandScape } from "./ProjectCardLandScape";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import landScape1 from "../assets/img/landscape1.png";
import landScape2 from "../assets/img/landscape2.png";
import landScape3 from "../assets/img/landscape3.png";
import landScape4 from "../assets/img/landscape4.png";
import design1 from "../assets/img/design-img1.png";
import design2 from "../assets/img/design-img2.png";
import design3 from "../assets/img/design-img3.png";
import design4 from "../assets/img/design-img4.png";
import design5 from "../assets/img/design-img5.png";


export const Projects = () => {

  const projects = [
    {
      type: "project",
      title: "LhvsBeauty",
      description: "Frontend Development",
      imgUrl: projImg1,
      linkUrl: "https://lhvsbeauty.netlify.app",
    },
    {
      type: "project",
      title: "Portfolio-Linna",
      description: "Frontend Development",
      imgUrl: projImg2,
      linkUrl: "https://portfolio-linna.netlify.app",
    },
    {
      type: "project",
      title: "Car Service",
      description: "Frontend Development",
      imgUrl: projImg3,
      linkUrl: "https://luxlinna.github.io/carService/",
    },
    {
      type: "project",
      title: "Sokna Spa",
      description: "Frontend Development",
      imgUrl: projImg4,
      linkUrl: "https://luxlinna.github.io/Sokna_Spa/",
    },
    {
      type: "project",
      title: "LVHSAM",
      description: "Frontend Development",
      imgUrl: projImg5,
      linkUrl: "https://luxlinna.github.io/LVHSAM/",
    },
    {
      type: "project",
      title: "Sweethouse",
      description: "Frontend Development",
      imgUrl: projImg6,
      linkUrl: " https://luxlinna.github.io/Sweethouse/",
    },
    {
      type: "design",
      title: "Cosmetic Shop",
      description: "Web Design",
      imgUrl: design1,
      linkUrl: "https://res.cloudinary.com/dj4stpksv/image/upload/v1713387603/design-img1_yobraz.png",
    },
    {
      type: "design",
      title: "1177 Sample",
      description: "Web Design",
      imgUrl: design2,
      linkUrl: "https://res.cloudinary.com/dj4stpksv/image/upload/v1713387881/design-img6_ks0s4w.png",
    },
    {
      type: "design",
      title: "Sweet House",
      description: "Web Design",
      imgUrl: design3,
      linkUrl: "https://res.cloudinary.com/dj4stpksv/image/upload/v1713387603/design-img3_kkydkx.png",
    },
    {
      type: "design",
      title: "Memorize Game",
      description: "Web Design",
      imgUrl: design4,
      linkUrl: "https://res.cloudinary.com/dj4stpksv/image/upload/v1713387603/design-img4_h2pnow.png",
    },
    {
      type: "design",
      title: "Sokna Beauty Spa",
      description: "Web Design",
      imgUrl: design5,
      linkUrl: "https://res.cloudinary.com/dj4stpksv/image/upload/v1713387603/design-img5_bzedrw.png",
    },
    {
      type: "landscape",
      title: "Fluffy Agency Landing",
      description: "Landscape Picture",
      imgUrl: landScape1,
      // linkUrl: "https://luxlinna.github.io/Fluffy-agency-landing/",
    },
    {
      type: "landscape",
      title: "Data Warehouse",
      description: "Landscape Picture",
      imgUrl: landScape2,
      // linkUrl: "https://luxlinna.github.io/datawarehouse/",
    },
    {
      type: "landscape",
      title: "A Simple Website",
      description: "Landscape Picture",
      imgUrl: landScape3,
      // linkUrl: "https://luxlinna.github.io/A-Simple-Website/",
    },
    {
      type: "landscape",
      title: "Genesis Portfolio Template",
      description: "Landscape Picture",
      imgUrl: landScape4,
      // linkUrl: "https://luxlinna.github.io/Genesis-Portfolio-Template/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    I contributed to the development of an e-commerce platform, leveraging React.js 
                    for the frontend and Node.js with Express.js for the backend under the guidance 
                    of experienced developers. I actively participated in implementing key features 
                    such as user authentication, product search, cart management, and payment processing 
                    functionalities. Using Figma, I collaborated on the design of the platform's user interface, 
                    learning how to create intuitive and responsive layouts. <br></br>

                    This project provided me with valuable exposure to full-stack development principles 
                    and web design practices. I gained hands-on experience in optimizing code for 
                    performance and scalability, while also learning about the importance of secure application 
                    development. Working on this platform deepened my understanding of modern web technologies and 
                    prepared me for further growth in the field of software development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Landscape</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Render Website projects */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects
                            .filter((project) => project.type === "project")
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      {/* Render Design projects */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((project) => project.type === "design")
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      {/* Render Landscape projects */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((project) => project.type === "landscape")
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-color" />
    </section>
  );
};





// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import { ProjectCardLandScape } from "./ProjectCardLandScape";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";
// import projImg5 from "../assets/img/project-img5.png";
// import projImg6 from "../assets/img/project-img6.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import landScape1 from "../assets/img/landscape1.png";
// import landScape2 from "../assets/img/landscape2.png";
// import landScape3 from "../assets/img/landscape3.png";
// import landScape4 from "../assets/img/landscape4.png";
// import design1 from "../assets/img/design-img1.png";
// import design2 from "../assets/img/design-img2.png";
// import design3 from "../assets/img/design-img3.png";
// import design4 from "../assets/img/design-img4.png";
// import design5 from "../assets/img/design-img5.png";
// import { ProjectCardDesign } from "./ProjectCardDesign";

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg1,
//       linkUrl: "https://luxlinna.github.io/carService/",
//       landScape: landScape1,
//       landScapeUrl: "https://luxlinna.github.io/Fluffy-agency-landing/",
//       design: design1,
//     },
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg3,
//       linkUrl: "https://luxlinna.github.io/Sweethouse/",
//       landScape: landScape2,
//       landScapeUrl:"https://luxlinna.github.io/datawarehouse/",
//       design: design2,
//     },
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg6,
//       linkUrl: "https://luxlinna.github.io/PFLinna/",
//       landScape: landScape3,
//       landScapeUrl: "https://luxlinna.github.io/A-Simple-Website/",
//       design: design3,
//     },
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg4,
//       linkUrl: "https://luxlinna.github.io/LVHSAM/",
//       landScape: landScape4,
//       landScapeUrl: "https://luxlinna.github.io/Genesis-Portfolio-Template/",
//       design: design4,
//     },
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg2,
//       linkUrl: "https://luxlinna.github.io/Sokna_Spa/",
//       design: design5,
//     },
//     {
//       title: "Fullstack Developer",
//       description: "Design & Development",
//       imgUrl: projImg5,
//       linkUrl: "https://luxlinna.github.io/Calculator/",
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>I led the development of an e-commerce platform, utilizing React.js for the frontend and 
//                    Node.js with Express.js for the backend. The platform features a sleek and intuitive 
//                    user interface designed with Figma, ensuring a seamless shopping experience. 
//                    Key functionalities include user authentication, product search, cart management, 
//                    and secure payment processing. Optimized for performance and scalability, 
//                    the platform showcases my expertise in Fullstack Development and Web Design.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Website</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Design</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Landscape Page</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     {/* Project pictures and link to hosting on github */}
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     {/* Design Project on Figma */}
//                     <Tab.Pane eventKey="second">
//                     <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCardDesign
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     {/* Landscape page */}
//                     <Tab.Pane eventKey="third">
//                     <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCardLandScape
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="background-color"></img>
//     </section>
//   );
// };