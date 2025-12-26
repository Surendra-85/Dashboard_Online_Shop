import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { RxDashboard } from "react-icons/rx";
import  Button from '@mui/material/Button';
import { FaImage } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheck } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";


import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';
const Sidebar = () => {
    const [submenuIndex ,setSubmenuIndex] = useState(null);
    const isOpenSubMenu =(index) =>{
        if(submenuIndex===index){
            setSubmenuIndex(null);


        }
        else{
            setSubmenuIndex(index);
        }
    };

    const context = useContext(MyContext);
  return (
    <>
    <div className={`sidebar fixed top-0 left-0 bg-[#fff]  h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4 w-[${context.isSidebarOpen===true ? '18%' :'0px'}]`}>
<div className="py-1 w-full">
    
    <Link to="/">
<div className="flex items-center justify-center gap-3">
    <div className="">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-svg-download-png-2945149.png?f=webp" alt="" className=' !h-[56px] !w-[55px] font-[900px] text-[70px]' />
    </div>
    <div className="">
        <h4 className="text-[22px] font-bold">Online Shop</h4>
        </div>
        </div>    
    </Link>
    </div>    


    <ul className='mt-4'>
    <li>
        <Link to="/">
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"   onClick={() => isOpenSubMenu(0)}>
<RxDashboard className='text-[18px] '/><span className=''>Dashboard</span>


</Button>
</Link>
            
            
            </li>



       



            <li>
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:!bg-[#f1f1f1]" onClick={() => isOpenSubMenu(1)}><FaImage className='text-[18px] '/><span>Home Slider</span>

<span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
    <FaAngleDown className={`transition-all ${submenuIndex ==1 ? 'rotate-180' : ''}`}/>
</span>


</Button>
            
            <Collapse isOpened={submenuIndex=== 1 ? true : false}>
            <ul className='w-full'>
                <li className='w-full'>
                <Link to="/homeSlider/list">

<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full text-[13px] !font-[400] !pl-8 flex gap-3 ">


    <span className='block !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Home Banner List
</Button>
</Link>
                </li>
                <li className='w-full'>
                <Link to="/homeSlider/add">

<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full  !text-[13px] !font-[400]  !pl-8 flex gap-3 ">

<span className='block  !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Add Home Banner

</Button>
</Link>
                </li>
            </ul>
            
            </Collapse>
            </li>

            <li>
            <Link to="/users">
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"   onClick={() => isOpenSubMenu(2)}>
<LuUsers className='text-[18px] '/><span className=''>Users</span>

</Button>
</Link>
            
            
            </li>


            <li>
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:!bg-[#f1f1f1]" onClick={() => isOpenSubMenu(3)}><RiProductHuntLine className='text-[18px] '/><span>Product</span>

<span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
    <FaAngleDown className={`transition-all ${submenuIndex ==3 ? 'rotate-180' : ''}`}/>
</span>


</Button>
            
            <Collapse isOpened={submenuIndex=== 3 ? true : false}>
            <ul className='w-full'>
                <li className='w-full'>
                <Link to="/product">
<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full text-[13px] !font-[400] !pl-8 flex gap-3 ">


    <span className='block !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Product List
</Button>
</Link>
                </li>
                <li className='w-full'>
                <Link to="/product/upload">
<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full  !text-[13px] !font-[400]  !pl-8 flex gap-3 ">
   

<span className='block  !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Add Product

</Button>
    </Link>
                </li>
            </ul>
            
            </Collapse>
            </li>


            <li>
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:!bg-[#f1f1f1]" onClick={() => isOpenSubMenu(4)}><TbCategory className='text-[18px] '/><span>Category</span>

<span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
<FaAngleDown className={`transition-all ${submenuIndex ==4 ? 'rotate-180' : ''}`}/>
</span>


</Button>
            
            <Collapse isOpened={submenuIndex=== 4 ? true : false}>
            <ul className='w-full'>
                <li className='w-full'>
                    <Link to="/category">
<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full text-[13px] !font-[400] !pl-8 flex gap-3 ">


    <span className='block !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span>  Category List
    </Button>
    </Link>
                </li>

                <li className='w-full'>
                <Link to="/category/add">
<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full  !text-[13px] !font-[400]  !pl-8 flex gap-3 ">

<span className='block  !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Add A Category 
</Button>
    </Link>
                </li>
                <li className='w-full'>
                <Link to="/category/subCat">

<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full  !text-[13px] !font-[400]  !pl-8 flex gap-3 ">

<span className='block  !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Sub category List 

</Button>
</Link>
                </li>
                <li className='w-full'>
                <Link to="/category/subCat/add">
                    
<Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full  !text-[13px] !font-[400]  !pl-8 flex gap-3 ">

<span className='block  !w-[5px] !h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'>{""}</span> Add A Sub Category 

</Button>
 </Link>               </li>
            </ul>
            
            </Collapse>
            </li>

            <li>
                <Link to="/order">
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"  onClick={() => isOpenSubMenu(5)}>
<IoBagCheck className='text-[18px] '/><span className=''>Orders</span>


</Button>
</Link>
            
            
            </li>

            <li>
<Link to="/login"><Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"  onClick={() => isOpenSubMenu(6)}>
<FaRegCircleUser  className='text-[18px] '/><span className=''>Login</span>


</Button></Link>
            
            
            </li>

  <li>
<Link to="/signup">
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"  onClick={() => isOpenSubMenu(7)}>
<FaRegCircleUser  className='text-[18px] '/><span className=''>Sign Up</span>


</Button></Link>
            
            
            </li>           
            <li>
<Button className="w-full  items-center !capitalize !justify-start flex gap-3  text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600]"  onClick={() => isOpenSubMenu(8)}>
<IoMdLogOut className='text-[18px] '/><span className=''>Logout</span>


</Button>
            
            
            </li>
            
            </ul>  
    </div>
    
    </>
  )
}

export default Sidebar;
