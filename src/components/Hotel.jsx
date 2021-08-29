import React from "react";
import "./Hotel.css";
import "./comunstyle.css";

function Hotel(props) {
  let price;
  switch (props.price) {
    case 1:
      price = "Económico";
      break;
    case 2:
      price = "Confort";
      break;
    case 3:
      price = "Lujos";
      break;
    case 4:
      price = "Magnífico";
      break;
    default:
      break;
  }

  return (
    <div className="card">
      <div className="container-img">
        <img src={props.photo} alt={props.nombre} />
      </div>
      <div className="container-title">
        <h3>{props.name}</h3>
      </div>
      <div className="fechadesde color3">
        <p>Desde el {props.tiempo(props.availabilityFrom)}</p>
      </div>
      <div className="color3">
        <p>Hasta el {props.tiempo(props.availabilityTo)} </p>
      </div>
      <div className="card-text">
        <p>{props.description}</p>
      </div>
      <div className="pais color3">
        <p>
          {props.city}, {props.country}
        </p>
      </div>
      <div className="rooms-price">
        <div className="rooms color4">
          <p className="">{props.rooms} habitaciones</p>
        </div>
        <div className="price color4">
          <p>{price}</p>
        </div>
      </div>
      <div className="container-button">
        <button className="btn-reservar color2">RESERVAR</button>
      </div>
    </div>
  );
}

export default Hotel;
