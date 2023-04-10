import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobContext } from '../../App';
import { BeakerIcon, BriefcaseIcon, PhoneIcon, InboxIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utitlity/Fakedb';
const JobDetails = () => {
      const { id } = useParams()
      const jobs = useContext(JobContext);


      const myJob = jobs.find(job => job.id === parseInt(id))
      // console.log(myJob)

      const { remoteOrOnsite, jobTitle, companyName, educationalRequirements, experiences, fulltimeOrParttime, jobDescription
            , jobResponsibility, location, salary
      } = myJob
      const { phone, email, address } = myJob.contactInformation


      return (
            <>
            <div className='w-[80%] mx-auto mt-20'>
                  <h1 className='text-center text-2xl font-bold '>Job Details</h1>
                  <div className='lg:grid lg:grid-cols-2 gap-4  mt-3 '>
                        <div className='lg:w-[80%]'>
                              <h1><span className='font-bold'>Job Desciption:</span>{jobDescription}</h1>
                              <h1><span className='font-bold'>Job Responsibility:</span>{jobResponsibility}</h1>
                              <h1><span className='font-bold'>Educational Requirements::</span>{educationalRequirements}</h1>
                              <h1><span className='font-bold'>Experiences:</span>{experiences}</h1>
                        </div >
                       <div>

                       <div className='lg:w-[60%] bg-lime-300 shadow-2xl p-2'>
                              <h1 className='text-1xl font-bold'>Job Details</h1>
                              <hr className='bg-black border rounded-2xl text-2xl'></hr>
                              <div className='flex'><p className='font-bold flex'> <CurrencyDollarIcon className="h-6 w-4 text-blue-500 " /> salary: </p>{salary}</div>
                              <div className='flex'><p className='font-bold flex'> <BriefcaseIcon className="h-6 w-4 text-blue-500 " /> Job Title: </p> {jobTitle}</div>
                              <h1 className='text-1xl font-bold'>Contact Information</h1>
                              <hr className='bg-black border rounded-2xl text-2xl'></hr>
                              <div className='flex'><p className='font-bold flex'> <PhoneIcon className="h-6 w-4 text-blue-500 " />Phone: </p>{phone}</div>

                              <div className='flex'><p className='font-bold flex'> <InboxIcon className="h-6 w-4 text-blue-500 " />Email: </p>{email}</div>
                              <div className='flex'><p className='font-bold flex'> <MapPinIcon className="h-6 w-4 text-blue-500 " />Address: </p>{address}</div>
                       </div>
                        
                       <button className='btn btn-active btn-primary mt-2 w-full lg:w-[55%] ' onClick={()=>addToDb(id)}>Apply Now</button>

                        </div>
                      
                     


                  </div>
                  
               


            </div>
           
            </>
      );
};

export default JobDetails;