import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import '../css/subpage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceOfPublication from './formComponents/PlaceOfPublication';
import YearOfPublication from './formComponents/YearOfPublication';
import Publisher from './formComponents/Publisher';
import Title from './formComponents/Title';
import Authors from './formComponents/Authors';
import Pages from './formComponents/Pages';

const CMOS = require('chicagomanualofstyle');

function CMOSBook() {
  // State variables
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState({ title: 'No title specified' });
  const [pub, setPub] = useState({ publisher: '' });
  const [pop, setPop] = useState({ placeOfPublication: '' });
  const [yop, setYop] = useState({ yearOfPublication: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  // Function to update state
  const generateCitation = () => {
    const book = CMOS.book({
      title: title.title,
      authorList: authors,
      publisher: pub.publisher,
      placeOfPublication: pop.placeOfPublication,
      yearOfPublication: yop.yearOfPublication,
    }, []);
    setCitation({ bibliography: book.bibliography });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Book Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <Title title={title} setTitle={setTitle} generateCitation={generateCitation} />
              <Publisher pub={pub} setPub={setPub} generateCitation={generateCitation} />
              <PlaceOfPublication pop={pop} setPop={setPop} generateCitation={generateCitation} />
              <YearOfPublication yop={yop} setYop={setYop} generateCitation={generateCitation} />
              <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
              <Pages pages={pages} setPages={setPages} />
              <div className="text-center custom-btn">
                <Button variant="primary" onClick={generateCitation} className="center-block">
                  Generate
                </Button>
              </div>
              <hr />
              <Form.Group controlId="Generate Citation">
                <Form.Control type="text" value={citation.bibliography} readOnly />
                <CopyToClipboard text={citation.bibliography}>
                  <Button variant="secondary">
                    <FontAwesomeIcon icon={faClipboard} />
                  </Button>
                </CopyToClipboard>
              </Form.Group>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default CMOSBook;
