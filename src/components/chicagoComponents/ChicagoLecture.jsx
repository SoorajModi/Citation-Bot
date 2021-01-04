import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';

const CMOS = require('chicagomanualofstyle');

function ChicagoLecture() {
  const [profs, setProfs] = useState([]);
  const [title, setTitle] = useState({ value: '' });
  const [date, setDate] = useState({ value: '' });
  const [university, setUniversity] = useState({ value: '' });
  const [province, setProvince] = useState({ value: '' });
  const [city, setCity] = useState({ value: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const lecture = CMOS.lecture({
      title: title.value || 'Must Specify Title',
      authorList: profs,
      date: date.value,
      university: university.value,
      province: province.value,
      city: city.value,
    }, []);

    setCitation({ bibliography: lecture.bibliography });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Lecture Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
              <StringComponent formLabel="Date of Lecture" str={date} setStr={setDate} generateCitation={generateCitation} />
              <StringComponent formLabel="University" str={university} setStr={setUniversity} generateCitation={generateCitation} />
              <StringComponent formLabel="Province" str={province} setStr={setProvince} generateCitation={generateCitation} />
              <StringComponent formLabel="City" str={city} setStr={setCity} generateCitation={generateCitation} />
              <Authors authors={profs} setAuthors={setProfs} generateCitation={generateCitation} />
              <Citation citation={citation} generateCitation={generateCitation} />
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoLecture;
