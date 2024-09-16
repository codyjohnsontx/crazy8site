// src/components/NavBar.tsx
import React from 'react';
import crazy8logo from '/assets/crazy8logo.jpeg';

function Title() {
  return (
    <>
      <div className='title-container'>
        {/* <h1 className="title">Crazy8s Grappling Club</h1> */}
        <img className='title-img' src={crazy8logo} alt="crazy8-logo" />
        {/* <button>Enter</button>   */}
      </div>

    </>
  );
}

export default Title;
