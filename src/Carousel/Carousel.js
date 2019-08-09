import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

//Testimony pictures
import Lady from "../images/testimonial-photo.png";
import Work from "../images/portfolio-advice-present-future-work-620.jpg";
import Mark from "../images/profile-marc-1.jpg";
import Work2 from "../images/BBVACompass-Laptop_April_2017-1024x589.jpg";
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      // speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Slider {...settings}>
        <div className="carousel_items">
          {/* <div className="carousel_items"> */}
          <div className="items">
            <img src={Lady} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              enim aspernatur totam perspiciatis ipsum, consequuntur obcaecati,
              asperiores excepturi sint repellat beatae harum quo rerum ullam
              modi, aperiam odit dolores numquam.
            </p>
            <img src={Work} alt="" />
          </div>
        </div>
        <div className="carousel_items">
          <div className="items">
            <img src={Mark} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              enim aspernatur totam perspiciatis ipsum, consequuntur obcaecati,
              asperiores excepturi sint repellat beatae harum quo rerum ullam
              modi, aperiam odit dolores numquam.
            </p>
            <img src={Work2} alt="" />
          </div>
        </div>
        {/* <div>
            <img src={Bill} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              enim aspernatur totam perspiciatis ipsum, consequuntur obcaecati,
              asperiores excepturi sint repellat beatae harum quo rerum ullam
              modi, aperiam odit dolores numquam.
            </p>
            <img src={Work3} alt="" />
          </div> */}
        {/* </div> */}
      </Slider>
    );
  }
}

export default SimpleSlider;
