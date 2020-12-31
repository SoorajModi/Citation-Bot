import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/citation.css';

function CMOSBook() {
  // State variable for number of authors
  const emptyAuthor = { first: '', last: '' };
  const [authors, setAuthors] = useState([{ ...emptyAuthor }]);
  const addAuthor = () => {
    setAuthors([...authors, { ...emptyAuthor }]);
  };
  const removeAuthor = () => {
    setAuthors([authors.pop()]);
  };

  return (
    <div className="container foo">
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control as="textarea" rows={1} className="form-text-area" />
          <Form.Text className="text-muted">Required.</Form.Text>
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Publisher</Form.Label>
          <Form.Control as="textarea" rows={1} className="form-text-area" />
          <Form.Text className="text-muted">Optional.</Form.Text>
        </Form.Group>
        <Form.Group controlId="placeOfPublication">
          <Form.Label>Place of Publication</Form.Label>
          <Form.Control as="textarea" rows={1} className="form-text-area" />
          <Form.Text className="text-muted">Optional.</Form.Text>
        </Form.Group>
        <Form.Group controlId="yearOfPublication">
          <Form.Label>Year of Publication</Form.Label>
          <Form.Control as="textarea" rows={1} className="form-text-area" />
          <Form.Text className="text-muted">Optional.</Form.Text>
        </Form.Group>
        <Form.Group controlId="pages">
          <Form.Label>Pages</Form.Label>
          <Form.Control as="textarea" rows={1} className="form-text-area" />
          <Form.Text className="text-muted">Optional.</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={addAuthor}>
          Add Author
        </Button>
        <Button variant="primary" onClick={removeAuthor}>
          Reset Authors
        </Button>
        {
          authors.map((val, idx) => {
            const firstId = `first-${idx}`;
            const lastId = `last-${idx}`;

            return (
              <div className="container" key={firstId + lastId}>
                <Form.Group controlId={firstId}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control as="textarea" rows={1} className="form-text-area" />
                </Form.Group>
                <Form.Group controlId={lastId}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control as="textarea" rows={1} className="form-text-area" />
                </Form.Group>
              </div>
            );
          })
        }

        <Button variant="primary" type="submit" className="center-block">
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
