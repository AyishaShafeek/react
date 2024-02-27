import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Accordionreact from './Accordionreact';
import './App.css'; // Your custom CSS if needed
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';



const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <div id="carousel-arrow">Previous</div>,
    nextArrow: <div id="carousel-arrow">Next</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div>
      <div className='container'>
      <h1>React Carousel Example</h1>
      <Slider {...settings}>
        <div className="">
         <img src={image1} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image2} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image3} alt="" className='widimg'/>
        </div>

        <div className="">
         <img src={image1} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image2} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image3} alt="" className='widimg'/>
        </div>

        <div className="">
         <img src={image1} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image2} alt="" className='widimg'/>
        </div>
        <div>
        <img src={image3} alt="" className='widimg'/>
        </div>
        {/* Add more carousel items as needed */}
      </Slider>
    </div>
    </div>
  <Accordionreact/>
    </>
  );
};

export default App;
