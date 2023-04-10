import React, { useContext, useEffect, useState } from 'react';
import FeatureSinglejob from '../FeatureSingleJob/FeatureSinglejob';
import { JobContext } from '../../App';

const FeatureJob = () => {
      // const [jobs, setJobs] = useState([]);
      const [set, setData] = useState(true);
      // useEffect(() => {
      //       fetch("data.json")
      //             .then((res) => res.json())
      //             .then((data) => setJobs(data));
      //       setData(true);
      // }, [])

      let jobs = useContext(JobContext);
      // console.log(jobs , set);
      return (
            <>
                  <div className='text-center mt-14 mb-4'> <h1 className='font-bold text-3xl'>Featured Jobs </h1>
                        <p>Explore thousands of job all the information you need </p></div>
                  <div>

                        <div className='mt-10 lg:grid lg:grid-cols-2 gap-2'>

                              {set ? jobs.slice(0, 4).map((job) => <FeatureSinglejob key={job.id} job={job}></FeatureSinglejob>) : jobs.map((job) => <FeatureSinglejob key={job.id} job={job}></FeatureSinglejob>)}
                        </div>
                        <div className='mt-9 flex mx-auto'>
                              <button className={`btn btn-active btn-primary  mx-auto ${set===false ? 'hidden': 'block'}`} onClick={()=>setData(false)}>See all Jobs</button>
                        </div>
                  </div>

            </>
      );
};

export default FeatureJob;