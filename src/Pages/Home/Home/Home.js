import React from "react";
import LatestNews from "../LatestNews/LatestNews";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Treatments from "../Treatments/Treatments";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Treatments></Treatments>
      <LatestNews></LatestNews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
