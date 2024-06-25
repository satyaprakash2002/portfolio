import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";




export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
              <h2>Technical Skills</h2>
              <p className="text-center">
                I love to learn new things and experiment with new technologies.
                <br />
                These are some of the major languages, technologies, tools and
                platforms I have worked with:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item flex flex-col items-center justify-center w-full h-full">
                  <FaNode className="   text-7xl" />
                  <h5>Web Development</h5>
                </div>
                <div className="item flex flex-col items-center justify-center w-full h-full">
                  <FaJava className="   text-7xl" />
                  <h5>Web Development</h5>
                </div>
                <div className="item flex flex-col items-center justify-center w-full h-full">
                  <FaReact className="   text-7xl" />
                  <h5>Web Development</h5>
                </div>
                <div className="item flex flex-col items-center justify-center w-full h-full">
                  <FaPython className="   text-7xl" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
