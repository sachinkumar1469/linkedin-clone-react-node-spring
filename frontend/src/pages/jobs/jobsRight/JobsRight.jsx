import React from 'react';

// Local imports
import "./jobsRight.scss";

function JobsRight() {
  return (
    <div className='jobs-right-wrapper'>
      <div className="open-to-work">
        <h3>Open to work</h3>
        <p>Recommended based on your activity</p>
        <a href="">
            <div>Show recruiters you’re open to new job opportunities</div>
            <img src="https://media.licdn.com/dms/image/D4D35AQGTUUMFNhlAOg/profile-framedphoto-shrink_200_200/0/1664466760098?e=1680994800&v=beta&t=rZyt8-cDas6ITVSI6yxtaeY_c26pgSeGC2PJZdRUl_o" alt="" />
        </a>
        {/* <div>Get more InMails from recruiters when you are #OpenToWork - you control who sees this</div> */}
      </div>
    </div>
  )
}

export default JobsRight
