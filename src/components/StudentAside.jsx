import React from 'react'
import { Link } from 'react-router-dom'
import STYLE from "./dashboard.module.css"
const StudentAside = () => {
  return (
    <div className={STYLE.adminaside}>
      <h3>Student Details</h3>
      <ul>
        <li> 
            <Link to={"/StudentAside"}>ADD DETAILS</Link>
        </li>
      </ul>
    </div>
  )
}

export default StudentAside
