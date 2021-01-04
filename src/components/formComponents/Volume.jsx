import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const onVolumeChange = (setVolume, e, generateCitation) => {
  setVolume({ volume: e });
  generateCitation();
};

const Volume = ({ volume, setVolume, generateCitation }) => (
  <>
    <Form.Group as={Row} controlId="inputPublisher">
      <Form.Label column sm="2">
        Volume
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" value={volume.volume} onChange={(e) => onVolumeChange(setVolume, e.target.value, generateCitation)} />
      </Col>
    </Form.Group>
  </>
);

Volume.defaultProps = {
  volume: '',
  setVolume: null,
  generateCitation: null,
};

Volume.propTypes = {
  volume: PropTypes.string,
  setVolume: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Volume;
