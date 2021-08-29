// import React, { useState } from "react";
import "./Filter.css";
import "./comunstyle.css";

function Filter(props) {
  // console.log(props);

  return (
    <div className="nav color3">
      <div className="contenerdor-select">
        <label>Desde:</label>
        <input
          type="date"
          name="availabilityFrom"
          id="desde"
          onChange={props.evento}
          className="form-control"
          value={props.filtros.availabilityFrom}
        />
      </div>

      <div className="contenerdor-select">
        <label>Hasta:</label>
        <input
          type="date"
          name="availabilityTo"
          id="hasta"
          onChange={props.evento}
          className="form-control"
          value={props.filtros.availabilityTo}
        />
      </div>

      <div className="contenerdor-select">
        <label>País:</label>
        <select
          name="country"
          value={props.filtros.country}
          onChange={props.evento}
          className="form-control"
        >
          <option value="pais">Todos los países</option>
          <option value="chile">Chile</option>
          <option value="brasil">Brasil</option>
          <option value="argentina">Argentina</option>
          <option value="uruguay">Uruguay</option>
        </select>
      </div>

      <div className="contenerdor-select">
        <label>Precio:</label>
        <select
          name="price"
          value={props.filtros.price}
          onChange={props.evento}
          id="precio"
          className="form-control"
        >
          <option value="precio">Cualquier precio</option>
          <option value="$">Económico</option>
          <option value="$$">Confort</option>
          <option value="$$$">Lujos</option>
          <option value="$$$$">Magnífico</option>
        </select>
      </div>

      <div className="contenerdor-select">
        <label>Tamaño:</label>
        <select
          name="rooms"
          value={props.filtros.rooms}
          onChange={props.evento}
          id="tamaño"
          className="form-control"
        >
          <option value="tamaño">Cualquier tamaño</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>

      <div className="contenerdor-select end">
        <button className="btn color2" onClick={props.reset}>
          LIMPIAR
        </button>
      </div>
    </div>
  );
}

export default Filter;
