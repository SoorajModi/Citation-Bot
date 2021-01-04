import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onStringChange = (setStr, targetValue, generateCitation) => {
  setStr({ value: targetValue });
  generateCitation();
};

const StringComponent = ({
  str, setStr, formLabel, generateCitation,
}) => (
  <>
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        {formLabel}
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={str.value} onChange={(e) => onStringChange(setStr, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

StringComponent.defaultProps = {
  str: '',
  formLabel: 'Label',
  setStr: null,
  generateCitation: null,
};

StringComponent.propTypes = {
  str: PropTypes.string,
  formLabel: PropTypes.string,
  setStr: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default StringComponent;
