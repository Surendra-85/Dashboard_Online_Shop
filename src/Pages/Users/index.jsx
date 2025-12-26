import { Button } from '@mui/material';
import React from 'react'
import Pagination from '@mui/material/Pagination';

import { Link } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import Checkbox from '@mui/material/Checkbox';
import { IoMdAdd } from 'react-icons/io';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Users = () => {
    
  return (
    <>
    <div className='cart bg-white shadow-md rounded-md p-5  flex items-center justify-between  '>
      <h1  className=' text-[20px] text-gray-800 font-bold'>Users List</h1>
       
    </div>
    
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">    
      

<div className="flex items-center w-full pl-5 pr-5 ">
       
    </div>
    
   
    
<div className="relative overflow-x-auto !mt-5">
                <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
        <thead className=" text-body bg-neutral-secondary-soft  !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
            <tr>
                <th scope="col" className="!px-6 !pr-0 !py-3 font-medium text-black ">
                <Checkbox {...label}size='small'  />

                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black  ">
                   User Image
                </th>

                <th scope="col" className="!px-6 !py-3 font-medium text-black  ">
                    User Name
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black  ">
                    User Email
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black  ">
                    Usre Phone No
                </th>
                
            </tr>
        </thead>
       <tbody>
        <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-6 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[60px] h-[60px] rounded-full overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>Surendra</span>
                    
                </td>
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>skbmzp365@gmail.com</span>
                </td>
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>8127938279</span>
                </td>
        </tr>

        
        <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-6 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[60px] h-[60px] rounded-full overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>Surendra</span>
                    
                </td>
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>skbmzp365@gmail.com</span>
                </td>
                <td className='px-6 py-2'>
                    <span className='font-[600] text-[16px]'>8127938279</span>
                </td>
        </tr>
        


       
       </tbody>
    </table>
              </div>

<div className='flex items-center justify-end pt-5 pb-5'>
    
<Pagination count={10} color="primary" />
</div>
</div>
    </>
  )
}

export default Users;
