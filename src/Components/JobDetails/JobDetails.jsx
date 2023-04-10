import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobContext } from '../../App';

const JobDetails = () => {
      const {id} = useParams()
      const jobs = useContext(JobContext);

      
            const myJob = jobs.find(job=>job.id === parseInt(id))
            console.log(myJob)
      
      
     
      return (
            <div>
                  
            </div>
      );
};

export default JobDetails;