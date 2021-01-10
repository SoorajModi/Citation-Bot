import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../css/subpage.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const uniqid = require('uniqid');

const onFirstNameChange = (author, newFirstName, generateCitation) => {
  author.first = newFirstName;
  generateCitation();
};

const onLastNameChange = (author, newLastName, generateCitation) => {
  author.last = newLastName;
  generateCitation();
};

const handleResetAuthors = (setAuthors, generateCitation) => {
  setAuthors([]);
  generateCitation();
};

const handleRemoveAuthor = (authors, index, setAuthors, generateCitation) => {
  const temp = [...authors];

  temp.splice(index, 1);
  setAuthors(temp);

  generateCitation();
};

const handleAddAuthor = (authors, setAuthors) => {
  setAuthors([...authors, { first: '', last: '', uniqueID: uniqid() }]);
};

const Authors = ({
  label, authors, setAuthors, generateCitation,
}) => (
  <>
    <Form inline className="pad-element-bottom">
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={() => handleResetAuthors(setAuthors, generateCitation)}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => handleRemoveAuthor(authors, authors.length - 1, setAuthors, generateCitation)}>
          Remove
        </Button>
        <Button variant="secondary" onClick={() => handleAddAuthor(authors, setAuthors)}>
          Add
        </Button>
      </ButtonGroup>
    </Form>
    {
      authors.map((val, idx) => (
        <div className="container pad-element-bottom" key={val.uniqueID}>
          <Form>
            <Form.Row>
              <Form.Label column lg={2} className="center-element">
                First Name
              </Form.Label>
              <Col>
                <Form.Control type="text" val={authors[idx].first} onChange={(e) => onFirstNameChange(authors[idx], e.target.value, generateCitation)} />
              </Col>
              <Form.Label column lg={2} className="center-element">
                Last Name
              </Form.Label>
              <Col>
                <Form.Control type="text" val={authors[idx].last} onChange={(e) => onLastNameChange(authors[idx], e.target.value, generateCitation)} />
              </Col>
            </Form.Row>
          </Form>
        </div>
      ))
    }
  </>
);

Authors.defaultProps = {
  label: 'Authors',
  authors: [],
  setAuthors: null,
  generateCitation: null,
};

Authors.propTypes = {
  label: PropTypes.string,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      uniqueID: PropTypes.string,
    }),
  ),
  setAuthors: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Authors;
