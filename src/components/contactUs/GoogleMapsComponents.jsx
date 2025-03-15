import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "250px",
// };

const GoogleMapsComponent = ({ center }) => {
  return (
    // <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
    //     <Marker position={center} /> {/* Marker at the center */}
    //   </GoogleMap>
    // </LoadScript>
    <iframe
      src={center}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
      className="hover:scale-[110%] transition-all duration-300 ease-linear"
    ></iframe>
  );
};

export default GoogleMapsComponent;
