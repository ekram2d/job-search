import React from 'react';

const HeaderPart = () => {
      return (

            <>
            <div className=' lg:flex lg:justify-around lg:items-center'>
                  <div className='px-3 lg:px-0 text-left'>
                        <h1 className='text-3xl font-bold '>
                              One step <br></br>
                              closer To Your <br></br>
                              <span className='text-blue-600'>Dream Job</span>
                        </h1>
                        <p>Find the job searching.clicking.you can also find the remote job or onstate job</p>
                        <button className="btn btn-active btn-primary">Get started </button>
                  </div>
                  <div className='text-center'>
                        <img className='w-96 lg:mx-auto' src='man.png'>
                        </img>
                  </div>
            </div>
            </>
      );
};

export default HeaderPart;