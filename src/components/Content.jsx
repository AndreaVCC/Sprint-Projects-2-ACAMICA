// import React, { useState } from "react";
import "./Content.css";
import "./comunstyle.css";

import Hotel from "./Hotel";

function Content(props) {
  // console.log(props);
  return (
    <div className="content">
      {props.dataHotel.map((data) => {
        return (
          <Hotel
            key={data.slug}
            name={data.name}
            photo={data.photo}
            description={data.description}
            availabilityFrom={data.availabilityFrom}
            availabilityTo={data.availabilityTo}
            rooms={data.rooms}
            city={data.city}
            country={data.country}
            price={data.price}
            tiempo={props.tiempo}
          />
        );
      })}
    </div>
  );
}

export default Content;
