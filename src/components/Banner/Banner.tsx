import React, { useEffect, useState } from "react";
import "./Banner.css";

const images = [
  "https://plus.unsplash.com/premium_photo-1666353535582-9268ce1a981c?q=80&w=3890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-vector/flat-design-food-sale-background_23-2149167390.jpg?w=2000&t=st=1718882309~exp=1718882909~hmac=9f8f4dd2afb1701f86f6bdac9420a9fcecc33ede7dcf747c55d1af0ddeae418c",
  "https://img.freepik.com/free-psd/food-menu-restaurant-facebook-cover-template_106176-749.jpg?w=2000&t=st=1718882369~exp=1718882969~hmac=79cbfa4291b174c250247746ed68f81d6e66c1d7d8b678fa5b6476a8e46c9c26",
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // }, 3000); // Change image every 3 seconds
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
