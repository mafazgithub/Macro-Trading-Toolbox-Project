// macro_trading_toolbox/src/ui/react_app/src/components/UserInputForm.js
import React, { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: send user input to the Flask backend
    fetch('/api/user_input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        onSubmit();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Add any necessary logic for error handling
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userInput">Enter your data:</label>
        <input
          type="text"
          className="form-control"
          id="userInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UserInputForm;
