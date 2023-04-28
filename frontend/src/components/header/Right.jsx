import React from 'react';

import {NavLink} from "react-router-dom";

function Right() {
  return (
    <div className='right'>
      <div className="left-icons">
        <NavLink to={"/"} className="home-icon icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
            </svg>
            <span>Home</span>
        </NavLink>
        <NavLink to={"/mynetwork"} className="home-icon icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span>My Network</span>
        </NavLink>
        <NavLink to={"/jobs"} className="home-icon icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span>Jobs</span>
        </NavLink>
        <NavLink to={"/message"} className="home-icon icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <span>Messaging</span>
        </NavLink>
        <a href="#" className="home-icon icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span>Notification</span>
        </a>
        <a className="home-icon icon-wrapper">
            <img src="https://media.licdn.com/dms/image/D4D03AQF0s9H7q1LH1w/profile-displayphoto-shrink_100_100/0/1681717892314?e=1687996800&v=beta&t=81fRXGy_1w5BmpGopld78bZOiPx2WKD6s_Ss2Vbmuus" alt="Sachin Kumar"/>
            <span>Me 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" ></path>
                </svg>
            </span>
        </a>
      </div>
      <div className="right-icons">
        <a href="" className='home-icon icon-wrapper'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <span>
                For Business 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" ></path>
                </svg>
            </span>
        </a>
        <a href="" className='icon-wrapper'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M22 5v14H2V5h20m1-2H1a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V4a1 1 0 00-1-1z"></path>
                <path d="M2 5v14h10V5H2zm8 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V7h6v2z" opacity=".25"></path>
                <path  opacity=".6" d="M14 7h6v2h-6zM14 11h6v2h-6zM14 15h6v2h-6z"></path>
                <path d="M10 7.53v8.93a.28.28 0 00.44.23l6.43-4.44a.33.33 0 00.06-.46l-.06-.06-6.43-4.43a.28.28 0 00-.44.23z"></path>
            </svg>
            <span>
                Learning
            </span>
        </a>
      </div>
    </div>
  )
}

export default Right
