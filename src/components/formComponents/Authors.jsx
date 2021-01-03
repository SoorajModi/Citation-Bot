import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Authors = ({
  authors, onFirstChange, onLastChange, addAuthor, removeAuthor,
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
      <Button variant="primary" onClick={addAuthor}>
        Add Author
      </Button>
        &nbsp;&nbsp;&nbsp;
      <Button variant="primary" onClick={removeAuthor}>
        Reset Authors
      </Button>
    </div>
  </div>
);

Authors.defaultProps = {
  authors: [{ first: '', last: '' }],
  onFirstChange: null,
  onLastChange: null,
  addAuthor: null,
  removeAuthor: null,
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
  ),
  onFirstChange: PropTypes.func,
  onLastChange: PropTypes.func,
  addAuthor: PropTypes.func,
  removeAuthor: PropTypes.func,
};

export default Authors;
