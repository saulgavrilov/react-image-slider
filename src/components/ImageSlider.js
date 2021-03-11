import { useState } from "react";
// import { sliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      {slides.map((slide, index) => (
        <div className={index === current ? "slide active" : "slide"} key={index}>
          {index === current && <img src={slide.image} alt="Car" className="image-slider" />}
        </div>
      ))}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
