import { useState } from 'react';
import { Popup } from 'react-map-gl';
import { StyledPopup } from '../styles/Popup.styles';
import { format } from 'timeago.js';

import Star from '@mui/icons-material/Star';

function PopUp({
  longitude,
  latitude,
  title,
  desc,
  userName,
  createdAt,
}: {
  longitude: number;
  latitude: number;
  title: string;
  desc: string;
  userName: string;
  createdAt: string;
}) {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div>
      {showPopup && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="left"
          onClose={() => setShowPopup(false)}
        >
          <StyledPopup>
            <label htmlFor="place">place</label>
            <h4 className="title">{title}</h4>
            <label htmlFor="review">review</label>
            <p className="desc">{desc}</p>
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
              <b>Created by {userName}</b> | <span>{format(createdAt)}</span>{' '}
            </p>

            {/* <input type="text" className="input__text" /> */}
          </StyledPopup>
        </Popup>
      )}
    </div>
  );
}

export default PopUp;
