import React from 'react'
import logo from '../Photos/Registration/logo.png'
import { Link } from "react-router-dom";
import logo1 from "../Photos/Registration/logo1.png"
import '../Css/Registration.css'
import logo2 from '../Photos/Registration/logo2.png'

export default function Registration() {
  return (
    <>
<div className='register'>
    <div className='row'>
        <div className='col-md-5'>
            <div className='img-box'>
            <img draggable="false" className='image1' src={logo}  alt=""/>
            <img draggable='false' className='image' src={logo1} alt=""/>
            <h1 className='img-heading'>Feel <span>Safe</span> Everywhere</h1>
            </div>
      
        </div>
        <div className='col-md-6'>
        <div class="navbar">

  <img  className='img' src={logo2}  alt=""/>


  <Link to="#" className='signup'>Sign Up <span>/</span> <Link to="/login" className='login'>Login</Link>
  </Link>
      
      
  
  
</div>
<div className='container'>
    <div className='row register-form'>
        <div className='col-md-7'>
       
    
          <input type='text' className='text ' placeholder='Hospital Name'></input>
          <input type='text' className='text mt-4 ' placeholder='Address'></input>
          <input type='text' className='text mt-4' placeholder='City'></input>
          <input type='text' className='text mt-4' placeholder='State'></input>
          <input type='text' className='text mt-4 ' placeholder='Pincode'></input>
          <input type='text' className='text mt-4 ' placeholder='Hospital Registration Date'></input>
          <input type='text' className='text mt-4' placeholder='Number of Ambulance Available'></input>
        </div>
        <div className='col-md-5 '>
      
    
       
          <input type='text' className='text' placeholder='Email Id'></input>
          <input type='text' className='text mt-4 ' placeholder='Phone Number'></input>
          <input type='text' className='text mt-4 ' placeholder='Hospital Register Number'></input>
    
          <label className='text mt-4'>Registration Certificate Upload</label>
          <div className='line'></div>
          <input type='file' className='mt-2'></input>
          <input type='text' className='text mt-2 ' placeholder='Emergency Ward Number'></input>
          <input type='text' className='text mt-4 ' placeholder='Create Password'></input>
          <input type='text' className='text mt-4 ' placeholder='Confirm Password'></input>
       
        </div>
        <div className='signupbtn mt-4'>
            <button className='btn'>Sign Up</button>
        </div>
    </div>
</div>

        </div>
    </div>
</div>

    </>
  )
}
