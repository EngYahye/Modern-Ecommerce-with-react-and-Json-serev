import React, {useState} from 'react'
import '../../index.css'
import { AnimatePresence,motion } from "framer-motion"
import Loader from './Loader'
import {MdCloudUpload,MdAttachMoney,MdDelete} from 'react-icons/md'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const NewItem = () => {
  const[title,setTitle]= useState("")
  const[price,setprice]= useState("")
  const [imageAsset, setImageAsset] = useState(null);
  


  const[loading,setloading]= useState(false)
 
  

  const selectfile= async(e)=>{
 const files=e.target.files;
 const data =new FormData();
 data.append('file',files[0])
 data.append('upload_preset','products')
 setloading(true);

 const res=await fetch("https://api.cloudinary.com/v1_1/yaxyash/image/upload",{
  method:'POST',
  body:data
 })


 const file=await res.json()
 console.log(file);
 setImageAsset(file.secure_url);
 setloading(false);

    
    // const base64=await convertToBase64(image);
    // setImageAsset(base64);
    

    // e.target.value="";

  }

  

  const convertToBase64=(image)=>{
    return new Promise((resolve,reject)=>{
      const fileReader =new FileReader();
      if(!image){
        alert("please select image");
      }
      else{
        fileReader.readAsDataURL(image);
        fileReader.onload=()=>{
          resolve(fileReader.result)
        }
      }

      fileReader.onerror=(error)=>{
        reject(error);
      }
    })
  }

  const deletefile=(e)=>{
    e.preventDefault();
    setImageAsset(null);
  }

  // const decodefileBase64=(base64String)=>{
  //   return decodeURIComponent(
  //     atob(base64String)
  //     .split("")
  //     .map(function (c){
  //       return "%" + ("00"+c.charCodeAt(0).toString(16).slice(-2))
  //     })
  //     .join("")
  //   )

  // }

  // const decodeBase64=decodefileBase64()

  // const convertToImage = (array) => {
  //   let arrayBufferView = new Uint8Array(array);
  //   let blob = new Blob([arrayBufferView], {type: "image/*" });
  //   let urlCreator = window.URL || window.webkitURL;
  //   let imageUrl = urlCreator.createObjectURL(blob);
  //   setImageAsset(imageUrl);
  //   }
  //   // Server get logic
    

  // save data to json server
  const navigate=useNavigate();
  const api=axios.create({baseURL:'http://localhost:5001/'})

  const saveData=(event)=>{
    event.preventDefault();
    // convertToImage(setImageAsset());
    const data ={title,price,imageAsset};
    api.post("products",data).then(response=>{
      
        // console.log(response.data);
        navigate('/product')

    }).catch(error=>{
        console.log(error)
    })

    
}
  return (

    
    <section>
      <form onSubmit={saveData} >

      <div className="flex flex-col items-center justify-center max-w-5xl px-10 mx-auto my-36">
        <div className="w-[80%] flex flex-col items-center justify-center p-2 border gap-4 border-gray-300 rounded-lg">
          
        
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give me a title..."
              className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
            />
          </div>
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-300 cursor-pointer">
            {loading ? (
              <Loader/>
            ) : (
              <>
                {!imageAsset ? (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <MdCloudUpload className="text-gray-500 group-hover:text-gray-700 text-3xl" />
                      <p className="text-gray-500 group-hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-image"
                      accept="image/*"
                      
                      onChange={selectfile}
                      className="w-0 h-0"
                    />
                  </label>
                ) : (
                  <div className="relative h-full">
                   {imageAsset &&  <img
                      src={imageAsset}
                      alt=""
                      className="h-full w-full object-cover"
                      
                    />}
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl
                  cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"

                  onClick={deletefile}
                     
                    >
                      <MdDelete className="text-white" />
                      
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdAttachMoney className="text-gray-700 text-2xl" />
              <input
                type="text"
                required
                placeholder="Add the price..."
                className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
          
          <div className="flex items-center w-full">
            <button
              type="submit"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
              // onClick={saveDetails}
            >
              Save
            </button>
          </div>
        
      
          </div>
          </div>

      </form>



      
    </section>
    
     
     
  )
}

export default NewItem