import { useState } from 'react';
import { Popup } from 'react-map-gl';

function PopUp() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div>
      {showPopup && (
        <Popup
          longitude={5.2913}
          latitude={52.1326}
          anchor="left"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
    </div>
  );
}

export default PopUp;
