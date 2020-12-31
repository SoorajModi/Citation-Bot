import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/citation.css';

function CMOSBook() {
  return (
    <div className="container">
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control as="textarea" rows={1} />
          <Form.Text className="text-muted">
            Required.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Publisher</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="placeOfPublication">
          <Form.Label>Place of Publication</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="yearOfPublication">
          <Form.Label>Year of Publication</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <hr />
        <Form.Group controlId="Generate Citation">
          <Form.Control type="text" placeholder="" readOnly />
        </Form.Group>
      </Form>
    </div>
  );
}

export default CMOSBook;
