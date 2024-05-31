import React from "react";
import Nav from "./components/Nav";
import map from "./images/USA_MAP.png"

export default function Page() {
  return (
    <div>

      <Nav />
      <img id="usa-map" src={map} alt="USA Map" />
      
    </div>
  );
}
