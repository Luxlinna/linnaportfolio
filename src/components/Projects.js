import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardLandScape } from "./ProjectCardLandScape";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import landScape1 from "../assets/img/landscape1.png";
import landScape2 from "../assets/img/landscape2.png";
import landScape3 from "../assets/img/landscape3.png";
import landScape4 from "../assets/img/landscape4.png";
import design1 from "../assets/img/design-img1.png";
import design2 from "../assets/img/design-img2.png";
import design3 from "../assets/img/design-img3.png";
import design4 from "../assets/img/design-img4.png";
import design5 from "../assets/img/design-img5.png";
import { ProjectCardDesign } from "./ProjectCardDesign";

export const Projects = () => {

  const projects = [
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "https://luxlinna.github.io/carService/",
      landScape: landScape1,
      landScapeUrl: "https://luxlinna.github.io/Fluffy-agency-landing/",
      design: design1,
    },
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "https://luxlinna.github.io/Sweethouse/",
      landScape: landScape2,
      landScapeUrl:"https://luxlinna.github.io/datawarehouse/",
      design: design2,
    },
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg6,
      linkUrl: "https://luxlinna.github.io/PFLinna/",
      landScape: landScape3,
      landScapeUrl: "https://luxlinna.github.io/A-Simple-Website/",
      design: design3,
    },
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg4,
      linkUrl: "https://luxlinna.github.io/LVHSAM/",
      landScape: landScape4,
      landScapeUrl: "https://luxlinna.github.io/Genesis-Portfolio-Template/",
      design: design4,
    },
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://luxlinna.github.io/Sokna_Spa/",
      design: design5,
    },
    {
      title: "Fullstack Developer",
      description: "Design & Development",
      imgUrl: projImg5,
      linkUrl: "https://luxlinna.github.io/Calculator/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I led the development of an e-commerce platform, utilizing React.js for the frontend and 
                   Node.js with Express.js for the backend. The platform features a sleek and intuitive 
                   user interface designed with Figma, ensuring a seamless shopping experience. 
                   Key functionalities include user authentication, product search, cart management, 
                   and secure payment processing. Optimized for performance and scalability, 
                   the platform showcases my expertise in Fullstack Development and Web Design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Landscape Page</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCardDesign
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCardLandScape
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};