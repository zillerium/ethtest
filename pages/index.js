// pages/index.js
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import UserDetailsInput from '../components/UserDetailsInput';

function Home() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Initialize additional details as needed
  });

  return (
    <Container className="bg-black text-light">
      <Card bg="black" text="light">
        <Card.Header>
          <h1>User Details App</h1>
        </Card.Header>
        <Card.Body>
          <UserDetailsInput setUserDetails={setUserDetails} />
          <div>
            <h2>User Details</h2>
            <p>Username: {userDetails.username}</p>
            {/* Display additional user details here */}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;

