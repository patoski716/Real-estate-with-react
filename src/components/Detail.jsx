import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div>
        <header
        className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h3 className=" text-center lg:text-5xl md:text-4xl sm:text-2xl  text-amber-500 font-bold drop-shadow-lg text-xl">3 Bedroom flat</h3>
        
                

                       
        </div>
    </header>
    <Breadcrumbs className='text-black font-semibold mt-6'>
        <Link to="#" className="opacity-60">
            Home
        </Link>
        <Link to="#">3 bedroom flat</Link>
    </Breadcrumbs>
        <div className='container mx-auto'>
            <div className="grid lg:grid-cols-2 mt-10 md:grid-cols-2 gap-12">
                <div>
                <img src="https://technext.github.io/property/images/img_2.jpg" alt="" className='h-full w-full'/>
                </div>
                <div>
                    <h1 className='md:text-4xl text-amber-500 sm:text-amber-500 lg:text-amber-500 font-semibold '>3 bedroom flat</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, odit dolores saepe at dolorem eaque eos, qui repudiandae atque ipsum esse inventore architecto cupiditate, quas maxime itaque! Laboriosam laborum animi tempore facere voluptate repellat ullam officiis excepturi. Deserunt quia accusantium magni corrupti delectus tempore voluptas enim iusto, veritatis, ipsum ad?
                    <div className='mt-10'>
                        <Link to="" className="text-black  ml-2 btn border-amber-500 md:border-2 bg-amber-500 hover:text-white transition ease-out duration-500">
                            Create an account to make an equiry
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Detail