import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom"

const AddListing = () => {

    function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}
    let navigate = useNavigate()
    
    
    
    // add listing
    const initialFormData = Object.freeze({
        slug:'',
        realtor:'',
        parking_spot:'',
        status:'',
        location:'',
        price:'',
        photo_1:'',
        photo_2:'',
        photo_3:'',
        rooms: '',
        bathroom: '',
        image:'',
        name:''
	});

    const [postData, updateFormData] = useState(initialFormData);  
    const [postimage, setPostImage] = useState(null);
    const [postimages, setPostImages] = useState(null);
    const [postimagess, setPostImagess] = useState(null);
    const [postimagesss, setPostImagesss] = useState(null);

    
  
  
    const handleChange = (e) => {
          if ([e.target.name] == 'image') {
              setPostImage({
                  image: e.target.files,
              });
              console.log(e.target.files);
          }

          if ([e.target.name] == 'photo_1') {
            setPostImages({
                photo_1: e.target.files,
            });
            console.log(e.target.files);
        }
  
        if ([e.target.name] == 'photo_2') {
            setPostImagess({
                photo_2: e.target.files,
            });
            console.log(e.target.files);
        }

        if ([e.target.name] == 'photo_3') {
            setPostImagesss({
                photo_3: e.target.files,
            });
            console.log(e.target.files);
        }
  
      if ([e.target.name] == 'title') {
              updateFormData({
                  ...postData,
                  [e.target.name]: e.target.value.trim(),
                  ['slug']: slugify(e.target.value.trim()),

              });
          } else {
              updateFormData({
                  ...postData,
                  [e.target.name]: e.target.value.trim(),
                  
              });
          }
  
      };
    const config = {headers: {'Content-Type' : 'multipart/form-data'}};
    const url = "http://localhost:8000/api/v1/createlisting/";
  const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('name', postData.name);
		formData.append('slug', postData.slug);
		formData.append('rooms', postData.rooms);
		formData.append('bathroom', postData.bathroom);
		formData.append('parking_spot', postData.parking_spot);
		formData.append('status', postData.status);
		formData.append('location', postData.location);
		formData.append('price', postData.price);
		formData.append('image', postimage.image[0]);
		formData.append('photo_1', postimages.photo_1[0]);
		formData.append('photo_2', postimagess.photo_2[0]);
		formData.append('photo_3', postimagesss.photo_3[0]);

		axios
        .post(url, formData, config)
        .then((res) =>{
            console.log(res.data);
        })
        .catch((err)=> console.log(err));
    
        alert('Listing Added successfully')
        navigate("/admin")
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
                    <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 gap-10 container mx-auto">
                    <div >
                    
                    <input type="text" name="name" placeholder='name'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                    <input type="text" name="slug" placeholder='slug'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                    
                    
                    <input type="text" name="location" placeholder='location'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>

                    
                                        
                    <input type="number" name="rooms"  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" placeholder='rooms' onChange={handleChange}   required/>

                   
                    <input type="number" name="bathroom" placeholder='bathroom' className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required />
                    
                    
                    <input name="parking_spot" placeholder='parking spot' type="number" className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                    <input type="text" name="price" placeholder='Amount'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                    </div>
                <div>
                    <input name="status" type="text" placeholder='status of the house'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>
                
                    <input name="image" type="file" placeholder='coverphoto'  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" accept="image/*" onChange={handleChange}   required/>
                    
                    <input name="photo_1" type="file"  className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" accept="image/*" onChange={handleChange}   required/>
                    

                    <input type="file" accept="image/*"  name="photo_2" className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}  required/>

                    
                    <input name="photo_3" type="file" accept="image/*" className="shadow mb-2 appearance-none border rounded w-full py-2 px-1 text-black" onChange={handleChange}   required/>

                    
                </div>
                    </div>                   
                    
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                
                  <button
                    className="text-white bg-amber-500 active:bg-amber-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button" onClick={handleSubmit}
                    
                  >
                    Submit
                  </button>
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

export default AddListing