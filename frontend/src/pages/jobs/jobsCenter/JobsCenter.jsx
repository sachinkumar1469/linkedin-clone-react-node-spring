import React,{useState,useEffect} from 'react';
import axios from 'axios';

// Local imports
import "./jobsCenter.scss";
import RecJobsItem from './RecJobsItem';

function JobsCenter() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL+'api/job/all')
      .then(res => {
        setJobs(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className='jobs-center-wrapper'>
      <div className="jobs-recent-search">
        <h3><span> Recent job searches </span> <span>clear</span></h3>
        <div className="jobs-recent-search-list">
            <div className="jobs-recent-search-item">
                <h4>Frontend Developer <span>· 226 new</span></h4>
                <p>Location: <span>Remote</span></p>
            </div>
            <div className="jobs-recent-search-item">
                <h4>Web Developer Fresher <span>· 42 new</span></h4>
                <p>Location: <span>Gurugram, Haryana</span></p>
            </div>
      </div>
      </div>
      <div className="recommendation-jobs">
        <h3>Recommended jobs for you</h3>
        <p>Based on your profile and search history</p>
        <div className="recommendation-jobs-list">
            {jobs.map((job) => (
              <RecJobsItem job={job} key={job._id} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default JobsCenter;
