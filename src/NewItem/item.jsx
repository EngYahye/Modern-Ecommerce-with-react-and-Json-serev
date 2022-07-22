import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../index.css'
const Item = () => {
    // const api=axios.create({baseUrl:'http://localhost:5000/'})
    const api=axios.create({baseURL:'http://localhost:5000/'})
    const[students,setstudents]=useState(null);
    const Deletedata=(id)=>{
        
        
        api.delete(`students/${id}`);
        const newstudent= students.filter((student)=>{
            return student.id !== id
        })

        setstudents(newstudent);

    }
    // const Deletedata=(id)=>{
        
        
    //     api.delete(`students/${id}`).then(res=>{
    //       console.log("data have been deleted")
         

    //     }).catch(error=>{
    //         console.log(error)
    //     })
      

    // }
    useEffect(()=>{
        api.get("students").then(response=>{
            setstudents(response.data)

        }).catch(error=>{
            console.log(error)
        })

       

    },[])



  return (
    <div>
        <h1>Products Item</h1>
        {!students && <p>No data found</p>}
        {students && students.map(student=>
               <div  className='mt-5' key={student.id}>
                <div >
                    <div> Name:{student.name}</div>
                    <div>phone:{student.phone}</div>
                    <button className='text-2xl mx-2 bg-red-500 py-2 px-4 
                    rounded text-white mt-1'>Edit</button>
                    <button className='text-2xl mx-2 bg-red-500 py-2 px-4 
                    rounded text-white mt-1' onClick={(e)=>Deletedata(student.id)}>Delete</button>
                    
                </div>

               </div>

        )}

     
    </div>
  )
}

export default Item