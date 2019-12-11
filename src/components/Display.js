import React from "react";

const DataCard = props => {
  return (
    <div className="astro-list" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    <img className="astro-list" src={props.imgUrl}/>
      <div className="bottom">
        <p>Date: {props.date}</p>
      </div>
    </div>
  );
};
export default DataCard;
