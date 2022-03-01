import React from 'react';
import { useState, useEffect } from 'react';
import Markers from './Markers';

import axios from 'axios';

import Map from 'react-map-gl';

type Pin = {
  lat: number;
  long: number;
  title: string;
  desc: string;
  userName: string;
  createdAt: string;
  _id: object;
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
          longitude: 17,
          latitude: 46,
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
          console.log(p);
          console.log('p', p._id);

          return (
            <>
              <Markers
                longitude={p.long}
                latitude={p.lat}
                userName={p.userName}
                _id={p._id}
                key={p.userName}
                title={p.title}
                desc={p.desc}
                createdAt={p.createdAt}
              />
            </>
          );
        })}
      </Map>
    </div>
  );
}

export default Maps;
