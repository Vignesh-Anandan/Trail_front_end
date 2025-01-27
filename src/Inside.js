import React from 'react';


function Inside({value, onSquareClick}) {

    return (
      <button
        className="square"
        onClick={onSquareClick}
               >
        {value}
      </button>
    );
  }

  export default Inside