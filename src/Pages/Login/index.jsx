import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { CgLogIn } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Login = () => {
    const [isPasswordShaow,setIsPasswordShaow] =useState(false);
    
  return (
   <>
      <section className='bg-[#f1f1f1] fixed  top-0 left-0 w-full h-full' >
        <header className='w-full fixed top-0 left-0 px-4 py-2  flex items-center justify-between z-50'>
        <div className="flex items-center gap-4">
        <div className="">

        <Link to='/'>
<img src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-svg-download-png-2945149.png?f=webp" alt=""  className='w-[50px]' />
</Link>

</div>


<div className="">
<h4 className="text-[22px] font-bold">Online Shop</h4>


</div>
</div>


        <div className="flex items-center gap-2">
          <NavLink to='/login' exact={true}  activeClassName="isActive">
          <Button className='!rounded-full !text-white !px-5 gap-2 !bg-blue-600'><CgLogIn className='text-[18px] ' />Login</Button>
          </NavLink>
          <NavLink to='/signup' exact={true}  activeClassName="isActive">

          <Button className='!rounded-full  !px-5 gap-2   !bg-green-600 !text-white '><FaRegUser className='text-[18px] ' />SignUp</Button>
          </NavLink>
      
          </div>
      
        </header>
       

        <img src="https://img.freepik.com/free-vector/abstract-shiny-lines-white-gray-minimal-background-design_84443-2824.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='w-full   relative ' />
<div className="loginBox  cart  w-[45%] h-[300px] !mx-auto mt-5 absolute top-0  left-100">
<div className='text-center '>
  <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-svg-download-png-2945149.png?f=webp" alt=""  className='m-auto w-[80px] mt-8'/>


</div>
<h1 className='text-center text-[35px] font-[800] mt-4'>
  Welcome  Back! Sign in With your credentials
</h1>

<div className="flex items-center w-[100%] !h-[40px] justify-center gap-8">
<Button className='flex gap-3 w-[40%]  !h-[40px] !bg-white btn-lg !text-black !mt-8' ><FcGoogle className='text-[20px]' />Signin with Google</Button>
<Button className='flex gap-3 w-[40%]  !h-[40px] !bg-white btn-lg !text-black !mt-8' ><BsFacebook className='text-[20px]' />Signin with Facebook</Button>

</div>
<br />

<div className="w-full  flex items-center justify-center  gap-3  mt-3">
  <span className='flex items-center w-[100px] h-[1px] bg-black '></span>
  <span className='text-[14px]'>Or ,Sign in with your email</span>
  <span className='flex items-center w-[100px] h-[1px] bg-black'></span>

</div>
                <form className='w-full px-8 mt-3 ' >
                    <div className="form-group w-full mb-4 " >
                      <h4  className='text-[14px] font-[500]'>Email</h4>
                      <input type="email"  className='w-full h-[45px] border-black rounded-md focus:border-black focus:outline-none px-3  bg-white' />
                  
                         </div>
                         <div className="form-group w-full mb-4 " >
                      <h4  className='text-[14px] font-[500]'>Password</h4>
                      <input type={isPasswordShaow===false ? 'password' : 'text'}  className='w-full h-[45px] border-black rounded-md focus:border-black focus:outline-none px-3 !bg-white' />
                      <Button className=' !absolute top-[0p] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35]!rounded-full !text-gray-600' onClick={() => 
                            setIsPasswordShaow(!isPasswordShaow)
                        }>
                            
                           {
                            isPasswordShaow===false ? (<IoMdEye className='text-[20px] ' />): (<IoMdEyeOff className='text-[20px]

                              ' />)
                           } 
                           </Button>
                  
                         </div>

                         <div className="form-group w-full mb-4 flex items-center justify-between  text-[15px]" >
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />

                      <Link className='text-blue-800 text-[15px] hover:underline hover:text-black'>Forgot Password</Link>
                         </div>


                       <Button className='btn-blue w-full hover:bg-black'>SignUp</Button>
                    
                  

                </form>

            </div>
      </section>
     
     
    </>
  )
}

export default Login;