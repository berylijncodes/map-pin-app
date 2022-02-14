import { useState, useEffect } from 'react';
import React from 'react';
import Map from 'react-map-gl';
import Markers from './Markers';
import PopUp from './PopUp';
import axios, { AxiosResponse } from 'axios';

type Pin = {
  lat: number;
  long: number;
}[];

function Maps() {
  const [pins, setPins] = useState<Pin>([]);
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get<Pin>('/pins');
        setPins(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPins();
  }, []);
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
          fontSize: 'initialViewState.zoom * 5 ',
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pins.map((p) => {
          return (
            <>
              <Markers longitude={5.216} latitude={52.193} />
              <Markers longitude={p.long} latitude={p.lat} />
              <PopUp />
            </>
          );
        })}
      </Map>
    </div>
  );
}

export default Maps;
