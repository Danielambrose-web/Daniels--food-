import React from 'react';

const FreeMap = ({
  lat = 7.440871,
  lng = 3.906844,
  zoom = 15,
  title = "Restaurant Location",
}) => {
  // Free OpenStreetMap embed - zero npm dependencies, fully compatible with React 19 & Vite
  const delta = 0.006;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="free-map-container" style={{ width: '100%', height: '100%', minHeight: '260px', borderRadius: '16px', overflow: 'hidden' }}>
      <iframe
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', width: '100%', height: '100%', minHeight: '260px' }}
        loading="lazy"
        src={osmUrl}
      />
    </div>
  );
};

export default FreeMap;
