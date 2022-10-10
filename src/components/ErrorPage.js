import React from 'react'
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className='container' >
        <section id="login" className="mt-5 py-5">
    <div className="row">
        <div className="col-md-6 mx-auto">
            
            <div className='text-center text-3xl mt-20 pt-20'>
            <h2>Error 404 | Page Not Found</h2>

            <Link to='/' className="text-black ml-2 btn border-amber-500 md:border-2 hover:bg-amber-500 hover:text-white transition ease-out duration-500">Return Home</Link>

            </div>
            </div>
            </div>
            </section>
        </div >
  )
}

export default ErrorPage