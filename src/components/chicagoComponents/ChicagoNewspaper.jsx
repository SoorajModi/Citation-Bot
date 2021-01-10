import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import StringComponent from '../formComponents/StringComponent';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';

const { newspaper } = require('chicagomanualofstyle');

function ChicagoNewspaper() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [newspaperTitle, setNewspaperTitle] = useState(emptyValue);
  const [edition, setEdition] = useState(emptyValue);
  const [date, setDate] = useState(emptyValue);
  const [URL, setURL] = useState(emptyValue);
  const [authors, setAuthors] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  const generateCitation = () => {
    const cmos = newspaper({
      articleTitle: title.value || 'Must Specify Article Title',
      newspaperTitle: newspaperTitle.value || 'Must Specify Newspaper Title',
      authorList: authors,
      date: date.value || new Date().getFullYear(),
      url: URL.value || 'Must specify url',
    });

    setCitation({ bibliography: cmos.bibliography, notes: cmos.notes });
  };

  return (
    <Container>
      <h1 className="subpage-heading">Chicago Style Web Page Citation</h1>
      <Card className="data-entry">
        <Container className="form-start">
          <StringComponent formLabel="Article Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Newspaper Title" str={newspaperTitle} setStr={setNewspaperTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Date" str={date} setStr={setDate} generateCitation={generateCitation} />
          <StringComponent formLabel="Edition" str={edition} setStr={setEdition} generateCitation={generateCitation} />
          <StringComponent formLabel="URL" str={URL} setStr={setURL} generateCitation={generateCitation} />
          <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoNewspaper;
