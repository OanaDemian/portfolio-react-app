import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#F4B393]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Oana, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Passionate and empathetic Software Engineer, recent graduate of the intensive Makers Academy Bootcamp with a background in Applied Behaviour Analysis and Special Needs Education. In my former profession, I saw technology breaking boundaries and changing people's lives. I would like to be part of a team that creates products aimed at improving our lives and I think technology is a way to do this at a grand scale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;