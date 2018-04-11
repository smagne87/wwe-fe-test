import React from 'react';
import summerSlam from '../../assets/summer-slam-logo.png';
import background from '../../assets/background-img.png';
import './styles.scss';

const MainCard = () => {
  return (
    <div className="main-card-content">
      <hr />
      <div className="overlay">
        <img className="background-image" src={background} alt="Content Background" />
      </div>
      <p>
        The ONLY place to watch SummerSlam,
        WrestleMania and thousands of hours of WWE video on demand.
      </p>
      <div className="main-card-footer">
        <ul>
          <li>
            <button className="button button-red button-large">Join Free for a Month</button>
            <small>No commitment, cancel anytime</small>
          </li>
          <li>
            <img src={summerSlam} alt="summer slam" />
          </li>
          <li>
            <h6>Live</h6>
            <span>This Sunday</span>
            <span>7e/4p</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainCard;
