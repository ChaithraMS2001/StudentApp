import React, { useState } from 'react'
import "./AddStudent.module.css"
import axiosInstance from '../helper/axiosInstence'
import { toast } from 'react-toastify'
import STYLE from "./AddStudent.module.css"
import { Link } from 'react-router-dom'
const AddStudent = () => {
    let [detailsData , setDetailsData] = useState({
        id: "",
        studentname: "",
        studentphone: "" ,
        studentemail: "",
        web: "",
        corejava: "" ,
        advancejava: "",
        apti: "",
        msql: "",
        percentage: "",
        total: "",
        result: ""
    }) 
    let data1 = (e)=>{
        setDetailsData({...detailsData, [e.target.name]:e.target.value})
    }
    let handleSubmit=(e) =>{
        try{
          e.preventDefault()
            axiosInstance.post("/students/marks",detailsData)
            toast.success(`students ${detailsData.studentname} registered successfully !`)
        }
        catch (err) {
          console.log(err);
          alert("Fill the details properly")
  }
    }
    
    
  return (
    <div className={STYLE.formholder}>
      <form className={STYLE.form} action="" onSubmit={handleSubmit}>


  <div className={STYLE.formitems}>
        <label htmlFor="">Student Name:</label>
        <input  type="text" name='studentname' onChange={data1} /> </div>
<div  className={STYLE.formitems}>
        <label htmlFor="">Student phone</label>
        <input type="number"  name="studentphone" id="" onChange={data1}/></div> 
<div  className={STYLE.formitems}>
        <label htmlFor="">Email:</label>
        <input  type="email" name='studentemail' onChange={data1} /></div> 


 
 
        <h2>Student Marks</h2>
        <br />
        <div  className={STYLE.formitems}>
        <label htmlFor="">Web</label>
        <input type="number" name="web" id="" onChange={data1} /> </div> 
        <div  className={STYLE.formitems}>
        <label htmlFor="">Java</label>
        <input type="number"  name="corejava" id="" onChange={data1}/></div> 
        <div  className={STYLE.formitems}>
        <label htmlFor="">Advance Java</label>
        <input type="number" name="advancejava" id="" onChange={data1}/> </div> 
        <div  className={STYLE.formitems}>
        <label htmlFor="">Apti</label>
        <input type="number" name="apti" id="" onChange={data1} /> </div>
        <div  className={STYLE.formitems}>
        <label htmlFor="">MySql</label>
        <input type="number"  name="msql" id="" onChange={data1}/> </div>
        
        <br />

        <button className={STYLE.s2}><Link to={"/ViewDetails"}>Submit</Link></button>
      </form>
    </div>
  )
}

export default AddStudent;