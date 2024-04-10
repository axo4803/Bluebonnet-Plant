
const weatherForecast =
[
	{ 
		Time: "3 PM",
		Temperature : "92",
		Wind: "8 mph NW",
		Humidity:"5%"
	},

	{
		Time: "4 PM",
		Temperature : "93",
		Wind: "8 mph NW",
		Humidity:"5%"
	},

	{
		Time: "5 PM",
		Temperature : "93",
		Wind: "8 mph NW",
		Humidity:"5%"
	}
];

function WeatherForecast() {
	return (
	  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
		{weatherForecast.map((item, index) => (
		  <div key={index} style={{ flex: '1', marginRight: '20px' }}>
			

			<p>{item.Time}</p>
			
			{index === 0 ? (
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cartoon_cloud.svg/1024px-Cartoon_cloud.svg.png" alt="Cannot load" style={{ width: '50px',height: 'auto', marginRight: '10px' }} />
			
          ) : (
			<img src="https://cdn3.iconfinder.com/data/icons/weather-forecast-48/231/sunny-512.png" alt="Cannot load" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
          )}
		  	<br></br>
			<h1>{item.Temperature}°F</h1>
			<p>Wind: {item.Wind}</p>
			<p>Humidity: {item.Humidity}</p>
		  </div>
		))}
	  </div>
	);
  }

  export {WeatherForecast,weatherForecast}