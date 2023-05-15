import { Map } from "leaflet";
import React, { useRef, useState } from "react";
import "./LeafletMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"; 
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";


const LeafletMap = () => {
  const [center, setCenter] = useState({ lat: 23.79382753409999, lng: 90.40540631122356});
  const ZOOM_LEVEL = 14.5;
  const mapRef = useRef();

  return (
        <MapContainer scrollWheelZoom={false} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
            <Marker position={[23.79382753409999, 90.40540631122356]}>
                <Popup>
                  The Bengal Chef's Pantry
                  <br />
                  Level-4, 34, Awal Centre,
                  <br />
                  Banani, Dhaka
                </Popup>
            </Marker>
        </MapContainer>
  );
};

export default LeafletMap;
