import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';
import Pages from '../formComponents/Pages';

const CMOS = require('chicagomanualofstyle');

function ChicagoWebsite() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [publisher, setPublisher] = useState(emptyValue);
  const [date, setDate] = useState(emptyValue);
  const [URL, setURL] = useState(emptyValue);
  const [siteName, setSiteName] = useState(emptyValue);
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const webpage = CMOS.webpage({
      title: title.value || 'Must Specify Title',
      authorList: authors,
      publisher: publisher.value,
      date: date.value || new Date().getFullYear(),
      nameOfSite: siteName.value || 'Must specify name of site',
      url: URL.value || 'Must specify url',
    }, []);

    setCitation({ bibliography: webpage.bibliography, notes: webpage.pages });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Web Page Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
              <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
              <StringComponent formLabel="Site Name" str={siteName} setStr={setSiteName} generateCitation={generateCitation} />
              <StringComponent formLabel="Date" str={date} setStr={setDate} generateCitation={generateCitation} />
              <StringComponent formLabel="URL" str={URL} setStr={setURL} generateCitation={generateCitation} />
              <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
              <Pages pages={pages} setPages={setPages} />
              <Citation citation={citation} generateCitation={generateCitation} />
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoWebsite;
