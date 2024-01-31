import React, { useEffect, useState } from 'react'
import axiosInstance from '../helper/axiosInstence'
import STYLE from "./viewdetails.module.css"
import { Link } from 'react-router-dom'

const ViewDetails = () => {

  let token = sessionStorage.getItem("token")
  let [details , setDetails] = useState([])

    useEffect(()=>{
      let fetchData = async()=>{
          let {data2} = await axiosInstance.get("/students/details" , {
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          setDetails(data2.data2)
      }
      fetchData()
    },[])



  return (
    
    <div className={STYLE.mainblock}>
      
         {details.map((x)=>{
            return (
              <div className={STYLE.container}>
                    <h2>{x.studentname}</h2>
                    <button>
                      <Link to={`/ViewStudentdetails/${x.id}`}>View</Link>
                    </button>
              </div>
            )
        })}

        
    </div>
    
  )
}

export default ViewDetails