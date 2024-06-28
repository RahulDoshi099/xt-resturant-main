// src/pages/Home/HomePage.tsx
import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import DishList from "../../components/DishList/DishList";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <main>
        <Banner />
        <div className="content">
          <DishList />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
