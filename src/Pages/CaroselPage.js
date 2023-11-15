import banner1 from "../images/banner21.jpg";
import banner2 from "../images/banner22.jpg";
import banner3 from "../images/banner23.png";
import banner4 from "../images/banner4.jpeg";
import banner5 from "../images/banner5.avif";
import banner6 from "../images/banner6.jpg";
import banner7 from "../images/banner7.jpg";
import banner8 from "../images/banner8.jpg";
import banner9 from "../images/banner9.avif";
import banner10 from "../images/banner10.jpg";

import banner11 from "../images/banner11.jpg";
import banner12 from "../images/banner13.jpg";
import banner13 from "../images/banner14.avif";
import banner14 from "../images/banner15.jpg";
import banner15 from "../images/banner16.jpg";

import banner16 from "../images/banner17.jpg";
import banner17 from "../images/banner18.jpg";
import banner18 from "../images/banner19.jpg";
import banner19 from "../images/banner20.jpg";
// import banner15 from "../images/banner10.jpg";



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
        <img src={banner15} alt="Legend 2" style={imgStyle} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={banner16} alt="Legend 3" style={{ maxHeight: '250px' }} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={banner17} alt="Legend 4" style={{ maxHeight: '250px' }} />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src={banner5} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner2} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner6} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner7} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner8} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner9} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner10} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner11} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner12} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={banner13} alt="Legend 5" style={imgStyle} />
        {/* <p className="legend">Legend 5</p> */}
      </div>

    </Carousel>
  );
};

export default DemoCarousel;
