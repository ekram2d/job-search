import React, { useContext, useEffect, useState } from 'react';
import { getStoredCart } from '../../Utitlity/Fakedb';
import { JobContext } from '../../App';
import { key } from 'localforage';
import SingleJob from '../SingleJob/SingleJob';

const Aplyjob = () => {

      let data = getStoredCart();
      const jobs = useContext(JobContext);

      // console.log(jobs)
      const [array, setArray] = useState([]);

      useEffect(() => {
            let array1 = [];
            for (let i in data) {
                  const data = jobs.find((pd) => pd.id == i)
                  if (data) {
                        array1.push(data);



                  }


            }
            if (array1) {
                  setArray(array1);
            }


      }, [])



      const remote = () => {

            let array1 = [];
            for (let i in data) {
                  const data = jobs.find((pd) => pd.remoteOrOnsite == "Remote" && pd.id == i)
                  if (data) {
                        array1.push(data);



                  }


            }
            if (array1) {
                  setArray(array1);
            }




      }

      const onsite = () => {

            let array1 = [];
            for (let i in data) {
                  const data = jobs.find((pd) => pd.remoteOrOnsite == "Onsite" && pd.id == i)
                  if (data) {
                        array1.push(data);



                  }


            }
            if (array1) {
                  setArray(array1);
            }



      }
      console.log(array);
      return (
            <>
                  <h1 className='text-2xl font-bold text-center'>Applied job</h1>
                  <div className="dropdown flex  justify-end w-[80%] m-4 ">
                        <label tabIndex={0} className="btn m-1">Filter By</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li><button onClick={() => onsite()}>Onsite</button></li>
                              <li><button onClick={() => remote()}>Remote</button></li>
                        </ul>
                  </div>
                  <div className='w-[80%]'>

                        {
                              array.map((job) => <SingleJob key={job.id} job={job}></SingleJob>)
                        }

                  </div>
            </>
      );
};

export default Aplyjob;