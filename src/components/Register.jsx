import React, { useState } from 'react'
import STYLE from "./register.module.css"
import axiosInstance from '../helper/axiosInstence'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Register = () => {

        let navigate=useNavigate()
        let [studentData, setstudentData] = useState({
                username: "",
                password: ""
        })
        let data = (e) => {
                setstudentData({ ...studentData, [e.target.name]: e.target.value })
        }
        let handleRegister = async(e) => {
                e.preventDefault();
               try{
                let payload = studentData ; 
                let data = await axiosInstance.post("/students", payload);
                toast.success(data.message);
                navigate('/login');
               }
               catch(err)
               {
                alert("please enter")
               }       
        }

        return (
                <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleRegister}>
                                <h2>Register User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='username' onChange={data} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="password">Password </label>
                                        <input type="password" id='password' name='password' onChange={data}/>
                                </div>
                                <button className={STYLE.register} >Register</button>
                        </form>
                </div>
        )
}
export default Register