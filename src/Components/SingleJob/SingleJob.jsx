import React from 'react';
import { BeakerIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const SingleJob = ({ job }) => {

      const { companyLogo, id, jobTitle, companyName, remoteOrOnsite, location, salary, } = job;
      // console.log(job)
      const { phone, email, address } = job.contactInformation
      return (
            <div className="mt-5  lg:flex items-center  bg-base-100 shadow-xl w-[80%] mx-auto border p-2 ">
                  <figure><img className='w-40 rounded-lg' src={companyLogo} alt="Shoes" /></figure>
                  <div className="card-body">
                        <h2 className="card-title">
                              {jobTitle}
                        </h2>
                        <p>{companyName}</p>
                        <div className="card-actions justify-start">
                              <button className="badge badge-outline">Remote</button>
                              <button className="badge badge-outline">Full time</button>
                        </div>

                        <div className='flex '>

                              <p className='flex'>   <MapPinIcon className="h-6 w-6 text-blue-500" />  {address}</p>
                              <p>salary: {salary}</p>
                        </div>



                  </div>
                  <Link to={`/job-details/${id}`} className="btn btn-active btn-primary w-28 ">
                        Veiw Details
                  </Link>
            </div>
      );
};


export default SingleJob;