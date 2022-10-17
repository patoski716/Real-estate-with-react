import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom'


import axiosInstance from '../../axios';


let getTime = (post) => {
    return new Date(post.created_at).toLocaleDateString()
}

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInstance
        .get(`listings/`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
  return (
    <div className="mx-auto bg-grey-400">
   
    <div className="min-h-screen flex flex-col">
       
        <Nav/>
      
        <div className="flex flex-1">
          
            <Sidebar/>
           
            <main className="bg-white-300 flex-1 p-3 overflow-hidden">
                <div className="flex flex-col">
                  
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        
                        
                    </div>
                    <Link to="/admin/add-listing" type="button" className="text-black py-2 px-3 uppercase text-xs font-bold cursor-pointer w-20 tracking-wider border-gray-500 md:border-2 bg-gray-500 hover:text-white">
                            Add Listing
                        </Link>
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="table-responsive">
                                <table className="table text-grey-darkest">
                                    <thead className="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">name</th>
                                        <th scope="col">rooms</th>
                                        <th scope="col">bathroom</th>
                                        <th scope="col">parking spot</th>
                                        <th scope="col">status</th>
                                        <th scope="col">location</th>
                                        <th scope="col">price</th>
                                        <th scope="col">created at</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {posts.map((post) =>(
                                    <tr key={post.id}>
                                        <th scope="row">{post.id}</th>
                                        <td>{post.name}</td>
                                        <td>{post.rooms}</td>
                                        <td>{post.bathroom}</td>
                                        <td>{post.parking_spot}</td>
                                        <td>{post.status}</td>
                                        <td>{post.location}</td>
                                        <td>{post.price}</td>
                                        <td>{getTime(post)}</td>
                                    </tr>
      ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
            </main>
          
        </div>
       
        <Footer/>     
    </div>
</div>
  );
}


  
export default Dashboard;