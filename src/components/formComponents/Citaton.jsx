import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const Citation = ({ citation, generateCitation }) => (
  <>
    <div className="text-center custom-btn">
      <Button variant="primary" onClick={generateCitation} className="center-block">
        Generate
      </Button>
    </div>
    <hr />
    <Form.Group controlId="Generate Citation">
      <Form.Control type="text" value={citation.bibliography} readOnly />
      <CopyToClipboard text={citation.bibliography}>
        <Button variant="secondary">
          <FontAwesomeIcon icon={faClipboard} />
        </Button>
      </CopyToClipboard>
    </Form.Group>
  </>
);

Citation.defaultProps = {
  citation: { bibliography: '', notes: [] },
  generateCitation: null,
};

Citation.propTypes = {
  citation: PropTypes.shape({
    bibliography: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.string),
  }),
  generateCitation: PropTypes.func,
};

export default Citation;
