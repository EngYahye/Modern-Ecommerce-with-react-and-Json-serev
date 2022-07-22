import './app.css'
import './index.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const StudentList=()=>{
    
    const api=axios.create({baseURL:'http://localhost:3500/'});
    const[Students,setstudents]=useState("hello");
    useEffect(()=>{
        
        setTimeout(()=>{
            
            api.get('students').then(response=>{
                setstudents(response)
                
    
            }).catch(err=>{
                console.log(err)
            })

        },1000)
            
    

        
       
    },[])
    console.log(Students)

    return(
        <>
        <div>
        <h1 className='text-3xl'>Students lists</h1>

        {Students.map((student)=>(
            <div>{student.name}</div>
        ))}

      
     

        
    </div>
    </>
   
    )

}

export default StudentList;