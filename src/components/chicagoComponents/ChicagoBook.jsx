import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';
import Pages from '../formComponents/Pages';

const { book } = require('chicagomanualofstyle');

function ChicagoBook() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [publisher, setPublisher] = useState(emptyValue);
  const [placeOfPublication, setPlaceOfPublication] = useState(emptyValue);
  const [yearOfPublication, setYearOfPublication] = useState(emptyValue);
  const [edition, setEdition] = useState(emptyValue);
  const [URL, setURL] = useState(emptyValue);
  const [authors, setAuthors] = useState([]);
  const [editors, setEditors] = useState([]);
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
    const cmos = book({
      title: title.value || 'Must Specify Title',
      authors,
      editors,
      publisher: publisher.value,
      placeOfPublication: placeOfPublication.value,
      yearOfPublication: yearOfPublication.value,
      edition: edition.value,
      url: URL.value,
    }, convertToValidStringArray(pages));

    setCitation({ bibliography: cmos.bibliography, notes: cmos.notes });
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
          <StringComponent formLabel="Edition" str={edition} setStr={setEdition} generateCitation={generateCitation} />
          <StringComponent formLabel="URL/DOI" str={URL} setStr={setURL} generateCitation={generateCitation} />
          <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
          <Authors authors={editors} setAuthors={setEditors} generateCitation={generateCitation} label="Editors" />
          <Pages pages={pages} setPages={setPages} generateCitation={generateCitation} />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoBook;
