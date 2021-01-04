import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const onTitleChange = (setTitle, e, generateCitation) => {
  setTitle({ title: e });
  generateCitation();
};

const Title = ({ title, setTitle, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputTitle">
      <Form.Label column sm="2">
        Title
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={title.title} onChange={(e) => onTitleChange(setTitle, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

Title.defaultProps = {
  title: { title: '' },
  setTitle: null,
  generateCitation: null,
};

Title.propTypes = {
  title: PropTypes.shape({ title: PropTypes.string }),
  setTitle: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Title;
