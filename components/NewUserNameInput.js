// components/NewUserNameInput.js
import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { WalletContext } from '../pages/WalletContext';

function NewUserNameInput() {
  const { newUserName, setNewUserName } = useContext(WalletContext);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewUserName(value);
  };

  return (
    <div className="bg-black text-white p-4 rounded">
      <Form>
        <Form.Group controlId="formNewUsername">
          <Form.Label>New Username</Form.Label>
          <Form.Control
            type="text"
            value={newUserName}
            onChange={handleInputChange}
            placeholder="Enter your new username"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewUserNameInput;

