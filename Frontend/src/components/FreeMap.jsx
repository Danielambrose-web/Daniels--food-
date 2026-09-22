import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// ... (keep the same Leaflet icon-fix code from the previous step here) ...

const SpecificMap = () => {
  // 1. CHANGE THESE COORDINATES TO YOUR SPECIFIC LOCATION [Lat, Lng]
  // Example below is for Times Square, NY
  const myLocation = [40.7588, -73.9851]; 

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer 
        center={myLocation} // Centers the map here initially
        zoom={15}           // Zoom level (higher number = closer view)
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* 2. Place the marker pin at your specific location */}
        <Marker position={myLocation}>
          <Popup>
            <strong>Times Square</strong> <br />
            The crossroads of the world.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SpecificMap;
