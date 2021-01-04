import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Title from '../formComponents/Title';
import Publisher from '../formComponents/Publisher';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import YearOfPublication from '../formComponents/YearOfPublication';
import CitationURL from '../formComponents/CitationURL';
import SiteName from '../formComponents/SiteName';

const CMOS = require('chicagomanualofstyle');

function ChicagoWebsite() {
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState({ title: '' });
  const [pub, setPub] = useState({ publisher: '' });
  const [date, setDate] = useState({ yearOfPublication: '' });
  const [URL, setURL] = useState({ url: '' });
  const [siteName, setSiteName] = useState({ name: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const journal = CMOS.webpage({
      title: title.title || 'Must Specify Title',
      authorList: authors,
      publisher: pub.publisher,
      date: date.yearOfPublication || new Date().getFullYear(),
      nameOfSite: siteName.name || 'Must specify name of site',
      url: URL.url || 'Must specify url',
    }, []);

    setCitation({ bibliography: journal.bibliography });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Web Page Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <Title title={title} setTitle={setTitle} generateCitation={generateCitation} />
              <Publisher pub={pub} setPub={setPub} generateCitation={generateCitation} />
              <SiteName siteName={siteName} setSiteName={setSiteName} generateCitation={generateCitation} />
              <YearOfPublication yop={date} setYop={setDate} generateCitation={generateCitation} />
              <CitationURL url={URL} setURL={setURL} generateCitation={generateCitation} />
              <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
              <Citation citation={citation} generateCitation={generateCitation} />
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoWebsite;
