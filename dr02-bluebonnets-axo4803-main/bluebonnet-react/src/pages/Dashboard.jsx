import React from 'react'; // Don't forget to import React
import plantList from '../Components/plantList';
import '../App.css'; 
import plantForumList from '../Components/forumData';
import { dashboardImg1,dashboardImg2 } from '../Components/imageData';

function Dashboard({ setScreen, changePlant, addablePlant, addedPlants, forumChange }) {
 
  const handlePlantClick = (plant) => {
    const filteredForum = plantForumList.find(item => item.name === plant.name)?.forum;

    addablePlant("NonAddable");
    changePlant(plant);
    setScreen("plant-profile");
    forumChange(filteredForum);
  };

  return (
    <div className="dashboard page">
      <img src= {dashboardImg1} alt='Not found' style={{ width: '100px', float: 'right' }} />
      <img src= {dashboardImg2} alt='Not found' style={{ width: '100px', float: 'left' }} />
      <br /><br />
      <button className="addPlantButton" onClick={() => setScreen("plant-search")}> Add Plant</button>
      <br /><br />

      <h2 style={{ whiteSpace: 'pre-line' }}> Welcome, Alex </h2>

      <div className="plant-list">
        {/* Assuming plantList is passed as a prop */}
        {plantList.map((plant, index) => (
          <div key={index} className="plant-item">
            <button className="plant-button" onClick={() => handlePlantClick(plant)}>
              <div className="plant-image-container">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                {plant.Warnings === "heat" && <span className="warning-icon" role="img" aria-label="warning">🔥</span>}
                {plant.Warnings === "wind" && <span className="warning-icon" role="img" aria-label="warning">💨</span>}
                {plant.Warnings === "water" && <span className="warning-icon" role="img" aria-label="warning">🌧️</span>}
                {plant.Warnings === "frost" && <span className="warning-icon" role="img" aria-label="warning">❄️</span>}
              </div>
            </button>
            <div className="plant-info">
              <h2>{plant.name}</h2>
              <p><span role="img" aria-label="sun"> ☀️</span> {plant.Sunlight}</p>
              <p><span role="img" aria-label="water">💧</span> {plant.Water}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="plant-list">
  {/* Mapping over addedPlants array */}
  {
    addedPlants.map((plant, index) => (
    
    <div key={index} className="plant-item">
       <button className="plant-button" onClick={() => handlePlantClick(plant)}>
        <div className="plant-image-container">
          {/* Accessing properties of each plant object */}
          <img src={plant.image} alt={plant.name} className="plant-image" />
          {/* Assuming each plant object has Warnings property */}
          {plant.Warnings === "heat" && <span className="warning-icon" role="img" aria-label="warning">🔥</span>}
          {plant.Warnings === "wind" && <span className="warning-icon" role="img" aria-label="warning">💨</span>}
          {plant.Warnings === "water" && <span className="warning-icon" role="img" aria-label="warning">🌧️</span>}
          {plant.Warnings === "frost" && <span className="warning-icon" role="img" aria-label="warning">❄️</span>}
        </div>
      </button>
      <div className="plant-info">
        <h2>{plant.name}</h2>
        <p><span role="img" aria-label="sun">☀️</span> {plant.Sunlight}</p>
        <p><span role="img" aria-label="water">💧</span> {plant.Water}</p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export { Dashboard };
