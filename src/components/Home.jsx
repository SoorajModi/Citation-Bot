import React from 'react';
import '../css/homePage.css';
import HomeTitle from './HomeTitle';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <HomeTitle />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
