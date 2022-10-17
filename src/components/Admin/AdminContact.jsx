import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';



import axiosInstance from './axios';


let getTime = (post) => {
    return new Date(post.created_at).toLocaleDateString()
}

const AdminContact = () => {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInstance
        .get(`viewcontact/`)
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
                    
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="table-responsive">
                                <table className="table text-grey-darkest">
                                    <thead className="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">phone</th>
                                        <th scope="col">message</th>
                                        <th scope="col">created at</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {posts.map((post) =>(
                                    <tr key={post.id}>
                                        <th scope="row">{post.id}</th>
                                        <td>{post.name}</td>
                                        <td>{post.email}</td>
                                        <td>{post.phone}</td>
                                        <td>{post.message}</td>
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


  
export default AdminContact;