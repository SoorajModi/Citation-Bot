import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Publisher = ({ pub, onPubChange }) => (
  <Form.Group as={Row} controlId="inputPublisher">
    <Form.Label column sm="2">
      Publisher
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={pub.publisher} onChange={(e) => onPubChange(e.target.value)} />
    </Col>
  </Form.Group>
);

Publisher.defaultProps = {
  pub: { publisher: '' },
  onPubChange: null,
};

Publisher.propTypes = {
  pub: PropTypes.shape({ publisher: PropTypes.string }),
  onPubChange: PropTypes.func,
};

export default Publisher;
