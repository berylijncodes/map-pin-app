import { Marker } from 'react-map-gl';
import { useState } from 'react';
import PopUp from './PopUp';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
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
  const [showPopup, setShowPopup] = useState(false);

  const handleClickPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        onClick={() => handleClickPopup()}
      >
        <RoomOutlinedIcon style={{ color: '#0477bf', fontSize: 40 }} />
      </Marker>
      {showPopup && (
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
