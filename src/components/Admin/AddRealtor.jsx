import React, { useState } from "react";
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom"

const AddRealtor = () => {
  let navigate=useNavigate()

const initialFormData = Object.freeze({
  name:'',
  email:'',
  phone:'',
  description:'',
  image:'',
});

const [postData, updateFormData] = useState(initialFormData);

const [postimage, setPostImage] = useState(null);
  
  
  const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setPostImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		}

    if ([e.target.name] == 'name') {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
			});
		} else {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
			});
		}

	}
  const config = {headers: {'Content-Type' : 'multipart/form-data'}};
  const url = "http://localhost:8000/api/v1/createrealtor/";
  const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('name', postData.name);
		formData.append('email', postData.email);
		formData.append('phone', postData.phone);
		formData.append('description', postData.description);
    formData.append('image', postimage.image[0]);

		axios
      .post(url, formData, config)
      .then((res) =>{
        console.log(res.data);
      })
      .catch((err)=> console.log(err));
    
      alert('Realtor Added successfully')
      navigate("/admin/realtor")
	};

  return (
    <div className="mx-auto bg-grey-400">
   
    <div className="min-h-screen flex flex-col">
       
        <Nav className="bg-gray-600"/>
      
        <div className="flex flex-1">
          
            <Sidebar/>
           
            <main className=" flex-1 p-3 overflow-hidden">
                <div className="flex flex-col">
                  
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        
                        
                    </div>
                    
                    <div className="font-bold text-xl"><Link to="/admin">Go Back</Link></div>
                    
          
                  
                    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div className="table-responsive">
                            <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" >
                
                    
                    <input type="text" name="name" placeholder='name'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>

                    <input type="text" name="phone" placeholder='phone'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>

                    
                                        
                    <input type="email" name="email"  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" placeholder='email' onChange={handleChange}   required/>

                   
                    <textarea type="text" name="description" placeholder='description' className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required />
                    
                    <input type="file" accept="image/*"  name="image" className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                    
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                
                  <input
                    className="text-white bg-amber-500 active:bg-amber-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit" onClick={handleSubmit} value="Submit"
                    
                  />
                   
                </div>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
            </main>
          
        </div>
       
        <Footer/>     
    </div>
    </div>
  )
}

export default AddRealtor