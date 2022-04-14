import React from 'react';
import { useState, useEffect } from 'react';
import Markers from './Markers';

import axios from 'axios';
import PopUp from './PopUp';

import Map, { MapLayerMouseEvent } from 'react-map-gl';
// import map from 'react-map-gl/dist/esm/components/map';
// import { Popup } from 'react-map-gl';

type Pin = {
  lat: number;
  long: number;
  title: string;
  desc: string;
  userName: string;
  createdAt: string;
  _id: object;
}[];
type Place = {
  lat: number;
  lng: number;
};

function Maps() {
  const [pins, setPins] = useState<Pin>([]);
  const [newPlace, setNewPlace] = useState<Place>();
  const [settings, setsettings] = useState({
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });
  //  const [showPopup, setShowPopup] = useState(true);

  const handleAddClick = (e: MapLayerMouseEvent) => {
    console.log('e', e);
    const { lng, lat } = e.lngLat;
    console.log('e', e);
    // const { _clickZoom } = e.target.doubleClickZoom.disable;
    setNewPlace({
      lng,
      lat,
    });
    setsettings({ ...settings });
  };

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
          // fontSize: 'initialViewState.zoom * 5 ',
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={handleAddClick}
        {...settings}
      >
        {pins.map((p) => {
          //console.log(p);
          //console.log('p', p._id);

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
        {/* {newPlace && (
          <Popup
            longitude={newPlace.lng}
            latitude={newPlace.lat}
            anchor="left"
            // onClose={() => setShowPopup(false)}
          ></Popup>
        )} */}
        {newPlace && (
          <PopUp
            longitude={newPlace.lng}
            latitude={newPlace.lat}
            title={''}
            desc={''}
            userName={''}
            createdAt={''}
          />
        )}
      </Map>
    </div>
  );
}

export default Maps;
