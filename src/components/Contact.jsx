import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/subpage.css';

function Contact() {
  return (
    <div className="container">
      <h1 className="subpage-heading">Contact</h1>
      <div>
        <Card>
          <div className="container">
            <Card.Title>Creator</Card.Title>
            <Card.Text>This site was created by Sooraj Modi</Card.Text>
          </div>
        </Card>
        <Card>
          <div className="container">
            <Card.Title>GitHub</Card.Title>
            <Card.Text>To submit issues, view the source code, or make improvements.</Card.Text>
            <Card.Link href="https://github.com/SoorajModi/Citation-Manager">Link</Card.Link>
          </div>
        </Card>
        <Card>
          <div className="container">
            <Card.Title>Contact Info</Card.Title>
            <Card.Text>Email: soorajmodi@hotmail.com</Card.Text>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
