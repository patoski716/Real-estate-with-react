import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from './Alert';
import Header from './Header'


const Home = () => {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/v1/listings/`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  
  return (
    <div>
        <Header/>

     <header
        className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className=" text-center lg:text-5xl md:text-3xl sm:text-2xl  text-white font-bold drop-shadow-lg text-xl">Easiest way to find your 
            <span className="text-amber-500"> dream home</span>
            </h1>
            <p className="bg-primary text-black text-lg"><Alert/></p>
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

    <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto">
      {posts.map((post) =>(
        <div key={post.id}>
          {/* <!-- cards go here --> */}
        <div className="card" >
        <Link to={'detail/' + post.slug}>
        <img src={post.image} alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
        </Link>
        
        <div className="m-4 grid grid-cols-2 gap-20">
            <Link to={'detail/' + post.slug}>
          <span className="font-bold capitalize text-center">{post.name}</span>
            
            </Link>
          <span className=" text-black capitalize text-sm font-semibold flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>{post.location}</span>
        </div>
        <div className="badge">
       {post.status} @
            &#8358;
              
            <span>{post.price}/yr</span>
        </div>
      </div>
        {/* end card */}
        </div>
      ))}
        
              
              

              
    </div>
    
    </div>
  )
}

export default Home