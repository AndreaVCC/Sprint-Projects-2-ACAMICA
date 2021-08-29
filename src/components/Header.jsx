// import React, { useState } from "react";
import "./Header.css";
import "./comunstyle.css";

function Header(props) {
  let price;
  switch (props.mostrar.price) {
    case "$":
      price = "precio económico";
      break;
    case "$$":
      price = "precio confort";
      break;
    case "$$$":
      price = "precio de lujos";
      break;
    case "$$$$":
      price = "precio magnífico";
      break;
    default:
      price = "cualquier precio";
      break;
  }

  let pais =
    props.mostrar.country.charAt(0).toUpperCase() +
    props.mostrar.country.slice(1);

  return (
    <div className="header color1">
      <h1>HOTELES</h1>

      <p>
        {props.mostrar.availabilityFrom === "" ||
        props.mostrar.availabilityTo === ""
          ? "En todas las fechas"
          : "Desde " +
            props.fecha(props.mostrar.availabilityFrom) +
            " Hasta " +
            props.fecha(props.mostrar.availabilityTo)}
      </p>

      <p>
        {props.mostrar.country === "pais"
          ? "En todos los países"
          : "En " + pais}
      </p>

      <p>De {price}</p>

      <p>
        {props.mostrar.rooms === "tamaño"
          ? "De cualquier tamaño"
          : "De tamaño " + props.mostrar.rooms}
      </p>
    </div>
  );
}

export default Header;
