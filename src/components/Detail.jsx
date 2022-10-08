import { Breadcrumbs } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

const Detail = () => {

  // begin query
  const [items, setItems] = useState([])
  const {realtor} = useParams();
  useEffect(() => {
    const getItems = async () => {
        const result = await axios.get('http://localhost:8000/api/v1/realtors/');
        const allItems = result.data.entries;
        const realtorItems = allItems.filter(item => item.Realtor === realtor);
        setItems(realtorItems)
    }
    getItems()
}, [realtor])

  // end query
    const { slug } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([]);
    let url = `http://localhost:8000/api/v1/listings/` 
    useEffect(() => {
        axios
        .get(url + slug)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [setPosts]);

  return (
    <div>
        <header
        className="w-full h-96 brightness-50 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h3 className=" text-center lg:text-5xl md:text-4xl sm:text-2xl  text-amber-500 font-bold drop-shadow-lg text-xl">{posts.name}</h3>                       
        </div>
    </header>
    <Breadcrumbs className='text-black font-semibold mt-6'>
        <Link to="#" className="opacity-60">
            Home
        </Link>
        <Link to="#">{posts.name}</Link>
    </Breadcrumbs>
        <div className='container mx-auto'>
            <div className="grid lg:grid-cols-2 mt-10 md:grid-cols-2 md:gap-12 sm:gap-4">
                <div>
                <img src={posts.photo_1} alt="" className='h-full w-96 md:w-full'/>
                </div>
                <div className="w-80 md:w-full">
                    <h1 className='md:text-4xl text-amber-500 sm:text-amber-500 lg:text-amber-500 font-semibold '>{posts.name}</h1>
                    <h1 className="text-3xl">Status: {posts.status}</h1>
                    <h1 className="text-3xl">Price: &#8358;{posts.price}/yr</h1>
                    <h1 className="text-xl">Adress: {posts.location}</h1>
                    <h1 className="text-xl">Number of Rooms: {posts.rooms}</h1>
                    <h1 className="text-xl">Number of Bathroom: {posts.bathroom}</h1>
                    <h1 className="text-xl">Garage: {posts.parking_spot}</h1>


    <div className="flex items-center">
    <div class="relative w-24 h-24">
    <img class="rounded-full border border-gray-100 shadow-sm" src={posts.realtor_image} alt="Agent" />
    </div>
    <div>
    <h1>{posts.realtor_name}</h1>
    <h1>{posts.realtor_email}</h1>
    <h1>{posts.realtor_phone}</h1>
    </div>
    </div>

    
  
                    <div className='mt-5'>
                        <Link to="" className="text-black  ml-2 btn border-amber-500 md:border-2 bg-amber-500 hover:text-white transition ease-out duration-500">
                            Create an account to make an equiry
                        </Link>

                        <button type="button" onClick={() => setShowModal(true)} className="text-black mt-5 md:mt-5 ml-2 btn border-amber-500 md:border-2 bg-amber-500 hover:text-white transition ease-out duration-500">
                            Make an equiry
                        </button>

                        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <input type="text" name="listing" className=" hidden shadow appearance-none border rounded w-full py-2 px-1 text-black" />

                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />

                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />

                    <label className="block text-black text-sm font-bold mb-1">
                      Phone
                    </label>
                    <input type="text" name="phone" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    
                    <label className="block text-black text-sm font-bold mb-1">
                      Message
                    </label>
                    <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-amber-500 active:bg-amber-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Detail