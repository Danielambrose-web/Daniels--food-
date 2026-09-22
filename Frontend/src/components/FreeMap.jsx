import React from 'react';

const FreeMap = ({
  lat = 7.440871,
  lng = 3.906844,
  zoom = 15,
  title = "Restaurant Location",
}) => {
  // Production-grade Google Maps Embed - loads reliably on all deployed domains (Vercel, Netlify, etc.)
  // Zero API key required, zero npm dependencies, 100% compatible with React 19 & modern browsers
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;

  return (
    <div className="free-map-container" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <iframe
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      />
    </div>
  );
};

export default FreeMap;
