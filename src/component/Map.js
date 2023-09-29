import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({center,zoom}){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
        <LocationMarker lat={defaultProps.center.lat} lng={defaultProps.center.lng}/>
      </GoogleMapReact>
    </div>
  );
}

//AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts