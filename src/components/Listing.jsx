import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from './Header'


const Listing = () => {
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
        className="w-full h-96 brightness-50 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h3 className=" text-center lg:text-5xl md:text-4xl sm:text-2xl  text-amber-500 font-bold drop-shadow-lg text-xl">Our Listing</h3>
            <p>
            <Breadcrumbs className='text-black font-semibold mt-6'>
        <Link to="/" className="opacity-60">
            Home
        </Link>
        <span className="text-white/100">Listing</span>
    </Breadcrumbs>
            </p>                       
        </div>
    </header>
    <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto">
      {posts.map((post) =>(
        <div key={post.id}>
          {/* <!-- cards go here --> */}
        <div className="card" >
        <Link to={'/detail/' + post.slug}>
        <img src={post.image} alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
        </Link>
        
        <div className="m-4 grid grid-cols-2 gap-20">
            <Link to={'/detail/' + post.slug}>
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

export default Listing