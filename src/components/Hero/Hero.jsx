// Hero.js
import React from "react";
import "./Hero.css";
import Carousel from "../Cas/Cas";
import images from "../Cas/casImage";


const Hero = () => {
  return (
  
    <><div className=" relative">
      {/* <img
        style={{ filter: "brightness(50%)" }}
        className="hero-image"
        src="https://res.cloudinary.com/dmfb370xe/image/upload/v1690671132/WhatsApp_Image_2023-07-29_at_11.50.26_PM_jiqmne.jpg"
        alt="Banner" /> */}
         <Carousel images={images} className="hero-image rounded-md" />
      {/* <div className="absolute inset-0  justify-center items-center text-center text-white">
        <div className="hero-content">
          <h1 className="hero-title">FIND A HOME FOR YOUR DESIGNS</h1>
          <p className="hero-subtitle">Pop Ups in Top Class Hotels Around The World</p>

        </div>
      </div> */}

    </div>
  
    </>
  );
}

export default Hero;
