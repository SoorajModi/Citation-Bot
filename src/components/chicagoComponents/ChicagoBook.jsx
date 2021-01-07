import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Authors from '../formComponents/Authors';
import Pages from '../formComponents/Pages';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';

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

  const generateCitation = () => {
    console.log(pages);
    console.log(authors);

    const book = CMOS.book({
      title: title.value || 'Must Specify Title',
      authorList: authors,
      publisher: publisher.value,
      placeOfPublication: placeOfPublication.value,
      yearOfPublication: yearOfPublication.value,
    }, [{ page: '' }, { page: '10' }]);

    console.log(book);

    setCitation({ bibliography: book.bibliography, notes: book.notes });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Book Citation</h1>
      <div className="data-entry">
        <Card>
          <div className="container form-start">
            <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
            <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
            <StringComponent formLabel="Place of Publication" str={placeOfPublication} setStr={setPlaceOfPublication} generateCitation={generateCitation} />
            <StringComponent formLabel="Year of Publication" str={yearOfPublication} setStr={setYearOfPublication} generateCitation={generateCitation} />
            <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
            <Pages pages={pages} setPages={setPages} />
            <Citation citation={citation} generateCitation={generateCitation} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoBook;
