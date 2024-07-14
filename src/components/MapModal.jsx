import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function MapModal() {
  const position = [38.7142006, -9.2257967]; // Coordenadas

  return (
    <div className="">
      <section>
        <MapContainer
          center={position}
          zoom={16}
          style={{
            height: "510px",
            width: "470px",
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%,-50%)",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </section>
    </div>
  );
}
