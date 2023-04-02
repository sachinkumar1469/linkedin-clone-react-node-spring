import React from 'react';

// Local imports
import "./networkRight.scss";
import RightInvitation from './rightInvitation/RightInvitation';
import RightRecItem from './rightRecommendation/RightRecItem';

function NetworkRight() {
  return (
    <div className='network-right-wrapper'>
      <div className='network-invitations'>
        <div className='network-invitations-header'>
          <h3>Invitations</h3>
        </div>
        <div className='network-invitations-body'>
          <RightInvitation/>
          <RightInvitation/> 
          <RightInvitation/> 
          <RightInvitation/> 
        </div>
      </div>

      <div className='network-recommendation'>
        <div className='network-invitations-header'>
          <h3>People you may know</h3>
        </div>
        <div className='network-invitations-body'>
          <ul>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
            <RightRecItem/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NetworkRight
