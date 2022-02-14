import { Marker } from 'react-map-gl';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

function Markers({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) {
  return (
    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
      <RoomOutlinedIcon />
    </Marker>
  );
}

export default Markers;
