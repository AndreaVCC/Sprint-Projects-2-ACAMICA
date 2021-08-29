import React, { useState } from "react";

/*css*/
import "./style.css";

/*data*/
import hotelsData from "./data";

/* components */
import Header from "./components/Header";
import Filter from "./components/Filter";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  //ESTADO INICIAL FILTROS
  const filDef = {
    availabilityFrom: "",
    availabilityTo: "",
    country: "pais",
    price: "precio",
    rooms: "tamaño"
  };

  let [filtrados, setFiltrados] = useState(filDef);

  //TIEMPO
  const tiempo = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-CL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    });
  };

  //FORMATEO FILTROS
  const reset = () => {
    setFiltrados(filDef);
  };

  //EVENTOS SELECT
  let handleSelect = (event) => {
    return setFiltrados({
      ...filtrados,
      [event.target.name]: event.target.value
    });
  };

  //FILTRADOS
  let hotelesFiltrados = hotelsData.filter(function (hotel) {
      if (filtrados.country === "pais") {
        return true;
      } else return hotel.country.toLowerCase() === filtrados.country.toLowerCase();
    })
    .filter(function (hotel) {
      if (filtrados.rooms === "tamaño") {
        return true;
      } else {
        if (filtrados.rooms === "pequeño") {
          return hotel.rooms <= 10;
        } else if (filtrados.rooms === "mediano") {
          return hotel.rooms > 10 && hotel.rooms < 20;
        } else {
          return hotel.rooms >= 20;
        }
      }
    })
    .filter(function (hotel) {
      if (filtrados.price === "precio") {
        return true;
      } else {
        return hotel.price === filtrados.price.length;
      }
    })
    .filter(function (hotel) {
      if (
        filtrados.availabilityFrom === "" ||
        filtrados.availabilityTo === ""
      ) {
        return true;
      } else {
        return (
          new Date(filtrados.availabilityFrom + "T00:00:00").valueOf() >=
            hotel.availabilityFrom &&
          new Date(filtrados.availabilityTo + "T00:00:00").valueOf() <=
            hotel.availabilityTo
        );
      }
    });

  return (
    <div>
      <Header mostrar={filtrados} fecha={tiempo} />
      <Filter reset={reset} filtros={filtrados} evento={handleSelect} />

      {hotelesFiltrados.length === 0 ? (
        <Error />
      ) : (
        <Content dataHotel={hotelesFiltrados} tiempo={tiempo} />
      )}

      <Footer />
    </div>
  );
}

export default App;
