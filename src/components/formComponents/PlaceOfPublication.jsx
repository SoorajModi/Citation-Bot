import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const onPopChange = (setPop, e, generateCitation) => {
  setPop({ placeOfPublication: e });
  generateCitation();
};

const PlaceOfPublication = ({ pop, setPop, generateCitation }) => (
  <Form.Group as={Row} controlId="inputPOP">
    <Form.Label column sm="2">
      Place of Publication
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={pop.placeOfPublication} onChange={(e) => onPopChange(setPop, e.target.value, generateCitation)} />
    </Col>
  </Form.Group>
);

PlaceOfPublication.defaultProps = {
  pop: { placeOfPublication: '' },
  setPop: null,
  generateCitation: null,
};

PlaceOfPublication.propTypes = {
  pop: PropTypes.shape({ placeOfPublication: PropTypes.string }),
  setPop: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default PlaceOfPublication;
