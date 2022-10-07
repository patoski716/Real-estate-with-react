import React from 'react'
import { Link } from "react-router-dom";


const preview = () => {
  return (
    <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto">
              {/* <!-- cards go here --> */}
              <div className="card">
                <Link to="/detail">
                <img src="https://technext.github.io/property/images/img_3.jpg" alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
                </Link>
                
                <div className="m-4 grid grid-cols-2 gap-20">
                    <Link to="/detail">
                  <span className="font-bold capitalize text-center">3 Bedroom flat</span>
                    
                    </Link>
                  <span className=" text-black capitalize text-sm font-semibold flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>Lagos, nigeria</span>
                </div>
                <div className="badge">
                For Rent @
                    &#8358;
                      
                    <span>250,000/yr</span>
                </div>
              </div>
                {/* end card */}
              

              
    </div>
          
        
  )
}

export default preview