import React from 'react'
import logo from '../Photos/Registration/logo.png'
import { Link } from "react-router-dom";
import logo1 from "../Photos/Registration/logo1.png"
import '../Css/Login.css'
import logo2 from '../Photos/Registration/logo2.png'
import '../Css/Registration.css'

export default function Login() {
  return (
    <>
<div className='login'>
    <div className='row'>
    <div className='col-md-5'>
            <div className='img-box1'>
            <img draggable="false" className='image2' src={logo}  alt=""/>
            <img draggable='false' className='image3' src={logo1} alt=""/>
            <h1 className='img-heading'>Feel <span>Safe</span> Everywhere</h1>
            </div>
      
        </div>
        <div className='col-md-6'>
            <div className='container'>
            <div class="navbar">

<img  className='img' src={logo2}  alt=""/>


<Link to="#" className='signup'>Sign Up <span>/</span> <Link to="/login" className='login'>Login</Link>
</Link>
    <div className='container'>
    <div className='row'>
      <div className=' col-12 col-md-12 m-auto pt-2 ps-5'>
        <div className='login-box g-0'>
<h2 className='log-head'>
  Welcome to SIcu-aura
</h2>
<p className='para-heading'>You one stop safety solutions using innovative technology</p>
<div className='log-form'>
  
<input type='text  ' className='text mt-4 text-input ' placeholder='Hospital Name'></input>
<input type='text ' className='text mt-4 text-input' placeholder='Email Id'></input>
<input type='text' className='text mt-4 text-input ' placeholder=' Password'></input>
          <input type='text' className='text mt-4 text-input  mb-4' placeholder='Special Access Code'></input>
</div>
        </div>
      </div>
    </div>
    <div className='loginbtn mt-4'>
            <button className='btn'>Login</button>
        </div>
    </div>
    

</div>


            </div>
        

</div>
    </div>
</div>
    </>
  )
}
