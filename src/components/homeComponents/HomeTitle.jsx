import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function HomeTitle() {
  return (
    <Jumbotron>
      <div className="home-title">
        <h1>Citation Manager</h1>
        <h4>Easily generate and manage your citations</h4>
      </div>
    </Jumbotron>
  );
}

export default HomeTitle;
