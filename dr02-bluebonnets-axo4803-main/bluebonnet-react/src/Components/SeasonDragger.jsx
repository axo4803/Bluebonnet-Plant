import React, { useState } from 'react';
import '../App.css';

function Slider({ handleSliderChange }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [isSpring, setSpring] = useState(true);
  const [isSummer, setSummer] = useState(false);
  const [isFall, setFall] = useState(false);
  const [isWinter, setWinter] = useState(false);

  const internalHandleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);

    // Check the slider position and set the corresponding option to true
    switch (value) {
      case 0:
        setSpring(true);
        setSummer(false);
        setFall(false);
        setWinter(false);
        break;
      case 1:
        setSpring(false);
        setSummer(true);
        setFall(false);
        setWinter(false);
        break;
      case 2:
        setSpring(false);
        setSummer(false);
        setFall(true);
        setWinter(false);
        break;
      case 3:
        setSpring(false);
        setSummer(false);
        setFall(false);
        setWinter(true);
        break;
      default:
        break;
    }

    // Call the handleSliderChange callback with the new value
    handleSliderChange(value);
  };

  return (
    <div className='slider-container'>
      <div className="season-names">
        <span className={sliderValue === 0 ? 'bold' : ''}>Spring </span>
        <span className={sliderValue === 1 ? 'bold' : ''}>  Summer   </span>
        <span className={sliderValue === 2 ? 'bold' : ''}>  Fall   </span>
        <span className={sliderValue === 3 ? 'bold' : ''}>  Winter   </span>
      </div>

      <input
        type="range"
        min={0}
        max={3}
        value={sliderValue}
        onChange={internalHandleSliderChange}
        style={{ width: '280px', marginTop: '10px' }} // Add margin top for separation
      />

      {
      isSpring && 
        <img src="https://png.pngtree.com/png-clipart/20221115/original/pngtree-leaves-spring-green-decorative-border-picture-image_7252989.png" alt="Spring" className="season-image" />
      }

      {
      isSummer &&
        <img src="https://blog.davey.com/media/jyahavhq/spring-stock-banner.jpg?width=1200&height=630&rnd=133052167489330000&format=webp&quality=80" alt="Summer" className="season-image" />
      }

      {
      isFall &&
        <img src="https://www.eekwi.org/sites/default/files/2021-09/red-oak-leaves-Beth-Mittermaier.jpg" alt="Fall" className="season-image" />
      }

      {
      isWinter &&
        <img src="https://images.unsplash.com/photo-1607569911436-75895e8b2a96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwbGVhdmVzfGVufDB8fDB8fHww" alt="Winter" className="season-image" />
      }
    </div>
  );
}

export default Slider;
