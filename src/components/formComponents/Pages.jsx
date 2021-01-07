import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const uniqid = require('uniqid');

const populatePage = (page, newPage, generateCitation) => {
  page.page = newPage;
  generateCitation();
};

const handleRemovePage = (pages, index, setPages) => {
  const temp = [...pages];
  temp.splice(index, 1);
  setPages(temp);
};

const handleResetPages = (setPages, generateCitation) => {
  setPages([]);
  generateCitation();
};

const handleAddPage = (pages, setPages) => {
  setPages([...pages, { page: '', uniqueID: uniqid() }]);
};

const Pages = ({
  pages, setPages, generateCitation,
}) => (
  <>
    <Form inline className="pad-element-bottom">
      <Form.Label column sm="2">
        Pages
      </Form.Label>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={() => handleResetPages(setPages, generateCitation)}>
          Reset
        </Button>
        <Button variant="secondary" onClick={() => handleRemovePage(pages, pages.length - 1, setPages)}>
          Remove
        </Button>
        <Button variant="secondary" onClick={() => handleAddPage(pages, setPages)}>
          Add
        </Button>
      </ButtonGroup>
    </Form>
    {
      pages.map((val, idx) => (
        <div className="container pad-element-bottom" key={val.uniqueID}>
          <Form>
            <Form.Row>
              <Form.Label column lg={2} className="center-element">
                Page
              </Form.Label>
              <Col>
                <Form.Control type="text" val={pages[idx].page} onChange={(e) => populatePage(pages[idx], e.target.value, generateCitation)} />
              </Col>
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
  generateCitation: null,
};

Pages.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      page: PropTypes.string,
      uniqueID: PropTypes.string,
    }),
  ),
  setPages: PropTypes.func,
  generateCitation: PropTypes.func,
};

export default Pages;
