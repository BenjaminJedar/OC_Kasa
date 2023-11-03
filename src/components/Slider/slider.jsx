import { useState } from 'react';
import './slider.css';
import left_arrow from '../../assets/left-arrow.svg';
import right_arrow from '../../assets/right-arrow.svg';

function Slider({ arrayOfPictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? arrayOfPictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function goToNext() {
    const isLastSlide = currentIndex === arrayOfPictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="slider">
      <img
        src={arrayOfPictures[currentIndex]}
        alt="slideImg"
        className="slide_img"
      />
      <div className="arrows">
        <img
          src={left_arrow}
          onClick={goToPrevious}
          className="left_arrow"
          alt="left arrow"
        />
        <img
          src={right_arrow}
          onClick={goToNext}
          className="right_arrow"
          alt="right arrow"
        />
      </div>
      <div className="counter_img"></div>
    </div>
  );
}

export default Slider;
