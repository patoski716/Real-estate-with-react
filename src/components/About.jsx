import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import {Link} from "react-router-dom";
import Header from "./Header";


const About = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios
      .get(`http://localhost:8000/api/v1/realtors/`)
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
<div className="container mx-auto">
<div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 gap-10 container mx-auto">
      <div>
      <h1 className='text-3xl'>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae autem alias nesciunt quia cupiditate dolorem corrupti quas? Aut, doloribus facilis delectus cupiditate quis eligendi minima neque ipsum voluptatum ad. Beatae.
      </p>
      <h1 className='text-3xl'>Meet our Realtors</h1>

      <div className="flex items-center gap-10">
      {posts.map((post) =>(
      <div key={post.id}>
        <div >

    <div className="relative w-24 h-24">
    <img className="rounded-full border border-gray-100 shadow-sm" src={post.image} alt="Agent" />
    </div>
    <div className="mt-10">
    <h1>{post.name}</h1>
    <h1>{post.email}</h1>
    <h1>{post.phone}</h1>
    </div>
    
    
    </div>
    </div>
    ))}

      </div>
      

      </div>

      <div>
      <img src="https://www.realestate.com.au/blog/images/2000x1333-fit,progressive/2020/08/12175512/social-housing.jpeg" alt="" className="h-96 md:w-full w-96"/>


      </div>

    </div>
</div>
    

    </div>
  )
}

export default About