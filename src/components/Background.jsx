import React from 'react';

function Background() {
  return (
    <>
      <div className='fixed z-[2] mt-10 w-full h-screen bg-zinc-800'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>
          Store your important notes.
        </div>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[14vw] leading-none tracking-tighter font-semibold text-[#77873f]'>
          Notes.
        </h1>
      </div>
    </>
  );
}

export default Background;
