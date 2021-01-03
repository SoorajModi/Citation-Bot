import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const Citation = ({ bibliography, generateCitation }) => (
  <>
    <div className="text-center custom-btn">
      <Button variant="primary" onClick={generateCitation} className="center-block">
        Generate
      </Button>
    </div>
    <hr />
    <Form.Group controlId="Generate Citation">
      <Form.Control type="text" value={bibliography} readOnly />
      <CopyToClipboard text={bibliography}>
        <Button variant="secondary">
          <FontAwesomeIcon icon={faClipboard} />
        </Button>
      </CopyToClipboard>
    </Form.Group>
  </>
);

Citation.defaultProps = {
  bibliography: '',
  generateCitation: null,
};

Citation.propTypes = {
  bibliography: PropTypes.string,
  generateCitation: PropTypes.func,
};

export default Citation;
