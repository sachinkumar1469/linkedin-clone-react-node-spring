import React from 'react';

function RecJobsItem({job}) {
  return (
    <div className="recommendation-jobs-item">
        <div className='jobs-item-left'>
            <img src={process.env.REACT_APP_API_URL+job.companyLogo} alt="" />
        </div>
        <div className='jobs-item-center'>
            <a href="">{job.title}</a>
            <h5>{job.companyName}</h5>
            <p>{job.location}</p>
        </div>
        <div className='jobs-item-right'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
            </svg>
        </div>
    </div>
  )
}

export default RecJobsItem
