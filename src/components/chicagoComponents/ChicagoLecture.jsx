import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';

const { lecture } = require('chicagomanualofstyle');

function ChicagoLecture() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [date, setDate] = useState(emptyValue);
  const [university, setUniversity] = useState(emptyValue);
  const [province, setProvince] = useState(emptyValue);
  const [city, setCity] = useState(emptyValue);
  const [profs, setProfs] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  const generateCitation = () => {
    const cmos = lecture({
      title: title.value || 'Must Specify Title',
      authorList: profs,
      date: date.value,
      university: university.value,
      province: province.value,
      city: city.value,
    });

    setCitation({ bibliography: cmos.bibliography, notes: cmos.notes });
  };

  return (
    <Container>
      <h1 className="subpage-heading">Chicago Style Lecture Citation</h1>
      <Card className="data-entry">
        <Container className="form-start">
          <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Date of Lecture" str={date} setStr={setDate} generateCitation={generateCitation} />
          <StringComponent formLabel="University" str={university} setStr={setUniversity} generateCitation={generateCitation} />
          <StringComponent formLabel="Province" str={province} setStr={setProvince} generateCitation={generateCitation} />
          <StringComponent formLabel="City" str={city} setStr={setCity} generateCitation={generateCitation} />
          <Authors authors={profs} setAuthors={setProfs} generateCitation={generateCitation} />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoLecture;
