import React from 'react'
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import Preview from './preview';

const Home = () => {
  
  return (
    <div>
     <header
        className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className=" text-center lg:text-5xl md:text-3xl sm:text-2xl  text-white font-bold drop-shadow-lg text-xl">Easiest way to find your 
            <span className="text-amber-500"> dream home</span>
            </h1>
            <form action="" className='md:flex md:items-center md:justify-center w-full'>
            <div className="flex w-full items-end gap-4 mt-10">
              <Input size="lg" placeholder='Search for your dream home' className='font-semibold drop-shadow-lg w-full rounded-full' />
              
            </div>
            <div className='py-3 px-20 lg:px-1 md:px-3'>
            <button className="mt-10 px-10 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                type="button">Submit
            </button>
            </div>
            </form>            
        </div>
    </header>

    <div className=" mx-auto py-2 text-dark px-4 md:px-8 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
      <div className='uppercase'>
        <h1>
        Properties
        </h1>
      </div>

      <div className=''>
      <Link to="#" className="mt-10  px-8 py-1 bg-gradient-to-r from-amber-500
      to-red-600 hover:from-amber-600 hover:to-red-700 text-sm text-white/70 
      drop-shadow-lg rounded-full">Load more</Link>
      </div>

      </div>

    </div>

    <Preview/>
    
    </div>
  )
}

export default Home