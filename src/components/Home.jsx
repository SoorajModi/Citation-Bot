import React from 'react';
import '../css/home.css';
import HomeTitle from './HomeTitle';
import CMOSHome from './CMOSHome';

function Home() {
  return (
    <div className="home">
      <HomeTitle />
      <CMOSHome />
    </div>
  );
}

export default Home;
