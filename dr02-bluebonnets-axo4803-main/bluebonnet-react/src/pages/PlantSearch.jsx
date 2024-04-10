import React, { useState } from 'react';
import '../App.css';
import plantDatabase from '../Components/plantDatabase';

function PlantSearch({ setScreen, changePlant, addablePlant}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlants = plantDatabase.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle plant click event
  const handlePlantClick = (plant) => {
    // Navigate to the plant profile screen
    addablePlant("Addable");
    changePlant(plant);
    setScreen("plant-profile");
  };

  return (
    <div className="plant-search">
      <div>
        <button onClick={() => setScreen("dashboard")}>&#8592;</button>
        <h1 style={{ textAlign: 'center' }}> Plant Search </h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">&#128269;</button>
        <br></br>
      </div>

      <div className="Searchplant-grid">
        {filteredPlants.map((plant, index) => (
          <div key={index} className="Searchplant-item" onClick={() => handlePlantClick(plant)}>
            {/* Make the entire item clickable */}
            <img
              src={plant.image}
              alt={plant.name}
              className="Searchplant-image"
              onClick={handlePlantClick} // Ensure clicking the image triggers the same action
            />
            <h2 onClick={handlePlantClick}>{plant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PlantSearch };
