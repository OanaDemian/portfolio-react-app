import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col  justify-center h-full'>
        <p className='text-[#F4B393]'> Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>Oana Demian</h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892b0]'>I'm a Software Engineer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a software engineer focused on building responsive full-stack web applications.</p>
        <div> 
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F4B393] hover-border-[#F4B393]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;