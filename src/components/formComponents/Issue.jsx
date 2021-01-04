import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onIssueChange = (setIssue, e, generateCitation) => {
  setIssue({ issue: e });
  generateCitation();
};

const Issue = ({ issue, setIssue, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        Issue
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={issue.issue} onChange={(e) => onIssueChange(setIssue, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

Issue.defaultProps = {
  issue: '',
  setIssue: null,
  generateCitation: null,
};

Issue.propTypes = {
  issue: PropTypes.string,
  setIssue: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Issue;
