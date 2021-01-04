import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const emptyAuthor = { first: '', last: '' };

const onFirstNameChange = (authors, index, e, generateCitation) => {
  authors[index].first = e;
  generateCitation();
};

const onLastNameChange = (authors, index, e, generateCitation) => {
  authors[index].last = e;
  generateCitation();
};

const Authors = ({
  authors, setAuthors, generateCitation,
}) => (
  <>
    <Form.Label column sm="12">
      Authors
    </Form.Label>
    {
        authors.map((val, idx) => {
          const firstId = `first-${idx}`;
          const lastId = `last-${idx}`;

          return (
            <div className="container">
              <Card>
                <Form>
                  <div className="container form-start">
                    <Form.Group as={Row} controlId={firstId}>
                      <Form.Label column sm="2">
                        First Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" val={authors[idx].first} onChange={(e) => onFirstNameChange(authors, idx, e.target.value, generateCitation)} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={lastId}>
                      <Form.Label column sm="2">
                        Last Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" val={authors[idx].last} onChange={(e) => onLastNameChange(authors, idx, e.target.value, generateCitation)} />
                      </Col>
                    </Form.Group>
                  </div>
                </Form>
              </Card>
            </div>
          );
        })
    }
    <div className="text-center custom-btn">
      <Button variant="primary" onClick={() => setAuthors([...authors, { ...emptyAuthor }])}>
        Add Author
      </Button>
        &nbsp;&nbsp;&nbsp;
      <Button variant="primary" onClick={() => setAuthors([])}>
        Reset Authors
      </Button>
    </div>
  </>
);

Authors.defaultProps = {
  authors: [{ first: '', last: '' }],
  setAuthors: null,
  generateCitation: null,
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
  ),
  setAuthors: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Authors;
