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
              <p>
                The Chicago Manual of Style (CMoS) is a style guide for American English published since
                1906 by the
                University of Chicago Press. It is currently on the the 17th edition. CMoS has two
                citation styles,
                Author-Date and Notes-Bibliography. Both styles requires two parts, a notation in text
                indicating the
                preceding information was from another source, and a full citation.
              </p>

              <p>
                <a href="https://chicagomanualofstyle.org">See the full style guide here.</a>
              </p>

              <p>
                Useful resources:
                <ul>
                  <li>
                    <a href="https://owl.purdue.edu/owl/research_and_citation/chicago_manual_17th_edition">
                      Purdue
                      OWL
                    </a>
                  </li>
                  <li><a href="https://libguides.tru.ca/chicago">LibGuides</a></li>
                  <li>
                    <a href="https://guides.lib.uchicago.edu/cite/chicago">University of Chicago</a>
                  </li>
                </ul>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Resources;
