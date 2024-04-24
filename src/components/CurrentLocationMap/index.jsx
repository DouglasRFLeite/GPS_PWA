import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { latLng } from "leaflet";
import React from "react";

export default function CurrentLocationMap({ position }) {

  return (
    <APIProvider apiKey="AIzaSyBte2dv0bv1t84KmLnVnkrI3EDqlUYmM1M">
        <div style={{height: '80vh'}}>
            {/* <Map zoom={9} center={position}></Map> */}
            <h3>Lat: {position.lat}</h3>
            <h3>Long:{position.lng}</h3>
        </div>
    </APIProvider>
  );
}
