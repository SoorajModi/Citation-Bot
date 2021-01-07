import React from 'react';
import '../css/subpage.css';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <>
      <h1 className="subpage-heading">About</h1>
      <div className="container about-list">
        <h3>Purpose</h3>
        <p>
          The purpose of Citation Bot is to provide free and accurate citation generation for students working on
          projects utilizing Chicago Manual of Style (17th ed.). The objective is to make citations easy to generate
          and able to handle any combination of fields inputted. The citations are generated upon input right on the screen
          so you can easily view and change your citations.
        </p>
        <hr />
        <h3>Features</h3>
        <p>
          Current features include generating note and bibliography citations for:
          <ul>
            <li>Books</li>
            <li>Electronic Books</li>
            <li>Journals</li>
            <li>Electronic Journals</li>
            <li>Lectures</li>
            <li>Web Pages</li>
            <li>Sources with multiple authors</li>
          </ul>
        </p>
        <hr />
        <h3>Resources</h3>
        <p>
          The Chicago Manual of Style (CMoS) is a style guide for American English published since
          1906 by the University of Chicago Press. It is currently on the the 17th edition. CMoS has two
          citation styles, Author-Date and Notes-Bibliography. Both styles requires two parts, a notation in text
          indicating the preceding information was from another source, and a full citation.
        </p>
        <Card.Link href="https://chicagomanualofstyle.org">Full Style Guide</Card.Link>
        <Card.Link href="https://owl.purdue.edu/owl/research_and_citation/chicago_manual_17th_edition">Purdue</Card.Link>
        <hr />
        <h3>Upcoming Features</h3>
        <ul>
          <li>
            Increasing the number of Chicago sources to books with editors, translated books, editions other than the first,
            multivolume work, chapter in a book, films, newspaper articles, interviews, government publications, and more.
          </li>
          <li>
            Improving the accuracy of citations under a wider range of fields.
          </li>
          <li>
            Adding support to create citations in MLA, APA, and IEEE formatting styles.
          </li>
          <li>
            Ability to sign in and save generate citations for future changes.
          </li>
        </ul>
        <hr />
        <h3>Creator</h3>
        <p>
          This website was created by Sooraj Modi. For questions or inquires, you can contact me at soorajmodi@hotmail.com.
          To submit issues, view the source code, or to make improvements you can view the GitHub repository
          <a href="https://github.com/SoorajModi/Citation-Manager" target="_blank" rel="noopener noreferrer">here</a>
          .
        </p>
      </div>
    </>
  );
}

export default About;
