import React from 'react';
import UserDetailsInput from '../components/UserDetailsInput';

function UserDetailsForm({ setUserDetails }) {
  return (
    <>
      <h2>User Details Form</h2>
      <UserDetailsInput setUserDetails={setUserDetails} />
    </>
  );
}

export default UserDetailsForm;

