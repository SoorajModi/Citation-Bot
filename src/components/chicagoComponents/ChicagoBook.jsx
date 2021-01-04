import React, { useState } from 'react';
import '../../css/subpage.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PlaceOfPublication from '../formComponents/PlaceOfPublication';
import YearOfPublication from '../formComponents/YearOfPublication';
import Publisher from '../formComponents/Publisher';
import Title from '../formComponents/Title';
import Authors from '../formComponents/Authors';
import Pages from '../formComponents/Pages';
import Citation from '../formComponents/Citaton';

const CMOS = require('chicagomanualofstyle');

function ChicagoBook() {
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState({ title: '' });
  const [pub, setPub] = useState({ publisher: '' });
  const [pop, setPop] = useState({ placeOfPublication: '' });
  const [yop, setYop] = useState({ yearOfPublication: '' });
  const [citation, setCitation] = useState({ bibliography: '', notes: [''] });

  const generateCitation = () => {
    const book = CMOS.book({
      title: title.title || 'Must Specify Title',
      authorList: authors,
      publisher: pub.publisher,
      placeOfPublication: pop.placeOfPublication,
      yearOfPublication: yop.yearOfPublication,
    }, []);

    setCitation({ bibliography: book.bibliography });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Book Citation</h1>
      <div className="data-entry">
        <Card>
          <Form>
            <div className="container form-start">
              <Title title={title} setTitle={setTitle} generateCitation={generateCitation} />
              <Publisher pub={pub} setPub={setPub} generateCitation={generateCitation} />
              <PlaceOfPublication pop={pop} setPop={setPop} generateCitation={generateCitation} />
              <YearOfPublication yop={yop} setYop={setYop} generateCitation={generateCitation} />
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

export default ChicagoBook;
