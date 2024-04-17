import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
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
                                <img src={meter1} alt="Meter" />
                                <h5>Frontend Developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Meter" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Meter" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Meter" />
                                <h5>Fullstack Developer</h5>
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