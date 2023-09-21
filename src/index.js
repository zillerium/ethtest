import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserDetailsInput from './components/UserDetailsInput';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './styles.css'; // Import your custom CSS file

// ... rest of your code


function App() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    // Initialize additional details as needed
  });

  return (
    <Container className="bg-black text-light"> {/* Add bg-dark and text-light classes */}
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

