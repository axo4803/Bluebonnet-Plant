import React from 'react';

const SucculentPlant = [
	{
	    image:"https://gardin-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2019/01/shop-06-1.jpg",
		name: "Succulent",
		SpringInsights: "Windy, Cover up plant",
		SummerInsights: "Very Dry, water twice per week",
		FallInsights: "Cooler temperature, water once a week",
		WinterInsights:"Very cold, put coverings over the plant"
	}
];

const LantanaPlant = [
	{
		image:"https://treemart.org/wp-content/uploads/2023/03/Lantana.webp",
		name: "Lantana",
		SpringInsights: "Good weather, Water once a week",
		SummerInsights: "Drier weather conditions, water one once more per week",
		FallInsights: "Cooler temperature, water once per week",
		WinterInsights:"Very cold, put coverings over the plant"
	}
];

const PlantItem = ({ plant }) => {
  return (
    <div className="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.Description}</p>
    </div>
  );
}




export  {LantanaPlant, PlantItem, SucculentPlant};