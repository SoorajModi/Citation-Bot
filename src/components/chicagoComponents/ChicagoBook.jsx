import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';
import Pages from '../formComponents/Pages';

const CMOS = require('chicagomanualofstyle');

function ChicagoBook() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [publisher, setPublisher] = useState(emptyValue);
  const [placeOfPublication, setPlaceOfPublication] = useState(emptyValue);
  const [yearOfPublication, setYearOfPublication] = useState(emptyValue);
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  // Temporary fix because I cant figure out the bug when using an object instead of a string array
  const convertToValidStringArray = (toConvert) => {
    const newArr = [];

    toConvert.forEach((page) => {
      if (page.page !== '') newArr.push(page.page);
    });

    return newArr;
  };

  const generateCitation = () => {
    const book = CMOS.book({
      title: title.value || 'Must Specify Title',
      authorList: authors,
      publisher: publisher.value,
      placeOfPublication: placeOfPublication.value,
      yearOfPublication: yearOfPublication.value,
    }, convertToValidStringArray(pages));

    setCitation({ bibliography: book.bibliography, notes: book.notes });
  };

  return (
    <Container>
      <h1 className="subpage-heading">Chicago Style Book Citation</h1>
      <Card className="data-entry">
        <Container className="form-start">
          <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
          <StringComponent formLabel="Place of Publication" str={placeOfPublication} setStr={setPlaceOfPublication} generateCitation={generateCitation} />
          <StringComponent formLabel="Year of Publication" str={yearOfPublication} setStr={setYearOfPublication} generateCitation={generateCitation} />
          <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
          <Pages pages={pages} setPages={setPages} generateCitation={generateCitation} />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoBook;
