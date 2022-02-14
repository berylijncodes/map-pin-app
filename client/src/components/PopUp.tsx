import { useState } from 'react';
import { Popup } from 'react-map-gl';
import { StyledPopup } from '../styles/Popup.styles';

import Star from '@mui/icons-material/Star';

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
          <StyledPopup>
            <label htmlFor="place">place</label>
            <h4>Paris</h4>
            <label htmlFor="review">review</label>
            <p>Fine City</p>
            <label htmlFor="rating">rating</label>
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <label htmlFor="information">information</label>
            <p>
              <b>Created by beryl</b> | <span>1 hr ago</span>{' '}
            </p>

            {/* <input type="text" className="input__text" /> */}
          </StyledPopup>
        </Popup>
      )}
    </div>
  );
}

export default PopUp;
