import React from 'react';

// Local imports
import "./network.scss";
import NetworkLeft from './left/NetworkLeft';
import NetworkRight from './right/NetworkRight';

function Network() {
  return (
    <div className='network'>
      <div className="network-left">
        <NetworkLeft/>
      </div>
      <div className="network-right">
        <NetworkRight/>
      </div>
    </div>
  )
}

export default Network
