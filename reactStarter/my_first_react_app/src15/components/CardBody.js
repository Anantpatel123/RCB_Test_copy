import React from 'react';

const CardBody = ({count, handleIncrement, handleDecrement, handleReset}) => (
    <div className="card-body">
          <p className="card-text">Click Count: {count}</p>
          <button className="btn btn-primary" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={handleReset}>
            Reset
          </button>
        </div>
);

export default CardBody;