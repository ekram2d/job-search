import React, { useContext } from 'react';
import { getStoredCart } from '../../Utitlity/Fakedb';
import { JobContext } from '../../App';
import { key } from 'localforage';
import SingleJob from '../SingleJob/SingleJob';

const Aplyjob = () => {

      let data = getStoredCart();
      const jobs = useContext(JobContext);
      let array = [];
      // console.log(jobs)
      for (let i in data) {
            const data = jobs.find((pd) => pd.id == i)
            if (data) {
                  array.push(data);
            }

      }
      // console.log(array);
      return (
            <div className='w-[80%]'>

                  {
                        array.map((job) => <SingleJob key={job.id} job={job}></SingleJob>  )
                  }

            </div>
      );
};

export default Aplyjob;