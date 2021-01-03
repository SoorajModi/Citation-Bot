import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Pages = ({
  pages, onPageChange, addPage, removePage,
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
      <Button variant="primary" onClick={addPage}>
        Add Page
      </Button>
            &nbsp;&nbsp;&nbsp;
      <Button variant="primary" onClick={removePage}>
        Reset Pages
      </Button>
    </div>
  </div>
);

Pages.defaultProps = {
  pages: [],
  onPageChange: null,
  addPage: null,
  removePage: null,
};

Pages.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.string,
  ),
  onPageChange: PropTypes.func,
  addPage: PropTypes.func,
  removePage: PropTypes.func,
};

export default Pages;
