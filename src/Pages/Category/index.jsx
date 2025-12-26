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

const Category = () => {
    
  return (
    <>
    <div className='cart bg-white shadow-md rounded-md p-5  flex items-center justify-between  '>
      <h1  className=' text-[20px] text-gray-800 font-bold'>Category List</h1>
       <div className='col w-[30%] ml-auto flex items-center gap-3'>
    <Button className='btn-blue !text-white !bg-green-600'>Export</Button>
    <Button className='btn-blue !text-white !bg-green-350 '><IoMdAdd className='text-white text-[20px]' />Add New Catgory</Button>
      
      </div>
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
                <th scope="col" className="!px-0 !py-3 font-medium text-black  ">
                    Image
                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Action

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

            <td className='px-0 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[100px] h-[75px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMd-2HZ3okGU89rRtb-yuvD8kP3RTHrtAg0w&s" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                </div>
                </td>
        </tr>

        <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-0 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[100px] h-[75px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://images.meesho.com/images/products/603815384/spugt_512.avif?width=360" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                </div>
                </td>
        </tr>
        <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-0 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[100px] h-[75px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://images.meesho.com/images/products/539921887/hblkg_512.avif?width=360" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                </div>
                </td>
        </tr>
        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-0 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[100px] h-[75px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://images.meesho.com/images/products/638006520/9rjli_512.avif?width=360" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                
            </div>
            </td>

           
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]'/>
                </Button>
                </div>
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

export default Category;
