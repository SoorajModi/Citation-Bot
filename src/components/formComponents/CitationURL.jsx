import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onURLChange = (setURL, e, generateCitation) => {
  setURL({ url: e });
  generateCitation();
};

const CitationURL = ({ URL, setURL, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        URL
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={URL.url} onChange={(e) => onURLChange(setURL, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

CitationURL.defaultProps = {
  URL: '',
  setURL: null,
  generateCitation: null,
};

CitationURL.propTypes = {
  URL: PropTypes.string,
  setURL: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default CitationURL;
