import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onSiteNameChange = (setSiteName, e, generateCitation) => {
  setSiteName({ name: e });
  generateCitation();
};

const SiteName = ({ siteName, setSiteName, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        Name of Site
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={siteName.name} onChange={(e) => onSiteNameChange(setSiteName, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

SiteName.defaultProps = {
  siteName: '',
  setSiteName: null,
  generateCitation: null,
};

SiteName.propTypes = {
  siteName: PropTypes.string,
  setSiteName: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default SiteName;
