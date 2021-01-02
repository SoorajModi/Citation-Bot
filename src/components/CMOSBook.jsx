import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/subpage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CMOS = require('chicagomanualofstyle');

function CMOSBook() {
  // State variables
  const emptyAuthor = { first: '', last: '' };
  const emptyPage = { page: '' };
  const [authors, setAuthors] = useState([{ ...emptyAuthor }]);
  const [pages, setPages] = useState([{ ...emptyPage }]);
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

  const addAuthor = () => {
    setAuthors([...authors, { ...emptyAuthor }]);
  };

  const removeAuthor = () => {
    setAuthors([authors.pop()]);
  };

  const populateFirstName = (index, e) => {
    authors[index].first = e;
    generateCitation();
  };

  const populateLastName = (index, e) => {
    authors[index].last = e;
    generateCitation();
  };

  const addPage = () => {
    setPages([...pages, { ...emptyPage }]);
  };

  const removePage = () => {
    setPages([pages.pop()]);
  };

  const populatePage = (index, e) => {
    pages[index].page = e;
  };

  const newTitle = (e) => {
    setTitle({ title: e });
    generateCitation();
  };

  const newPub = (e) => {
    setPub({ publisher: e });
    generateCitation();
  };

  const newPop = (e) => {
    setPop({ placeOfPublication: e });
    generateCitation();
  };

  const newYop = (e) => {
    setYop({ yearOfPublication: e });
    generateCitation();
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Book Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <Form.Group as={Row} controlId="inputTitle">
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" onChange={(e) => newTitle(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="inputPublisher">
                <Form.Label column sm="2">
                  Publisher
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" onChange={(e) => newPub(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="inputPOP">
                <Form.Label column sm="2">
                  Place of Publication
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" onChange={(e) => newPop(e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="inputYOP">
                <Form.Label column sm="2">
                  Year of Publication
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" onChange={(e) => newYop(e.target.value)} />
                </Col>
              </Form.Group>
              <div>
                <Form.Label column sm="12">
                  Authors
                </Form.Label>
                {
                authors.map((val, idx) => {
                  const firstId = `first-${idx}`;
                  const lastId = `last-${idx}`;

                  return (
                    <div className="container">
                      <Card>
                        <Form>
                          <div className="container form-start">
                            <Form.Group as={Row} controlId={firstId}>
                              <Form.Label column sm="2">
                                First Name
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" onChange={(e) => populateFirstName(idx, e.target.value)} />
                              </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId={lastId}>
                              <Form.Label column sm="2">
                                Last Name
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" onChange={(e) => populateLastName(idx, e.target.value)} />
                              </Col>
                            </Form.Group>
                          </div>
                        </Form>
                      </Card>
                    </div>
                  );
                })
                            }
                <div className="text-center custom-btn">
                  <Button variant="primary" onClick={addAuthor}>
                    Add Author
                  </Button>
                                &nbsp;&nbsp;&nbsp;
                  <Button variant="primary" onClick={removeAuthor}>
                    Reset Authors
                  </Button>
                </div>
              </div>
              <div>
                <Form.Label column sm="12">
                  Pages
                </Form.Label>
                {
                pages.map((val, idx) => {
                  const pageId = `page-${idx}`;

                  return (
                    <div className="container">
                      <Card>
                        <Form>
                          <div className="container form-start">

                            <Form.Group as={Row} controlId={pageId}>
                              <Form.Label column sm="2">
                                Page
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control type="text" onChange={(e) => populatePage(idx, e.target.value)} />
                              </Col>
                            </Form.Group>
                          </div>
                        </Form>
                      </Card>
                    </div>
                  );
                })
                            }
                <div className="text-center custom-btn">
                  <Button variant="primary" onClick={addPage}>
                    Add Page
                  </Button>
                                &nbsp;&nbsp;&nbsp;
                  <Button variant="primary" onClick={removePage}>
                    Reset Pages
                  </Button>
                </div>
              </div>
              <div className="text-center custom-btn">
                <Button variant="primary" onClick={generateCitation} className="center-block">
                  Submit
                </Button>
              </div>
              <hr />
              <Form.Group controlId="Generate Citation">
                <Form.Control type="text" value={citation.bibliography} readOnly />
              </Form.Group>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default CMOSBook;
