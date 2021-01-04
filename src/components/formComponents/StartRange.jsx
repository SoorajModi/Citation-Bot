import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onStartChange = (setStartRange, e, generateCitation) => {
  setStartRange({ startRange: e });
  generateCitation();
};

const StartRange = ({ start, setStartRange, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        Start Range
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={start.startRange} onChange={(e) => onStartChange(setStartRange, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

StartRange.defaultProps = {
  start: '',
  setStartRange: null,
  generateCitation: null,
};

StartRange.propTypes = {
  start: PropTypes.string,
  setStartRange: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default StartRange;
