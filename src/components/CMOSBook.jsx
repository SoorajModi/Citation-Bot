import React, { useState } from 'react';
import '../css/subpage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlaceOfPublication from './formComponents/PlaceOfPublication';
import YearOfPublication from './formComponents/YearOfPublication';
import Publisher from './formComponents/Publisher';
import Title from './formComponents/Title';
import Authors from './formComponents/Authors';
import Pages from './formComponents/Pages';

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
              <Title title={title} onTitleChange={newTitle} />
              <Publisher pub={pub} onPubChange={newPub} />
              <PlaceOfPublication pop={pop} onPopChange={newPop} />
              <YearOfPublication yop={yop} onYopChange={newYop} />
              <Authors authors={authors} onFirstChange={populateFirstName} onLastChange={populateLastName} addAuthor={addAuthor} removeAuthor={removeAuthor} />
              <Pages pages={pages} onPageChange={populatePage} addPage={addPage} removePage={removePage} />
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
