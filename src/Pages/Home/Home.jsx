import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className='bg-[url(./section1.png)] bg-cover h-[90vh]'>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
