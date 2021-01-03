import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const PlaceOfPublication = ({ pop, onPopChange }) => (
  <Form.Group as={Row} controlId="inputPOP">
    <Form.Label column sm="2">
      Place of Publication
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={pop.placeOfPublication} onChange={(e) => onPopChange(e.target.value)} />
    </Col>
  </Form.Group>
);

PlaceOfPublication.defaultProps = {
  pop: { placeOfPublication: '' },
  onPopChange: null,
};

PlaceOfPublication.propTypes = {
  pop: PropTypes.shape({ placeOfPublication: PropTypes.string }),
  onPopChange: PropTypes.func,
};

export default PlaceOfPublication;
