import icon1 from "../assets/icons/html.png";
import icon2 from "../assets/icons/css.png";
import icon3 from "../assets/icons/javascript.png";
import icon4 from "../assets/icons/react.png";
import icon5 from "../assets/icons/angular.png";
import icon6 from "../assets/icons/node.png";
import icon7 from "../assets/icons/mongodb.png";
import icon8 from "../assets/icons/mysql.png";
import icon9 from "../assets/icons/xd.png";
import icon10 from "../assets/icons/git.png";
import icon11 from "../assets/icons/github.png";
import icon12 from "../assets/icons/figma.png";
import icon13 from "../assets/icons/bootstrap.png";
import icon14 from "../assets/icons/sass.png";
import icon15 from "../assets/icons/agile.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // Responsive base on device breed
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          I'm a versatile professional skilled in Fullstack Development, 
                          Web Design, and Web Development. From frontend design to backend implementation, 
                          I bring expertise in React, Angular, Node.js, UI/UX design to create engaging web experiences.
                          <br></br> <br></br>
                          In Web Design, I leverage my expertise in UI/UX principles and graphic design to craft visually 
                          appealing interfaces with tools like Adobe XD and Figma, ensuring optimal user experience across devices.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={icon1} alt="Icon" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={icon2} alt="Icon" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={icon3} alt="Icon" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={icon4} alt="Icon" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={icon5} alt="Icon" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={icon6} alt="Icon" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={icon7} alt="Icon" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={icon8} alt="Icon" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={icon9} alt="Icon" />
                                <h5>Adobe XD</h5>
                            </div>
                            <div className="item">
                                <img src={icon10} alt="Icon" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={icon11} alt="Icon" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={icon12} alt="Icon" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={icon13} alt="Icon" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={icon14} alt="Icon" />
                                <h5>Sass</h5>
                            </div>
                            <div className="item">
                                <img src={icon15} alt="Icon" />
                                <h5>Agile</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg-shape" />
    </section>
  );
};