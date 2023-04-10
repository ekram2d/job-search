import React from 'react';
import HeaderPart from '../HeaderSection/HeaderPart';
import JobList from '../JobList/JobList';
import FeatureJob from '../FeatureJob/FeatureJob';


const Home = () => {
      return (
            <div className='w-[80%] mx-auto mb-4'>

                 <HeaderPart></HeaderPart>

                 <JobList></JobList>
                 <FeatureJob></FeatureJob>
                  
            </div>
      );
};

export default Home;