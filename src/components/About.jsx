import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/subpage.css';

function About() {
  return (
    <div className="container">
      <h1 className="subpage-heading">About</h1>
      <div>
        <Card>
          <div className="container">
            <Card.Title>Purpose</Card.Title>
            <Card.Text>
              The purpose of this website is to provide free and accurate citation generation for
              students working on projects utilizing Chicago Manual of Style (17th ed.).
            </Card.Text>
          </div>
        </Card>
        <Card>
          <div className="container">
            <Card.Title>Features</Card.Title>
            <Card.Text>
              Current features include generating note and bibliography citations for Books, Journals,
              Lectures, and Websites.
            </Card.Text>
          </div>
        </Card>
        <Card>
          <div className="container">
            <Card.Title>Upcoming Features</Card.Title>
            <Card.Text>Expanding sources to newspapers, recorded media, interviews, legal materials and more.</Card.Text>
            <Card.Text>Creating projects and saving citations for future use.</Card.Text>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
