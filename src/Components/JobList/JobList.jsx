import React, { useEffect, useState } from 'react';

const JobList = () => {

      const [joblists, setJoblist] = useState([]);
      useEffect(() => {
            fetch("joblist.json")
                  .then((res) => res.json())
                  .then((lists) => setJoblist(lists));
      }, [])

      console.log(joblists)
      return (
            <>
                  <div className='text-center mt-14'> <h1 className='font-bold text-3xl'>Job Category List </h1>
                        <p>Explore thousands of job all the information you need </p></div>
                  <div className='lg:flex lg:justify-between mt-8 '>


                        {
                              joblists.map((list) =>

                                    <div className=' gap-5 text-center lg:text-left shadow-xl bg-orange-300 rounded-lg p-2 mt-4'>
                                          <img className='w-80 lg:w-12 mx-auto  ' src={list.icon}></img>
                                          <h1 className='font-bold text-2xl'>{list.title}</h1>
                                          <p>{list.total_jobs} jobs avialble</p>
                                    </div>

                              )
                        }
                  </div>
            </>
      );
};

export default JobList;