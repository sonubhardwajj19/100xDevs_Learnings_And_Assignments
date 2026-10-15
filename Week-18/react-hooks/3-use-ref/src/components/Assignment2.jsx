import React, { useState } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 

export function Assignment2() {
  const [count , setCount] = useState(1);

  function handleReRender(){
      setCount(c=>c+1);
  }

    return (
        <div className='container'>
            <p>This component has rendered {count} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};