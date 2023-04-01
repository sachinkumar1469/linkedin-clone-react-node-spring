import React from 'react'
import "./post.scss";

function Post() {
  return (
    <div className='post'>
      <div className="post-profile">
        <div className="profile-img">
            <img src="https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1688601600&v=beta&t=efv4xvpx8Vs0tv6pXQLn5biOQKrf1ZQ14-GS10Knha8" alt="" />
        </div>
        <div className="profile-content">
            <div className="profile-title">
                <a href='#' className='profile-name'>Amazon</a>
                <span className='profile-follow-status'>• Following</span>
            </div>
            <div className="profile-description">
                <p>We are back with the Season 3 of Propel Accelerator, an initiative by AmazonGlobalSelling!</p>
            </div>
            <div className="profile-post-time">
                <span>
                    10H • &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div className="profile-menu">
            {/* <button className='profile-dot-menu'></button> */}
            <button className='profile-follow-btn'>+ FOLLOW</button>
        </div>
      </div>
      <div className='post-text-content'>
        <p></p>
      </div>
      <div className="post-images">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Post
