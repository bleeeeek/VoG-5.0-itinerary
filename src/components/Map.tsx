import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { TimelineEvent } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  events: TimelineEvent[];
  selectedEvent: TimelineEvent | null;
}

export const Map: React.FC<MapProps> = ({ events, selectedEvent }) => {
  const klCenter: [number, number] = [3.1390, 101.6869]; // KL city center coordinates
  
  // Define bounds for KL and surrounding area (roughly covers KL, Putrajaya, and nearby areas)
  const maxBounds: L.LatLngBoundsExpression = [
    [2.9, 101.4], // Southwest corner
    [3.3, 101.9]  // Northeast corner
  ];

  return (
    <div className="relative z-0 h-full rounded-lg overflow-hidden">
      <MapContainer
        center={klCenter}
        zoom={11}
        className="h-full w-full"
        minZoom={10} // Restrict zoom out
        maxZoom={16} // Restrict zoom in
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0} // Make the bounds "sticky"
        style={{ zIndex: 0 }}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => (
          <React.Fragment key={event.id}>
            <Marker
              position={event.location.coordinates}
              icon={L.icon({
                iconUrl: selectedEvent?.id === event.id
                  ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'
                  : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{event.location.name}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-sm font-medium text-blue-600">{event.time} - {event.groupName}</p>
                </div>
              </Popup>
            </Marker>
            
            {/* Highlight circle for selected event */}
            {selectedEvent?.id === event.id && (
              <Circle
                center={event.location.coordinates}
                pathOptions={{
                  color: '#3b82f6',
                  fillColor: '#3b82f6',
                  fillOpacity: 0.2,
                }}
                radius={500} // 500 meters radius
              />
            )}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};