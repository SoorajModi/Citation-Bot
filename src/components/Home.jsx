import React from 'react';
import '../css/home.css';
import HomeTitle from './HomeTitle';
import ChicagoHome from './ChicagoHome';
import ManagerHome from "./ManagerHome";

function Home() {
  return (
    <div className="home">
      <HomeTitle />
      <ChicagoHome />
      <ManagerHome />
    </div>
  );
}

export default Home;
