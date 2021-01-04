import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onEndChange = (setEndRange, e, generateCitation) => {
  setEndRange({ endRange: e });
  generateCitation();
};

const EndRange = ({ end, setEndRange, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        End Range
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={end.endRange} onChange={(e) => onEndChange(setEndRange, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

EndRange.defaultProps = {
  end: '',
  setEndRange: null,
  generateCitation: null,
};

EndRange.propTypes = {
  end: PropTypes.string,
  setEndRange: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default EndRange;
