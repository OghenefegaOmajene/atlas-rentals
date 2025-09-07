import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "./MapWithListings.css";

const properties = [
  { id: 1, lat: 37.7749, lng: -122.4194, price: "$4,500", img: "https://picsum.photos/400/300?1", size: "83 M²", beds: 3, baths: 1 },
  { id: 2, lat: 37.7849, lng: -122.4094, price: "$4,600", img: "https://picsum.photos/400/300?2", size: "88 M²", beds: 3, baths: 1 },
  { id: 3, lat: 37.7649, lng: -122.4294, price: "$5,250", img: "https://picsum.photos/400/300?3", size: "76 M²", beds: 2, baths: 1 },
  { id: 4, lat: 37.7549, lng: -122.4394, price: "$4,750", img: "https://picsum.photos/400/300?4", size: "80 M²", beds: 3, baths: 2 },
];

const MapWithListings = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/dark/style.json?key=YOUR_MAPTILER_API_KEY`,
      center: [-122.4194, 37.7749],
      zoom: 11,
    });

    properties.forEach((prop) => {
      const el = document.createElement("div");
      el.className = "price-marker";
      el.innerText = prop.price;
      new maplibregl.Marker(el).setLngLat([prop.lng, prop.lat]).addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="map-layout">
      {/* Map */}
      <div ref={mapContainer} className="map-container" />

      {/* Listings */}
      <div className="listings">
        <div className="listings-header">
          <span>Showing {properties.length} out of 1,924</span>
        </div>
        <div className="listings-grid">
          {properties.map((prop) => (
            <div className="listing-card" key={prop.id}>
              <img src={prop.img} alt="home" />
              <div className="info">
                <h3>{prop.price}/month</h3>
                <p>{prop.size} · {prop.beds} Beds · {prop.baths} Bath</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapWithListings;
