import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const emptyAuthor = { first: '', last: '' };

const Authors = ({
  authors, setAuthors, onFirstChange, onLastChange,
}) => (
  <div>
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
                        <Form.Control type="text" val={authors[idx].first} onChange={(e) => onFirstChange(idx, e.target.value)} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId={lastId}>
                      <Form.Label column sm="2">
                        Last Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" val={authors[idx].last} onChange={(e) => onLastChange(idx, e.target.value)} />
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
  </div>
);

Authors.defaultProps = {
  authors: [{ first: '', last: '' }],
  setAuthors: null,
  onFirstChange: null,
  onLastChange: null,
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
  ),
  setAuthors: PropTypes.func,
  onFirstChange: PropTypes.func,
  onLastChange: PropTypes.func,
};

export default Authors;
