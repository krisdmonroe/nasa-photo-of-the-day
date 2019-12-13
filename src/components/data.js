import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./Display";
import "../App.css"

export default function DataList(){
  const [astro, setData] = useState([]);

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=sRRmpSjSHeBRANnM8sAh7Ul8S0hUlQ8ShncjegGG`)
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log("the data was not return", error);
    });
}, []);


  return (
    <div>
        <DataCard
          key={astro.id}
          imgUrl={astro.url}
          title={astro.title}
          explanation={astro.explanation}
          date={astro.date}
        />
        </div>
  );
}

