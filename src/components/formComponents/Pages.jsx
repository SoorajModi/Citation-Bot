import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const emptyPage = { page: '' };

const populatePage = (pages, index, e) => {
  pages[index].page = e;
};

const Pages = ({
  pages, setPages,
}) => (
  <>
    <Form.Label column sm="12">
      Pages
    </Form.Label>
    {
            pages.map((val, idx) => {
              const pageId = `page-${idx}`;

              return (
                <div className="container">
                  <Card>
                    <Form>
                      <div className="container form-start">

                        <Form.Group as={Row} controlId={pageId}>
                          <Form.Label column sm="2">
                            Page
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control type="text" value={pages[idx].page} onChange={(e) => populatePage(pages, idx, e.target.value)} />
                          </Col>
                        </Form.Group>
                      </div>
                    </Form>
                  </Card>
                </div>
              );
            })
        }
    <div className="text-center custom-btn">
      <Button variant="primary" onClick={() => setPages([...pages, { ...emptyPage }])}>
        Add Page
      </Button>
            &nbsp;&nbsp;&nbsp;
      <Button variant="primary" onClick={() => setPages([])}>
        Reset Pages
      </Button>
    </div>
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
