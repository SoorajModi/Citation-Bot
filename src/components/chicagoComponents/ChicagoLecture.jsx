import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';
import Pages from '../formComponents/Pages';

const CMOS = require('chicagomanualofstyle');

function ChicagoLecture() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [date, setDate] = useState(emptyValue);
  const [university, setUniversity] = useState(emptyValue);
  const [province, setProvince] = useState(emptyValue);
  const [city, setCity] = useState(emptyValue);
  const [pages, setPages] = useState([]);
  const [profs, setProfs] = useState([]);
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

    setCitation({ bibliography: lecture.bibliography, pages: lecture.pages });
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
              <Pages pages={pages} setPages={setPages} />
              <Citation citation={citation} generateCitation={generateCitation} />
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoLecture;
