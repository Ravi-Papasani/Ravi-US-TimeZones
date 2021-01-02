import React from "react";
import "./styles.css";
import { useState } from "react";
import { allTimeZones } from "./sourcedata";

var usTimeZones = Object.keys(allTimeZones);

export default function App() {
  var [timeZones, setTimeZones] = useState(allTimeZones.PST);

  function onClickTimeZoneHandler(timezone) {
    console.log("clicked on " + timezone);
    var zones = allTimeZones[timezone];
    setTimeZones(zones);
  }

  function getZonesDisplay(displayzones) {
    //var stateName = displayzones.stateName;
    var listToDisplay = (
      <ol>
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{displayzones.stateName}</h3>
          <p>{displayzones.Description}</p>
          <p style={{ fontWeight: "bold" }}>{displayzones.TimeZone}</p>
        </div>
      </ol>
    );
    return listToDisplay;
  }

  return (
    <div className="App">
      <h1>Time Zones in the United States</h1>
      <div>
        From east to west, the United States has nine standard time zones. Out
        of 52 states, 39 are falls under one time-zone. However, 13 states use
        more than one time-zone.
        <ul>
          <ol>Pacific Standard Time (PST)</ol>
          <ol>Mountain Standard Time (MST)</ol>
          <ol>Central Standard Time (CST)</ol>
          <ol>Eastern Standard Time (EST)</ol>
          <ol>Alaskan Standard Time (AKST)</ol>
          <ol>Hawaii-Aleutian Standard Time (HAST)</ol>
          <ol>Chamorro Standard Time (CHST)</ol>
          <ol>Samoa standard time (WST)</ol>
          <ol>Atlantic Standard Time (AST)</ol>
        </ul>
      </div>
      {usTimeZones.map(function (timezone) {
        return (
          <button
            onClick={() => onClickTimeZoneHandler(timezone)}
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem 2rem",
              cursor: "pointer",
              color: "orange"
            }}
            key={timezone}
          >
            {timezone}
          </button>
        );
      })}

      <div>
        <ul>
          {timeZones.map((displayzones) => {
            return getZonesDisplay(displayzones);
          })}
        </ul>
      </div>
    </div>
  );
}
