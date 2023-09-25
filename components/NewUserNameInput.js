import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { WalletContext } from '../lib/WalletContext';

function NewUserNameInput() {
  const { newUserName, setNewUserName } = useContext(WalletContext);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewUserName(value);
  };

  return (
    <div className="bg-black text-white p-2 rounded"> {/* Reduce padding */}
      <Form>
        <Form.Group controlId="formNewUsername">
          <Form.Label>New Username</Form.Label>
          <Form.Control
            type="text"
            value={newUserName}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            style={{ maxWidth: '400px' }} // Set a max width for the input
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewUserNameInput;

