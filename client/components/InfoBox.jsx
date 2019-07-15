import React from 'react';
import PropTypes from 'prop-types';

import { TextWrapper } from '../theme/global';

const InfoBox = ({ bookingsToday, availableCount }) => (
  <div>
    <br />
    {
      (bookingsToday > 0) ? (
        <div>
          <TextWrapper>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style={{ background: '#FFFFFF' }}>
              <title>icon/ic_social_proof</title>
              <desc>Created with Sketch.</desc>
              <defs>
                <polygon id="path-5" points="0 0 24 0 24 24 0 24" />
              </defs>
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="icon/ic_social_proof">
                  <g id="ic_booked">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-5" />
                    </mask>
                    <g id="Shape" />
                    <path d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z" id="path0_fill" fill="#333333" fillRule="nonzero" mask="url(#mask-2)" />
                  </g>
                </g>
              </g>
            </svg>
            <span>{`Booked ${bookingsToday} times today`}</span>
          </TextWrapper>
        </div>
      ) : null
    }

    {
      (availableCount > 0) ? (
        <div>
          <TextWrapper>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style={{ background: 'rgb(255, 255, 255) none repeat scroll 0% 0%' }}>
              <title>icon/ic_scarcity</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="icon/ic_scarcity">
                  <g id="ic_scarcity">
                    <rect id="boundary" x="0" y="0" width="24" height="24" />
                    <path d="M15,5 C11.1340068,5 8,8.13400675 8,12 C8,15.8659932 11.1340068,19 15,19 C18.8659932,19 22,15.8659932 22,12 C22,8.13400675 18.8659932,5 15,5 Z M15,17 C12.2385763,17 10,14.7614237 10,12 C10,9.23857625 12.2385763,7 15,7 C17.7614237,7 20,9.23857625 20,12 C20,14.7614237 17.7614237,17 15,17 Z" id="Shape" fill="#333333" fillRule="nonzero" />
                    <path d="M17.5,11 L16,11 L16,8.5 C16,8.22385763 15.7761424,8 15.5,8 L14.5,8 C14.2238576,8 14,8.22385763 14,8.5 L14,12.5 C14,12.7761424 14.2238576,13 14.5,13 L17.5,13 C17.7761424,13 18,12.7761424 18,12.5 L18,11.5 C18,11.2238576 17.7761424,11 17.5,11 Z" id="Shape" fill="#333333" fillRule="nonzero" />
                    <path d="M6,7 L4,7 C3.44771525,7 3,7.44771525 3,8 C3,8.55228475 3.44771525,9 4,9 L6,9 C6.55228475,9 7,8.55228475 7,8 C7,7.44771525 6.55228475,7 6,7 Z" id="Shape" fill="#333333" fillRule="nonzero" />
                    <path d="M5,13 C5.55228475,13 6,12.5522847 6,12 C6,11.4477153 5.55228475,11 5,11 L3,11 C2.44771525,11 2,11.4477153 2,12 C2,12.5522847 2.44771525,13 3,13 L5,13 Z" id="Shape" fill="#333333" fillRule="nonzero" />
                    <path d="M6,15 L4,15 C3.44771525,15 3,15.4477153 3,16 C3,16.5522847 3.44771525,17 4,17 L6,17 C6.55228475,17 7,16.5522847 7,16 C7,15.4477153 6.55228475,15 6,15 Z" id="Shape" fill="#333333" fillRule="nonzero" />
                  </g>
                </g>
              </g>
            </svg>
            <span>{`You're in luck! We still have ${availableCount} timeslots left`}</span>
          </TextWrapper>
        </div>
      ) : null
    }
  </div>
);

InfoBox.propTypes = {
  bookingsToday: PropTypes.number.isRequired,
  availableCount: PropTypes.number.isRequired,
};

export default InfoBox;
