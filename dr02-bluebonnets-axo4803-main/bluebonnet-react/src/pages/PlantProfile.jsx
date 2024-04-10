import React, { useState, useEffect } from 'react';
import Forum from '../Components/CommunityForum';
import { cilantroForum } from '../AppConfig';

function PlantProfile({ setScreen, plant, forum, addable, onAddPlant }) {
  console.log("Received forum prop:", forum);
  const handleAddPlant = () => {
    // Call the onAddPlant function with the current plant
    onAddPlant(plant);
  };
  const [chatMessages, setChatMessages] = useState(forum.chat);

  useEffect(() => {
    // Reset chat messages when the forum prop changes
    setChatMessages(forum.chat);
  }, [forum]);
  

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() !== '') {
      const updatedChat = [...chatMessages, { name: 'Alex', message: newMessage }];
      setChatMessages(updatedChat);
      // Also update the forum prop with the updated chat messages
      forum.chat = updatedChat;
    }
  };
  
  const renderWarningSymbol = () => {
    switch (plant.Warnings) {
      case "heat":
        return (
          <div>
            <p>🔥 Cover this plant 🔥</p>
            <p> Temperature is high, cover to prevent heat stress</p>
          </div>
        );
      case "wind":
        return (
          <div>
            <p>💨 Cover with protective covering💨</p>
            <p> Prevent bending of plant</p>
          </div>
        );
      case "water":
        return ( 
          <div>
            <p>🌧️Beware of Rain🌧️</p>
            <p>Watch for excessive rainwater</p>
          </div>
        ); 
      case "frost":
        return (
          <div>
            <p>❄️Cover this plant❄️</p>
            <p>Temperature is too cold</p>
          </div>
        ); 
      default:
        return ""; // Empty string if no warning
    }
  };

  return (
    <div className="plant-profile page">
      {
        addable === "Addable" && (
        <>
          <button onClick={() => setScreen("dashboard")} style={{ fontSize: '10px', padding: '10px 10px' }}> &#8592; </button>
          <div style={{ textAlign: 'center' }}>
            <img src={plant.image} alt="Not loading" style={{ width: '150px', display: 'block', margin: '0 auto' }} />
            <h2 style={{ textAlign: 'center' }}>{plant.name}</h2>
          </div>
          <div className="info-box-container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="info-box">
              <span role="img" aria-label="sun">☀️</span>
              <p>{plant.Sunlight}</p>
            </div>
            <div className="info-box" style={{ marginLeft: 'auto' }}>
              <span role="img" aria-label="water">💧</span>
              <p>{plant.Water}</p>
            </div>
          </div>
          <div>
            <p><strong>Description:</strong></p>
            <p>{plant.Description}</p>
          </div>
          <div>
            <p><strong>People near {cilantroForum.location} are saying:</strong></p>
            {
               cilantroForum.chat.map((conversation, index) => (
              <p key={index}>
                <strong>{conversation.name} </strong> : {conversation.message}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={() => { handleAddPlant(); setScreen("dashboard"); }} style={{ fontSize: '20px', padding: '15px 30px', width: '400px', backgroundColor: '#0E3C0A', color: 'white' }}>ADD</button>

          </div>
        </>
      )
      }

      {
      addable === "NonAddable" && (
        <>
          <button onClick={() => setScreen("dashboard")} style={{ fontSize: '10px', padding: '10px 10px' }}> &#8592; </button>
          <div style={{ textAlign: 'center' }}>
            <img src={plant.image} alt="Not loading" style={{ width: '150px', display: 'block', margin: '0 auto' }} />
            <h2 style={{ textAlign: 'center' }}>{plant.name}</h2>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <div className="warning-box">{renderWarningSymbol()}</div>
            </div>
          </div>
          <div>
            <p><strong>Description:</strong></p>
            <p>{plant.Description}</p>
          </div>
          <Forum forum={forum} chat={chatMessages} onSendMessage={handleSendMessage} />
         

        </> 
      )}
    </div>
  );
}

export { PlantProfile };