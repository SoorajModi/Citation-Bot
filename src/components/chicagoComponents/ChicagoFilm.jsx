import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import StringComponent from '../formComponents/StringComponent';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';

const { film } = require('chicagomanualofstyle');

function ChicagoFilm() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [originalRelease, setOriginalRelease] = useState(emptyValue);
  const [videoRelease, setVideoRelease] = useState(emptyValue);
  const [city, setCity] = useState(emptyValue);
  const [distributor, setDistributor] = useState(emptyValue);
  const [medium, setMedium] = useState(emptyValue);
  const [directors, setDirectors] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  const generateCitation = () => {
    const cmos = film({
      title: title.value || 'Must Specify Article Title',
      director: directors,
      originalRelease: originalRelease.value,
      videoRelease: videoRelease.value,
      distributor: distributor.value,
      city: city.value,
      medium: medium.value || 'Digital',
      scenes: [],
    });

    setCitation({ bibliography: cmos.bibliography, notes: cmos.notes });
  };

  return (
    <Container>
      <h1 className="subpage-heading">Chicago Style Film Citation</h1>
      <Card className="data-entry">
        <Container className="form-start">
          <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Original Release Date" str={originalRelease} setStr={setOriginalRelease} generateCitation={generateCitation} />
          <StringComponent formLabel="Video Release Date" str={videoRelease} setStr={setVideoRelease} generateCitation={generateCitation} />
          <StringComponent formLabel="City" str={city} setStr={setCity} generateCitation={generateCitation} />
          <StringComponent formLabel="Distributor" str={distributor} setStr={setDistributor} generateCitation={generateCitation} />
          <StringComponent formLabel="Medium" str={medium} setStr={setMedium} generateCitation={generateCitation} />
          <Authors authors={directors} setAuthors={setDirectors} generateCitation={generateCitation} label="Directors" />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoFilm;
