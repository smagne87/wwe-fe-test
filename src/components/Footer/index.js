import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <div className="footer-content">
      <ul>
        <li>
          <p>
            <b>For just $9.99 per month, </b>
            WWE Network includes every pay-per-view event live at no additional cost
          </p>
          <hr />
        </li>
        <li>
          <p>
            <b>Unlimited access </b>
              - anywhere, anytime, on any device
          </p>
          <hr />
        </li>
        <li>
          <p>
            <b>First month FREE </b>
              - No commitment, cancel anytime
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
