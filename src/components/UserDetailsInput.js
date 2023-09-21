import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserDetailsInput({ setUserDetails }) {
  const [details, setDetails] = useState({
    username: '',
    // Add more detail fields here if needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserDetails(details);
  };

  return (
    <div className="bg-black text-white p-4 rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={details.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
        </Form.Group>
        {/* Add more Form.Group components for additional details */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserDetailsInput;

