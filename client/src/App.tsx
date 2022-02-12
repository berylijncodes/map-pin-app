import React from 'react';
import GlobalStyle from './styles/global';
// import Map from 'react-map-gl';
import Maps from './components/Maps';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
        initialViewState={{
          longitude: 15,
          latitude: 60,
          zoom: 4,
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      /> */}
      <Maps />
    </div>
  );
}

export default App;
