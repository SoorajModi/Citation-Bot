import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../css/subpage.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const emptyAuthor = { first: '', last: '' };

const onFirstNameChange = (authors, index, e, generateCitation) => {
  authors[index].first = e;
  generateCitation();
};

const onLastNameChange = (authors, index, e, generateCitation) => {
  authors[index].last = e;
  generateCitation();
};

const handleRemoveAuthor = (authors, index, setAuthors, generateCitation) => {
  const temp = [...authors];

  temp.splice(index, 1);
  setAuthors(temp);

  generateCitation();
};

const Authors = ({
  authors, setAuthors, generateCitation,
}) => (
  <>
    <Form inline className="pad-element-bottom">
      <Form.Label column sm="2">
        Authors
      </Form.Label>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={() => setAuthors([])}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => handleRemoveAuthor(authors, authors.length - 1, setAuthors, generateCitation)}>
          Remove
        </Button>
        <Button variant="secondary" onClick={() => { setAuthors([...authors, { ...emptyAuthor }]); }}>
          Add
        </Button>
      </ButtonGroup>
    </Form>
    {
      authors.map((val, idx) => (
        <div className="container pad-element-bottom">
          <Form>
            <Form.Row>
              <Form.Label column lg={2} className="center-element">
                First Name
              </Form.Label>
              <Col>
                <Form.Control type="text" val={authors[idx].first} onChange={(e) => onFirstNameChange(authors, idx, e.target.value, generateCitation)} />
              </Col>
              <Form.Label column lg={2} className="center-element">
                Last Name
              </Form.Label>
              <Col>
                <Form.Control type="text" val={authors[idx].last} onChange={(e) => onLastNameChange(authors, idx, e.target.value, generateCitation)} />
              </Col>
              {/* <Button variant="secondary" onClick={() => handleRemoveAuthor(authors, idx, setAuthors, generateCitation)}>Remove</Button> */}
            </Form.Row>
          </Form>
        </div>
      ))
    }
  </>
);

Authors.defaultProps = {
  authors: [{ first: '', last: '' }],
  setAuthors: null,
  generateCitation: null,
};

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
  ),
  setAuthors: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Authors;
