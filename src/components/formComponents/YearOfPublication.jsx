import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const YearOfPublication = ({ yop, onYopChange }) => (
  <Form.Group as={Row} controlId="inputYOP">
    <Form.Label column sm="2">
      Year of Publication
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={yop.yearOfPublication} onChange={(e) => onYopChange(e.target.value)} />
    </Col>
  </Form.Group>
);

YearOfPublication.defaultProps = {
  yop: { yearOfPublication: '' },
  onYopChange: null,
};

YearOfPublication.propTypes = {
  yop: PropTypes.shape({ yearOfPublication: PropTypes.string }),
  onYopChange: PropTypes.func,
};

export default YearOfPublication;
