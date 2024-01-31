import React, { useEffect, useState } from 'react'
import axiosInstance from '../helper/axiosInstence'
import { Link, useParams } from 'react-router-dom'

const ViewStudentdetails = () => {

    let token = sessionStorage.getItem("token")
    let {id} = useParams()
    let [details , setDetails] = useState({}) ; 

    useEffect(()=>{
        let fetchData = async()=>{
            let {data2} = await axiosInstance.get(`/students/details/get/${id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            let finalData = await data2.data ; 
            console.log(finalData);
            setDetails(finalData) ; 
            
        }
        fetchData()
    },[])


    // let handleDelete = ()=>{
    //               let data =   axiosInstance.delete(`/academymanagers/delete/${id}` , {
    //                 headers : {
    //                     Authorization : `Bearer ${token}`
    //                 }
    //               })
    //               console.log(data);
    //                 window.location.assign("/dashboard/viewmanager")
    // }



  return (
    <div>
            <h1>{details.studentname}</h1>
            {/* <button>
                <Link to={`/dashboard/editmanager/${manager.id}`}>EDIT</Link>
            </button> */}
            <button>ADD Student </button>
            {/* <button onClick={handleDelete}>DELETE</button> */}
    </div>
  )
}

export default ViewStudentdetails
