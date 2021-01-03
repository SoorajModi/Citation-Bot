import React from 'react';
import '../css/home.css';
import HomeTitle from './HomeTitle';
import CMOSHome from './chicagoComponents/CMOSHome';
import ManagerHome from "./ManagerHome";

function Home() {
  return (
    <div className="home">
      <HomeTitle />
      <CMOSHome />
      <ManagerHome />
    </div>
  );
}

export default Home;
