import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import Quote from "../assets/red_quote.jpg";
import Quote2 from "../assets/red_quote2.jpg";
import Quote3 from "../assets/red_quote3.jpg";
//Testimony pictures
import Lady from "../assets/testimonial-photo.png";
import Work from "../assets/portfolio-advice-present-future-work-620.jpg";
import Mark from "../assets/profile-marc-1.jpg";
import Work2 from "../assets/BBVACompass-Laptop_April_2017-1024x589.jpg";
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
              <span>
                <img src={Quote} alt="" />
              </span>
              Partnership with ReachMedia has been the best decision for my
              business. From start to finish, they were diligent in creating a
              beautiful website for us. <br />
              --Jane P.--
            </p>
            <img src={Work} alt="" className="second_pic" />
          </div>
        </div>
        <div className="carousel_items">
          <div className="items">
            <img src={Mark} alt="" />
            <p>
              <span>
                <img src={Quote} alt="" />
              </span>
              With their top-notch software and digital marketing strategies, my
              law firm grew unprecedentally and my website is now. <br />
              --Mark F.--
            </p>
            <img src={Work2} alt="" className="second_pic" />
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
