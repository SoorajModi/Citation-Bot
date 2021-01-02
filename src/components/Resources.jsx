import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/subpage.css';

function Resources() {
  return (
    <div className="container">
      <h1 className="subpage-heading">Resources</h1>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Chicago Manual of Style (17th Edition)</Card.Title>
            <Card.Text>
              The Chicago Manual of Style (CMoS) is a style guide for American English published since
              1906 by the University of Chicago Press. It is currently on the the 17th edition. CMoS has two
              citation styles, Author-Date and Notes-Bibliography. Both styles requires two parts, a notation in text
              indicating the preceding information was from another source, and a full citation.
            </Card.Text>
            <Card.Link href="https://chicagomanualofstyle.org">Full Style Guide</Card.Link>
            <Card.Link href="https://owl.purdue.edu/owl/research_and_citation/chicago_manual_17th_edition">Purdue</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Resources;
