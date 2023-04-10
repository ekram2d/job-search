import React from 'react';
import HeaderPart from '../HeaderSection/HeaderPart';
import JobList from '../JobList/JobList';


const Home = () => {
      return (
            <div className='w-[80%] mx-auto'>
                 <HeaderPart></HeaderPart>

                 <JobList></JobList>
                  
            </div>
      );
};

export default Home;