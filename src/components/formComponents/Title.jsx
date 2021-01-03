import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Title = ({ title, onTitleChange }) => (
  <Form.Group as={Row} controlId="inputTitle">
    <Form.Label column sm="2">
      Title
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" value={title.title} onChange={(e) => onTitleChange(e.target.value)} />
    </Col>
  </Form.Group>
);

Title.defaultProps = {
  title: { title: 'No Title Specified' },
  onTitleChange: null,
};

Title.propTypes = {
  title: PropTypes.shape({ title: PropTypes.string }),
  onTitleChange: PropTypes.func,
};

export default Title;
