
import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function MapContainer(props) {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div>

      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 13.042524, lng: 80.175036 }}
      >
        <Marker position={{ lat: 13.042524, lng: 80.175036 }} />
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDHMyQqi_vMsLvBj8Ue3mgxz_L2bWwBsjg",
})(MapContainer);
