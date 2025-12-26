import { Button } from '@mui/material';
import React from 'react'
import Pagination from '@mui/material/Pagination';
import Progress from '../../Component/ProgressBar';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import Checkbox from '@mui/material/Checkbox';
import { IoMdAdd } from 'react-icons/io';
import SearchBox from '../../Component/SearchBox';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Product = () => {
    const [categoryFilterVal, setcategoryFilterVal] = React.useState('');
    const handleChangeCatFilter = (event) => {
        setcategoryFilterVal(event.target.value);
    };
  return (
    <>
    <div className='cart bg-white shadow-md rounded-md p-5  flex items-center justify-between  '>
      <h1  className=' text-[20px] text-gray-800 font-bold'>Products</h1>
       <div className='col w-[30%] ml-auto flex items-center gap-3'>
    <Button className='btn-blue !text-white !bg-green-600'>Export</Button>
    <Button className='btn-blue !text-white !bg-green-350 '><IoMdAdd className='text-white text-[20px]' />Add Product</Button>
      
      </div>
    </div>
    
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">    
      

<div className="flex items-center w-full pl-5 pr-5 ">
    <div className='col w-[20%]'>
    <h4  className='font-[600] text-[17px] mb-3 mt-4' > Catgory By</h4>
        <Select

        className='w-full'
        size='small'
          labelId="demo-simple-select-standard-label" 
          id="demo-simple-select-standard"
          value={categoryFilterVal}
          onChange={handleChangeCatFilter}
          label="Category"
        >
          <MenuItem value="">
            <em>Men</em>
          </MenuItem>
          <MenuItem value={10}>Men</MenuItem>
          <MenuItem value={20}>Women</MenuItem>
          <MenuItem value={30}>Shirt</MenuItem>
        </Select>
      
    </div>
    <div className="col- w-[20%] ml-auto">
        <SearchBox/>
    </div>
   
    
</div>
<div className="relative overflow-x-auto !mt-5">
                <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
        <thead className=" text-body bg-neutral-secondary-soft  !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
            <tr>
                <th scope="col" className="!px-6 !pr-0 !py-3 font-medium text-black ">
                <Checkbox {...label}size='small'  />

                </th>
                <th scope="col" className="!px-0 !py-3 font-medium text-black  ">
                    Product
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black whitespace-nowrap">
                    Category
                </th>
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Sub Category
                </th>

               
                
                <th scope="col" className="!px-3  !py-3 font-medium text-black whitespace-nowrap">
                Price

                </th>
                
               

                
                

                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Rating

                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Action

                </th>
               
            </tr>
        </thead>
       <tbody>
        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-2 !pr-0'>
            <div className='w-[60px]'>
            <Checkbox {...label} size="small" />
            </div>
            </td>

            <td className='px-0 py-2'>
            <div className="flex item-center gap-4 w-[300px] ">
                <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlpj06Q7noldWGv-2X2Su96E3DewAbNAfJwNtHUqIXIcRds34M06rpj9gDOCYEHFSmll9OP1inT8Jb_GQP1O6JpqxTdws9qY2ojnGUvQNBARZ3q8VU7SfAaLt0d4c07O1eIB4Jyu-Jaw&usqp=CAc" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                 <div className='info w-[75%]'>
               
                    <h3 className='font-[600] text-[12px]'>
                        
                    <Link to="/product/355">Lorem ipsum dolor sit amet consectetur, adipisicing | elit. Labore, nobis? </Link></h3>

                    <span className='text-[10px]'>Books</span>
                 </div>
            </div>
            </td>

            <td className='px-6 py-2'>
Electornics
            </td>
            <td className='px-6 py-2'>
                Women
                </td>
                <td className='px-3 py-2'>
                <div className='flex item-center gap-1 flex-col'>
                <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    $4000
                </span>
                <span className='price line-through text-red-500 text-[14px] font-[500]'>
                    $4000
                </span>
                </div>
                </td>
                <td className='px-3 py-2'>
                <p className='text-[14px] w-[100px]'><span className='font-[600]'>234 sale</span></p>
                <Progress  value={40} type="success"/>
                </td>
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-20px]'/>
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
                <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlpj06Q7noldWGv-2X2Su96E3DewAbNAfJwNtHUqIXIcRds34M06rpj9gDOCYEHFSmll9OP1inT8Jb_GQP1O6JpqxTdws9qY2ojnGUvQNBARZ3q8VU7SfAaLt0d4c07O1eIB4Jyu-Jaw&usqp=CAc" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                 <div className='info w-[75%]'>
               
                    <h3 className='font-[600] text-[12px]'>
                        
                    <Link to="/product/355">Lorem ipsum dolor sit amet consectetur, adipisicing | elit. Labore, nobis? </Link></h3>

                    <span className='text-[10px]'>Books</span>
                 </div>
            </div>
            </td>

            <td className='px-6 py-2'>
Electornics
            </td>
            <td className='px-6 py-2'>
                Women
                </td>
                <td className='px-3 py-2'>
                <div className='flex item-center gap-1 flex-col'>
                <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    $4000
                </span>
                <span className='price line-through text-red-500 text-[14px] font-[500]'>
                    $4000
                </span>
                </div>
                </td>
                <td className='px-3 py-2'>
                <p className='text-[14px] w-[100px]'><span className='font-[600]'>234 sale</span></p>
                <Progress  value={40} type="success"/>
                </td>
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-20px]'/>
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
                <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlpj06Q7noldWGv-2X2Su96E3DewAbNAfJwNtHUqIXIcRds34M06rpj9gDOCYEHFSmll9OP1inT8Jb_GQP1O6JpqxTdws9qY2ojnGUvQNBARZ3q8VU7SfAaLt0d4c07O1eIB4Jyu-Jaw&usqp=CAc" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                 <div className='info w-[75%]'>
               
                    <h3 className='font-[600] text-[12px]'>
                        
                    <Link to="/product/355">Lorem ipsum dolor sit amet consectetur, adipisicing | elit. Labore, nobis? </Link></h3>

                    <span className='text-[10px]'>Books</span>
                 </div>
            </div>
            </td>

            <td className='px-6 py-2'>
Electornics
            </td>
            <td className='px-6 py-2'>
                Women
                </td>
                <td className='px-3 py-2'>
                <div className='flex item-center gap-1 flex-col'>
                <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    $4000
                </span>
                <span className='price line-through text-red-500 text-[14px] font-[500]'>
                    $4000
                </span>
                </div>
                </td>
                <td className='px-3 py-2'>
                <p className='text-[14px] w-[100px]'><span className='font-[600]'>234 sale</span></p>
                <Progress  value={40} type="success"/>
                </td>
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-20px]'/>
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
                <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlpj06Q7noldWGv-2X2Su96E3DewAbNAfJwNtHUqIXIcRds34M06rpj9gDOCYEHFSmll9OP1inT8Jb_GQP1O6JpqxTdws9qY2ojnGUvQNBARZ3q8VU7SfAaLt0d4c07O1eIB4Jyu-Jaw&usqp=CAc" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                 <div className='info w-[75%]'>
               
                    <h3 className='font-[600] text-[12px]'>
                        
                    <Link to="/product/355">Lorem ipsum dolor sit amet consectetur, adipisicing | elit. Labore, nobis? </Link></h3>

                    <span className='text-[10px]'>Books</span>
                 </div>
            </div>
            </td>

            <td className='px-6 py-2'>
Electornics
            </td>
            <td className='px-6 py-2'>
                Women
                </td>
                <td className='px-3 py-2'>
                <div className='flex item-center gap-1 flex-col'>
                <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    $4000
                </span>
                <span className='price line-through text-red-500 text-[14px] font-[500]'>
                    $4000
                </span>
                </div>
                </td>
                <td className='px-3 py-2'>
                <p className='text-[14px] w-[100px]'><span className='font-[600]'>234 sale</span></p>
                <Progress  value={40} type="success"/>
                </td>
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-20px]'/>
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
                <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                <Link to="/product/355">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlpj06Q7noldWGv-2X2Su96E3DewAbNAfJwNtHUqIXIcRds34M06rpj9gDOCYEHFSmll9OP1inT8Jb_GQP1O6JpqxTdws9qY2ojnGUvQNBARZ3q8VU7SfAaLt0d4c07O1eIB4Jyu-Jaw&usqp=CAc" alt="" className='w-full group-hover:scale-105 transition-all' />

                    </Link>
                </div>

                 <div className='info w-[75%]'>
               
                    <h3 className='font-[600] text-[12px]'>
                        
                    <Link to="/product/355">Lorem ipsum dolor sit amet consectetur, adipisicing | elit. Labore, nobis? </Link></h3>

                    <span className='text-[10px]'>Books</span>
                 </div>
            </div>
            </td>

            <td className='px-6 py-2'>
Electornics
            </td>
            <td className='px-6 py-2'>
                Women
                </td>
                <td className='px-3 py-2'>
                <div className='flex item-center gap-1 flex-col'>
                <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    $4000
                </span>
                <span className='price line-through text-red-500 text-[14px] font-[500]'>
                    $4000
                </span>
                </div>
                </td>
                <td className='px-3 py-2'>
                <p className='text-[14px] w-[100px]'><span className='font-[600]'>234 sale</span></p>
                <Progress  value={40} type="success"/>
                </td>
                <td className='px-6 py-2'>
                    <div className="flex items-center gap-1">
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <FaRegEye className='text-[rgba(0,0,0,0.7)] text-20px]'/>
                </Button>
                <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1]  !border-[rgba(0,0,0,0.4)] !rounded-full hover:bg-[#f1f1f1] !min-w-[35px]" >
                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-20px]'/>
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

export default Product;
