import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Title from '../formComponents/Title';
import Publisher from '../formComponents/Publisher';
import YearOfPublication from '../formComponents/YearOfPublication';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import Volume from '../formComponents/Volume';
import Issue from '../formComponents/Issue';
import StartRange from '../formComponents/StartRange';
import EndRange from '../formComponents/EndRange';

const CMOS = require('chicagomanualofstyle');

function ChicagoJournal() {
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState({ title: '' });
  const [pub, setPub] = useState({ publisher: '' });
  const [yop, setYop] = useState({ yearOfPublication: '' });
  const [vol, setVol] = useState({ volume: '' });
  const [iss, setIss] = useState({ issue: '' });
  const [start, setStart] = useState({ startRange: '' });
  const [end, setEnd] = useState({ endRange: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const journal = CMOS.journal({
      title: title.title || 'Must Specify Title',
      authorList: authors,
      publisher: pub.publisher,
      yearOfPublication: yop.yearOfPublication,
      volume: vol.volume,
      issue: iss.issue,
      startRange: start.startRange,
      endRange: end.endRange || start.startRange,
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
              <Title title={title} setTitle={setTitle} generateCitation={generateCitation} />
              <Publisher pub={pub} setPub={setPub} generateCitation={generateCitation} />
              <YearOfPublication yop={yop} setYop={setYop} generateCitation={generateCitation} />
              <Volume volume={vol} setVolume={setVol} generateCitation={generateCitation} />
              <Issue issue={iss} setIssue={setIss} generateCitation={generateCitation} />
              <StartRange start={start} setStartRange={setStart} generateCitation={generateCitation} />
              <EndRange end={end} setEndRange={setEnd} generateCitation={generateCitation} />
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
