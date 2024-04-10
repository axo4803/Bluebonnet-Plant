import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// Data
import { cilantroPlantData} from './AppConfig';
import plantForumList from './Components/forumData';
import plantList from './Components/plantList';
// Pages
import { PlantProfile } from './pages/PlantProfile';
import { SeasonInsights } from './pages/SeasonInsights';
import { Dashboard } from './pages/Dashboard';
import { PlantSearch } from './pages/PlantSearch';

function App() {
  const [index, setIndex] = useState(0); // Initial index state
  const [plantProfilePlant, setPlantProfilePlant] = useState(cilantroPlantData);
  const [plantAddable, setPlantAddable] = useState("NonAddable");

  const [addedPlants, setAddedPlants] = useState([]);


const plant = plantList[0]; // Assuming you're accessing the first plant
console.log("Selected plant:", plant.name);
const selectedPlantForum = plantForumList.find(item => item.name === plant.name)?.forum;
console.log("Selected plant forum:", selectedPlantForum);

const [currentForum, setCurrentForum] = useState(plantForumList[0].forum);
const setForum = (newForum) =>
{
  setCurrentForum(newForum);
};



// Pass the selected plant's forum data to the PlantProfile component


  const addPlantToDashboard = (plant) => {
    setAddedPlants([...addedPlants, plant]);
  };
  // Function to set the plant profile plant
  const setPlant = (newPlant) => {
      setPlantProfilePlant(newPlant);
  };
  
  const setAddable = (mode) => {
    setPlantAddable(mode);
  };

  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }
  };

  // Mapping of screen names to indices
  const screenIndices = {
    'season-insights': 0,
    'dashboard': 1,
    'plant-profile': 2,
    'plant-search': 3
  };

  // Function to set screen based on name
  const setScreen = (screenName) => {
    const newIndex = screenIndices[screenName];
    if (newIndex !== undefined) {
      setIndex(newIndex);
    } else {
      console.warn('Unknown screen name:', screenName);
    }
  };


  // EITHER DISPLAYS PLANT SEARCH

  if (index === screenIndices["plant-search"]) {
    return (
      <PlantSearch setScreen={setScreen} changePlant = {setPlant} addablePlant = {setAddable}/>
    );
  }

  // OR ARRANGES OTHER VIEWS ON A SLIDER

  return (
    <SwipeableViews
      containerStyle={styles.slideContainer}
      enableMouseEvents
      index={index} // Control the current index
      onChangeIndex={setIndex} // Update index state on change
    >
      <SeasonInsights setScreen={setScreen}/>
      <Dashboard setScreen={setScreen} changePlant = {setPlant} addablePlant = {setAddable}  addedPlants={addedPlants} forumChange = {setForum} />
      <PlantProfile setScreen={setScreen} plant={plantProfilePlant} forum={currentForum} addable={plantAddable} onAddPlant={addPlantToDashboard} />
    </SwipeableViews>
  );
}

export default App;
