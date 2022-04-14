import { Marker } from 'react-map-gl';
import { useState } from 'react';
import PopUp from './PopUp';

import RoomIcon from '@mui/icons-material/Room';
// import { Viewport } from 'viewport-mercator-project';

function Markers({
  longitude,
  latitude,
  _id,
  title,
  desc,
  userName,
  createdAt,
}: {
  longitude: number;
  latitude: number;
  _id: object;
  title: string;
  desc: string;
  userName: string;
  createdAt: string;
}) {
  const [showOnePopup, setShowOnePopup] = useState(false);

  const currentUser = 'Barnie';

  const handleClickPopup = () => {
    setShowOnePopup(!showOnePopup);
  };

  return (
    <>
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <RoomIcon
          style={{
            color: userName === currentUser ? '#d96704' : '#0477bf',
            fontSize: 40,
            cursor: 'pointer',
          }}
          onClick={() => handleClickPopup()}
        />
      </Marker>
      {showOnePopup && (
        <PopUp
          longitude={longitude}
          latitude={latitude}
          title={title}
          desc={desc}
          userName={userName}
          createdAt={createdAt}
        />
      )}
    </>
  );
}

export default Markers;
