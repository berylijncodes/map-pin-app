import React from 'react';
import GlobalStyle from './styles/global';
// import Map from 'react-map-gl';
import Maps from './components/Maps';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Maps />
    </div>
  );
}

export default App;
