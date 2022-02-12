import { Marker } from 'react-map-gl';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

function Markers() {
  return (
    <Marker longitude={5.2913} latitude={52.1326} anchor="bottom">
      <RoomOutlinedIcon />
    </Marker>
  );
}

export default Markers;
