import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const onYopChange = (setYop, e, generateCitation) => {
  setYop({ yearOfPublication: e });
  generateCitation();
};

const YearOfPublication = ({ yop, setYop, generateCitation }) => (
  <Form.Group as={Row} controlId="inputYOP">
    <Form.Label column sm="2">
      Year of Publication
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={yop.yearOfPublication} onChange={(e) => onYopChange(setYop, e.target.value, generateCitation)} />
    </Col>
  </Form.Group>
);

YearOfPublication.defaultProps = {
  yop: { yearOfPublication: '' },
  setYop: null,
  generateCitation: null,
};

YearOfPublication.propTypes = {
  yop: PropTypes.shape({ yearOfPublication: PropTypes.string }),
  setYop: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default YearOfPublication;
