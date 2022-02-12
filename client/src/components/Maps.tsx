// import React, { useState } from 'react';
// import ReactMapGL from 'react-map-gl';

// function Map() {
//   const [viewport, setViewport] = useState({
//     width: 100,
//     height: 100,
//     latitude: 37.75,
//     longitude: -122.43,
//     zoom: 8,
//   });
//   return (
//     <ReactMapGL
//       {...viewport}
//       onViewportChange={(nextViewport: void) => setViewport(nextViewport)}
//     />
//   );
// }

// export default Map;

import React from 'react';
import Map from 'react-map-gl';
import Markers from './Markers';
import PopUp from './PopUp';

function Maps() {
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
        initialViewState={{
          longitude: 15,
          latitude: 60,
          zoom: 3.5,
        }}
        style={{
          width: '100vw',
          height: '100vh',
          fontSize: 'initialViewState.zoom * 5',
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Markers />
        <PopUp />
      </Map>
    </div>
  );
}

export default Maps;
