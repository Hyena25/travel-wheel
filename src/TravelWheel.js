import React, { useState } from 'react';
import classNames from 'classnames';


const destinations = [
  'Paris',
  'Tokyo',
  'New York',
  'Barcelona',
  'Sydney',
  'London',
  'Rome',
  'Rio de Janeiro',
];

const TravelWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const spinWheel = () => {
    setIsSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * destinations.length);
      setSelectedDestination(destinations[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="travel-wheel">
      <div
        className={classNames('wheel', { spinning: isSpinning })}
        onClick={!isSpinning ? spinWheel : null}
      >
        {destinations.map((destination, index) => (
          <div className="segment" key={index}>
            <span>{destination}</span>
          </div>
        ))}
      </div>
      {selectedDestination && (
        <div className="result">
          <h2>Your Next Destination:</h2>
          <p>{selectedDestination}</p>
        </div>
      )}
    </div>
  );
};

export default TravelWheel;