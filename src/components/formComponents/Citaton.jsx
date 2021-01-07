import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';

const uniqid = require('uniqid');

const Citation = ({ citation, generateCitation }) => (
  <>
    <hr />
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant="secondary" onClick={generateCitation} className="center-block">
          Generate
        </Button>
      </InputGroup.Prepend>
      <Form.Control type="text" value={citation.bibliography} readOnly />
      <InputGroup.Append>
        <CopyToClipboard text={citation.bibliography}>
          <Button variant="secondary">
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </CopyToClipboard>
      </InputGroup.Append>
    </InputGroup>
    {
      citation.notes.map((val, idx) => (
        <InputGroup className="mb-3" key={uniqid()}>
          <Form.Control type="text" value={citation.notes[idx]} readOnly />
          <InputGroup.Append>
            <CopyToClipboard text={citation.notes[idx]}>
              <Button variant="secondary">
                <FontAwesomeIcon icon={faClipboard} />
              </Button>
            </CopyToClipboard>
          </InputGroup.Append>
        </InputGroup>
      ))
    }
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
