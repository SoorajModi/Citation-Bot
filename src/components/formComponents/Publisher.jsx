import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onPubChange = (setPub, e, generateCitation) => {
  setPub({ publisher: e });
  generateCitation();
};

const Publisher = ({ pub, setPub, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        Publisher
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={pub.publisher} onChange={(e) => onPubChange(setPub, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

Publisher.defaultProps = {
  pub: { publisher: '' },
  setPub: null,
  generateCitation: null,
};

Publisher.propTypes = {
  pub: PropTypes.shape({ publisher: PropTypes.string }),
  setPub: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Publisher;
