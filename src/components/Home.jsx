import React from 'react';
import '../css/home.css';
import HomeTitle from './homeComponents/HomeTitle';
import ChicagoHome from './homeComponents/ChicagoHome';
import ManagerHome from "./homeComponents/ManagerHome";

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
