import React from 'react';
import GlobalStyle from './styles/global';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      console.log(mapboxAccessToken);
    </div>
  );
}

export default App;
