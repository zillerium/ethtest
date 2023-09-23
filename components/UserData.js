// ... other imports

import UserDetails from './UserDetails'; // Import the UserDetails component

function Home() {
  // ... existing code

  return (
    <WagmiConfig config={config}>
      <Container className="bg-black text-light">
        <Card bg="black" text="light">
          <Card.Header>
            <h1>User Details App</h1>
            <WalletControls />
          </Card.Header>
          <Card.Body>
            <UserDetails userDetails={userDetails} /> {/* Use the UserDetails component */}
          </Card.Body>
        </Card>
      </Container>
    </WagmiConfig>
  );
}

// ... the rest of your code

