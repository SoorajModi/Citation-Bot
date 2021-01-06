import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const uniqid = require('uniqid');

const populatePage = (pages, index, e) => {
  pages[index] = e;
};

const handleRemovePage = (pages, index, setPages) => {
  const temp = [...pages];
  temp.splice(index, 1);
  setPages(temp);
};

const Pages = ({
  pages, setPages,
}) => (
  <>
    <Form inline className="pad-element-bottom">
      <Form.Label column sm="2">
        Pages
      </Form.Label>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={() => setPages([])}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => handleRemovePage(pages, pages.length - 1, setPages)}>
          Remove
        </Button>
        <Button variant="secondary" onClick={() => setPages([...pages, ''])}>
          Add
        </Button>
      </ButtonGroup>
    </Form>
    {
      pages.map((val, idx) => (
        <div className="container pad-element-bottom" key={uniqid()}>
          <Form>
            <Form.Row>
              <Form.Label column lg={2} className="center-element">
                Page
              </Form.Label>
              <Col>
                <Form.Control type="text" val={pages[idx].first} onChange={(e) => populatePage(pages, idx, e.target.value)} />
              </Col>
              {/* <Button variant="secondary" onClick={() => handleRemoveAuthor(authors, idx, setAuthors, generateCitation)}>Remove</Button> */}
            </Form.Row>
          </Form>
        </div>
      ))
      }
  </>
);

Pages.defaultProps = {
  pages: [],
  setPages: null,
};

Pages.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.string,
  ),
  setPages: PropTypes.func,
};

export default Pages;
