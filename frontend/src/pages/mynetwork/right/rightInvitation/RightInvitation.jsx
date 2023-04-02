import React from 'react'

function RightInvitation() {
  return (
    <div className='network-invitations-body-item'>
        <div className='network-invitations-body-item-left'>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/307290454_564822875402748_3786414322699449020_n.jpg?ccb=11-4&oh=01_AdTx2TNCF0LJWT9RQO3RPSZ7c430XoGrv0xaGjW6kTz1Tw&oe=6433EA4B" alt="profile"/>
        </div>
        <div className='network-invitations-body-item-center'>
            <h4>John Doe</h4>
            <p>Software Engineer</p>
            <div className='network-organization'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M13 13V2a1 1 0 00-1-1H4a1 1 0 00-1 1v11H2v2h12v-2h-1zm-2 0H9v-2H7v2H5V9h6v4zm0-5H5V6h6v2zm0-3H5V3h6v2z"></path>
            </svg>
            <span>Coding Ninjas</span>
            </div>
        </div>
        <div className='network-invitations-body-item-right'>
            <button className='network-accept-btn'>Ignore</button>
            <button className='network-decline-btn'>Accept</button>
        </div>

        </div>
  )
}

export default RightInvitation
