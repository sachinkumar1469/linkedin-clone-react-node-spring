import React from 'react'

function RightRecItem() {
  return (
    <li>
        <div className='background-cover'>
          <div style={{backgroundImage:"linear-gradient(rgb(48 47 47 / 50%), rgb(0 0 0 / 0%)),url('https://media.licdn.com/dms/image/D4D16AQHUzxp0Neczlg/profile-displaybackgroundimage-shrink_200_800/0/1664904205614?e=1685577600&v=beta&t=vemILaUrvTblbxxVClnHzWyXi09_oQ0HX4LjO9Yc7Tc')"}}></div>
        </div>
        <div className='profile-link'>
          <a href="#">
            <img src="https://media.licdn.com/dms/image/C4D03AQGVici0SBVZrw/profile-displayphoto-shrink_200_200/0/1620120142226?e=1685577600&v=beta&t=jMG4ni8c3oN6wi8F3A6HCUNCQQAFO-y4g8a8A0SgmEQ" alt="" />
            <span>Sachin Kumar</span>
          </a>
        </div>
        <div className="description">
          <p>MERN || MEAN || Java(Spring & SpringBoot) || Intern at @Coding Ninjas</p>
        </div>
        <div className='current-organization'>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
              <path d="M11 3a5 5 0 00-3 1 5 5 0 100 8 5 5 0 103-9zM2 8a3 3 0 014.68-2.48 4.87 4.87 0 000 5A3 3 0 015 11a3 3 0 01-3-3zm9 3a3 3 0 01-1.68-.52 4.87 4.87 0 000-5A3 3 0 1111 11z"></path>
            </svg>
            <span>Galgotias University</span>
          </p>
        </div>
        <div className="connect">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
            <span>Connect</span>
          </button>
        </div>

    </li>
  )
}

export default RightRecItem
