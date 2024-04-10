import React, { useState } from 'react';
import '../App.css';
import { WeatherForecast } from '../Components/forecastWeather';
import Slider from '../Components/SeasonDragger';
import { SucculentPlant,LantanaPlant } from '../Components/PlantInsights';
import { SeasonInsightsImg1,SeasonInsightsImg2 } from '../Components/imageData';
const rainChance = Math.floor(Math.random() * 100) + 1;

function SeasonInsights({ setScreen }) {
  
  const [sliderValue, setSliderValue] = useState(0); // State to hold the slider value

  // Callback function to handle slider value changes
  const handleSliderChange = (value) => {
    setSliderValue(value); // Update the slider value state
  };
  const succulentInsights = SucculentPlant[0];
  const lantanaInsights = LantanaPlant[0];
  let sliderContent;
  switch (sliderValue) {
    case 0:
      sliderContent = "#E0E1BC";
      break;
    case 1:
      sliderContent = "#E9EA9E";
      break;
    case 2:
      sliderContent = "#E1CEBC";
      break;
    case 3:
      sliderContent = "#BCD8E1";
      break;
    default:
      sliderContent = "#E0E1BC";
      break;
  }

  return (
    
    <div className="season-insights page" style={{ background: sliderContent }}>
   <button onClick={() => setScreen("dashboard")} style={{ fontSize: '10px', padding: '10px 10px' }}> &#8592; </button>


      <h1> Season Insights </h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {rainChance <= 50 ? (
          <img src={SeasonInsightsImg1} alt="Cannot load" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
        ) : (
          <img src={SeasonInsightsImg2} alt="Cannot load" style={{ width: '80px', height: 'auto', marginRight: '10px' }} />
        )}
        <div style={{ textAlign: 'left' }}>
          <p style={{ margin: '0' }}>Chance of rain: {rainChance}% </p>
          <p style={{ margin: '0' }}>Wind: 8 mph </p>
          <p style={{ margin: '0' }}>Humidity: 5 mph </p>
        </div>
      </div>
      <p>
        <WeatherForecast />
      </p>

      <h1 style={{ textAlign: 'center' }}> Seasonal Insights</h1>
      <br />
      <br />

      <div className="slider-container">
        <Slider handleSliderChange={handleSliderChange} />
      </div>
      <br></br>
      <div className="insightPlantFormatting">
  <br />
  <img src={succulentInsights.image} alt={succulentInsights.name} style={{ width: '100px' }} className="plantImage" />
  <div>
  <p style={{ fontWeight: 'bold' }}>{succulentInsights.name}</p>


    {sliderValue === 0 && <p>{succulentInsights.SpringInsights}</p>}
    {sliderValue === 1 && <p>{succulentInsights.SummerInsights}</p>}
    {sliderValue === 2 && <p>{succulentInsights.FallInsights}</p>}
    {sliderValue === 3 && <p>{succulentInsights.WinterInsights}</p>}

  </div>
</div>

<div className="insightPlantFormatting">
  <br />
  <img src={lantanaInsights.image} alt={lantanaInsights.name} style={{ width: '100px' }} className="plantImage" />
  <div>
  <p style={{ fontWeight: 'bold' }}>{lantanaInsights.name}</p>
    {sliderValue === 0 && <p>{lantanaInsights.SpringInsights}</p>}
    {sliderValue === 1 && <p>{lantanaInsights.SummerInsights}</p>}
    {sliderValue === 2 && <p>{lantanaInsights.FallInsights}</p>}
    {sliderValue === 3 && <p>{lantanaInsights.WinterInsights}</p>}
  </div>
</div>
</div>
  );
}

export { SeasonInsights };
