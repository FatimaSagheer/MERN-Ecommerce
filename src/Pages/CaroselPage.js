import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
// import banner3 from "../images/banner3.jpeg";
import banner3 from "../images/banner3.avif";
import banner4 from "../images/banner4.jpeg";
// import banner5 from "../images/banner5.jpg";
import banner5 from "../images/banner5.avif";

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index) => {
    setCurrentIndex(index);
  };

  const onClickItem = (index) => {
    // Handle item click if needed
  };

  const onClickThumb = (index) => {
    // Handle thumbnail click if needed
  };
  const imgStyle = {
    width: '100%',
    maxHeight:"250px" // Set the width to 100% for full screen width
  };
  return (
    <Carousel
      autoPlay
      showArrows={true}
      infiniteLoop={true}
      selectedItem={currentIndex}
      interval={1000} // Set autoplay interval in milliseconds
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img src={banner1} alt="Legend 1" style={imgStyle} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={banner2} alt="Legend 2" style={imgStyle} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={banner3} alt="Legend 3" style={{ maxHeight: '250px' }} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={banner4} alt="Legend 4" style={{ maxHeight: '250px' }} />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src={banner5} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
