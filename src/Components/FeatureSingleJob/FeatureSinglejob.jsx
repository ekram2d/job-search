import React from 'react';
import { BeakerIcon, MapIcon, MapPinIcon , } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const FeatureSinglejob = ({ job }) => {
      const { companyLogo, id, jobTitle, companyName, remoteOrOnsite, location, salary, } = job;
      // console.log(job)
      const {phone,email,address}=job.contactInformation
      return (
            <div className="mt-14 card w-auto bg-base-100 shadow-xl ">
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
                       
                              <Link to={`/job-details/${id}`} className="btn btn-active btn-primary w-28 ">
                                    Veiw Details
                                    </Link>

                  </div>
            </div>
      );
};

export default FeatureSinglejob;