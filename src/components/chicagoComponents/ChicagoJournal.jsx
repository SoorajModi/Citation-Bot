import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';

const CMOS = require('chicagomanualofstyle');

function ChicagoJournal() {
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState({ value: '' });
  const [publisher, setPublisher] = useState({ value: '' });
  const [yearOfPublication, setYearOfPublication] = useState({ value: '' });
  const [volume, setVolume] = useState({ value: '' });
  const [issue, setIssue] = useState({ value: '' });
  const [startRange, setStartRange] = useState({ value: '' });
  const [endRange, setEndRange] = useState({ value: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const journal = CMOS.journal({
      title: title.value || 'Must Specify Title',
      authorList: authors,
      publisher: publisher.value,
      yearOfPublication: yearOfPublication.value,
      volume: volume.value,
      issue: issue.value,
      startRange: startRange.value,
      endRange: endRange.value || startRange.value,
    }, []);

    setCitation({ bibliography: journal.bibliography });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Journal Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
              <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
              <StringComponent formLabel="Year of Publication" str={yearOfPublication} setStr={setYearOfPublication} generateCitation={generateCitation} />
              <StringComponent formLabel="Volume" str={volume} setStr={setVolume} generateCitation={generateCitation} />
              <StringComponent formLabel="Issue" str={issue} setStr={setIssue} generateCitation={generateCitation} />
              <StringComponent formLabel="Start Range" str={startRange} setStr={setStartRange} generateCitation={generateCitation} />
              <StringComponent formLabel="End Range" str={endRange} setStr={setEndRange} generateCitation={generateCitation} />
              <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
              <Citation citation={citation} generateCitation={generateCitation} />
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoJournal;
