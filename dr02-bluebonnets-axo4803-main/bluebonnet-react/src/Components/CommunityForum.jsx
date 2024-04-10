// Forum.jsx

import React, { useState } from 'react';

const Forum = ({ forum, chat, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(newMessage); // Call the parent function to update chat messages
    setNewMessage(''); // Clear the input field
  };

  return (
    <div>
      <p2><strong>What Neighbors in {forum.location} are saying:</strong></p2>
      <ul>
        {chat.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}:</strong> {entry.message}
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Alex says..."
          value={newMessage}
          onChange={handleInputChange}
          style={{ margin: '0 auto', width: '80%', borderRadius: '20px', padding: '10px' }}
        />
        <button onClick={handleSendMessage} style={{ padding: '10px', borderRadius: '20px', marginLeft: '10px' }}>
          <span role="img" aria-label="paper-airplane" >📤</span>
        </button>
      </div>
    </div>
  );
};

export default Forum;
