import React from "react";
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
    function ChangeView({ center, zoom }) {
      const map = useMap();
      map.setView(center, zoom);
      return null;
    }
  
    return (
      <LeafletMap
        className="map__one"
        center={center}
        zoom={zoom}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    );
  }
  
  export default Map;
