import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const emptyPage = { page: '' };

const Pages = ({
  pages, setPages, onPageChange,
}) => (
  <div>
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
                            <Form.Control type="text" value={pages[idx].toString} onChange={(e) => onPageChange(idx, e.target.value)} />
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
  </div>
);

Pages.defaultProps = {
  pages: [],
  setPages: null,
  onPageChange: null,
};

Pages.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.string,
  ),
  setPages: PropTypes.func,
  onPageChange: PropTypes.func,
};

export default Pages;
