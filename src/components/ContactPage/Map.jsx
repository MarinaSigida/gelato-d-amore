import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [43.693661, 7.25169];

const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Gelato D'Amore</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
