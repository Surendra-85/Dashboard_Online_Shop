import React, { useState } from 'react'
import DashboardBoxes from '../../Component/DashboardBoxes';
import  Button  from '@mui/material/Button';
import { FaPlus } from 'react-icons/fa';


import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Badge from '../../Component/Badge';
import Banner from '../../assets/images/banner.jpg'
import Pagination from '@mui/material/Pagination';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Checkbox from '@mui/material/Checkbox';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import Progress from '../../Component/ProgressBar';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';


  
  const  columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
 
  
  function createData(
    name,
    code,
    population,
    size
  ) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];
  

const Dashboard = () => {
    const[isOpenOrderProdct ,setIsOpenOrderProduct] = useState(null);
    const isShowOrderProdct =(index) =>{

        if(isOpenOrderProdct === index){
        setIsOpenOrderProduct(null);

        }else{
            setIsOpenOrderProduct(index);

        }
    };


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [categoryFilterVal, setcategoryFilterVal] = React.useState('');

    const handleChangeCatFilter = (event) => {
        setcategoryFilterVal(event.target.value);
    };
  
  
    const handleChangePage = (event, newPag) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  

    
  const[chart1Date ,setChart1Data] =useState(
    // #region Sample data
[
  {
    name: 'JAN ',
    TotalUsers: 2000,
    TotalSales: 400,
    amt: 200,
  },
  {
    name: 'FAB',
    TotalUsers: 2500,
    TotalSales: 1398,
    amt: 210,
  },
  {
    name: 'MARCH',
    TotalUsers: 3000,
    TotalSales: 4800,
    amt: 290,
  },
  {
    name: 'APRIL',
    TotalUsers: 4780,
    TotalSales: 5908,
    amt: 2000,
  },
  {
    name: 'MAY',
    TotalUsers: 2090,
    TotalSales: 400,
    amt: 2881,
  },
  {
    name: 'JUNE',
    TotalUsers: 1390,
    TotalSales: 2000,
    amt: 2900,
  },
  {
    name: 'JULY',
    TotalUsers: 3490,
    TotalSales: 4300,
    amt: 200,
  },
  {
    name: 'AUGU',
    TotalUsers: 390,
    TotalSales: 4400,
    amt: 300,
  },
  {
    name: 'SEPT',
    TotalUsers: 3890,
    TotalSales: 4300,
    amt: 500,
  },
  {
    name: 'OCT',
    TotalUsers: 3490,
    TotalSales: 4900,
    amt: 700,
  },
  {
    name: 'NOV',
    TotalUsers: 3990,
    TotalSales: 4300,
    amt: 900,
  },
  {
    name: 'DEC',
    TotalUsers: 3490,
    TotalSales: 4300,
    amt: 2000,
  },
]
// #endregion
  );
  return (
    < >
 <div  className="w-full bg-white  p-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
    <div className="info">

        <h1 className="text-[30px] font-bold leading-10 mb-3">Good Morning.<br/>
        Cameron &#128075;</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio illum voluptatum placeat temporibus earum ea expedita consequatur, similique natus quam. </p>
        <br/>
        <Button className="btn-blue !capitalize"><FaPlus/>Add Product</Button>
       
            
    </div>
    <img src={Banner} alt="" className='w-[300px]'/>
 </div>
    <DashboardBoxes/>


    <div className="card my-3 sm:rounded-lg bg-white">
     


      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 py-4">
        <div>
            
        <div className="flex items-center justify-between px-5 py-2">
        <h2 className='text-[20px] font[700]'>Recent Orders</h2>
      </div>
        </div>
        <div className="flex items-center w-full pl-5 pr-5">
    <div className='col w-[20%]'>
    <h4  className='font-[600] text-[14px] mb-3' > Catgory By</h4>
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
    <div className='col w-[30%] ml-auto flex items-center gap-3 mt-7'>
    <Button className='btn-blue !text-white !bg-green-600'>Export</Button>
    <Button className='btn-blue !text-white !bg-green-350 '>Add Product</Button>
      
      </div>
    
</div>

        
        <div className="pr-3">

            
        <div class="relative" >
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none ">
              
            </div>
        </div>
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only ">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 pl-2 ">
                    ORDER ID
                </th>
                <th scope="col" class="px-6 py-3 pl-2">
                    CUSTOMER
                </th>
                <th scope="col" class="px-6 py-3 pl-17">
                    ITEMS
                </th>
                <th scope="col" class="px-6 py-3 pr-3">
                    PRICE
                </th>
                <th scope="col" class="px-6 py-3 ">
                    CREATED
                </th>
                <th scope="col" class="px-6 py-3">
                    MODIFIED
                </th>
                <th scope="col" class="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                  ACTION
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-5 py-4">
                    #235671
                </td>
                <th scope="row" class="flex items-center  py-5 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" alt="Jese image" />
                    <div class="ps-2">
                        <div class="text-base font-semibold">Surendra</div>
                        <div class="font-normal text-gray-500">skbmzp365@gmail.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4 pl-17">
                    83
                </td>
                <td class="px-6 py-4">
                  $457.00
                </td>
                <td class="px-6 py-4 ">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                <h6 className='text-[12px]'> August 5, 2026<br/>
                5:01 PM</h6>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit </a>
                </td>
            </tr>
           
        </tbody>
    </table>
    <div className="d-flex  items-center justify-center py-4 px-4">
    <p className='text-[15px]'>showing <b>12</b>of <b>60</b> results</p>
<Pagination count={10} color="primary"  className='pagination justify-end items-end mx-auto' showFirstButton showLastButton style={{marginLeft:"550px"}} />

  </div>
</div>

    

    </div>



    <div className="card my-4 shadow-md sm:rounded-lg bg-white">    
        <div className="flex items-center justify-between px-5 py-2">
        <h2 className='text-[20px] font[700]'>Products {""}
            <span className='font-[400] text-[14px]'>(Tailwind Css Table)</span>
        </h2>




</div>

<div className="flex items-center w-full pl-5 pr-5">
    <div className='col w-[20%]'>
    <h4  className='font-[600] text-[14px] mb-3' > Catgory By</h4>
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
    <div className='col w-[30%] ml-auto flex items-center gap-3 mt-7'>
    <Button className='btn-blue !text-white !bg-green-600'>Export</Button>
    <Button className='btn-blue !text-white !bg-green-350 '>Add Product</Button>
      
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







<div className="card my-4 shadow-md sm:rounded-lg bg-white">    
        <div className="flex items-center justify-between px-5 py-2">
        <h2 className='text-[20px] font[700]'>Products {""}
            <span className='font-[400] text-[14px]'>(Material Css Table)</span>
        </h2>


</div>

<div className="flex items-center w-full pl-5 pr-5">
    <div className='col w-[20%]'>
    <h4  className='font-[600] text-[14px] mb-3' > Catgory By</h4>
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
    <div className='col w-[30%] ml-auto flex items-center gap-3 mt-7'>
    <Button className='btn-blue !text-white !bg-green-600'>Export</Button>
    <Button className='btn-blue !text-white !bg-green-350 '>Add Product</Button>
      
      </div>
    
</div>
<TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />



</div>





    <div className="card my-4 shadow-md sm:rounded-lg bg-white">    
        <div className="flex items-center justify-between px-5 py-2">
        <h2 className='text-[20px] font[700]'>Recent Orders</h2>


</div>
<div className="relative overflow-x-auto !mt-5">
                <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
        <thead className=" text-body bg-neutral-secondary-soft border-b !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
            <tr>
                <th scope="col" className="!px-6 !py-3 font-medium text-black ">
               
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black  whitespace-nowrap">
                    Order Id 
                </th>
                <th scope="col" className="!px-6 !py-3 font-medium text-black whitespace-nowrap">
                    Paymant
                </th>
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Product
                </th>

                <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
                Name

                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
                Phone Number

                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Address

                </th>

                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Pine Code

                </th>

                
                <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap whitespace-nowrap]">
                Total Amount

                </th>

                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Email

                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap ">
                User Id

                </th>

                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Order Status

                </th>
                
                <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
                Date

                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] ">
                <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-[#f1f1f1]  ' onClick={() => isShowOrderProdct(0)}>
                    {
                        isOpenOrderProdct === 0  ?  <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'  />:
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'  />
                    }
                    
                    </Button> 
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    <span className='text-red-400'>6357273hg36647s648383vx54</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-red-400'>pay-Ptp0guexbs8</span>
                    
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Shirt
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Surendra
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    9696652176
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
                 <span className='block w-[400px]'>   Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    231001
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    2000
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    spmk23@gamil.com
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                   <span className='text-red-400'> 6dgjhhdfdfd465gssgbt74nn</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   <Badge status="pending"/>
                </th>
               
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   2024-12-05
                </th>
                
           

</tr>

{
    isOpenOrderProdct ===0 &&
    
    <tr>
    <td className='!pl-26' colSpan={6}>
        
    <div className="relative overflow-x-auto ">
            <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
    <thead className=" text-body bg-neutral-secondary-soft border-b !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
        <tr>
            
            <th scope="col" className="!px-6 !py-3 font-medium text-black  whitespace-nowrap">
                Product Id
            </th>
            <th scope="col" className="!px-6 !py-3 font-medium text-black whitespace-nowrap">
                Product Title
            </th>
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Image
            </th>

            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Quantity

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Price

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Sub Total

            </th>

            
           
           
        </tr>
    </thead>
    <tbody>
        <tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-black'>6357273hg36647s648383vx54</span>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
            <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
                
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                4
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                969
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
           3000
            </th>
            
            
       

</tr>

<tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <span className='text-black'>6357273hg36647s648383vx54</span>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
           <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
               
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               4
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
               969
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
          3000
           </th>
           
           
      

</tr>


  
        
    </tbody>
</table>
          </div>
        </td>
        </tr>  
}
  
<tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] ">
                <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-[#f1f1f1]  ' onClick={() => isShowOrderProdct(1)}>
                    {
                        isOpenOrderProdct === 1  ?  <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'  />:
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'  />
                    }
                    
                    </Button> 
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    <span className='text-red-400'>6357273hg36647s648383vx54</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-red-400'>pay-Ptp0guexbs8</span>
                    
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Shirt
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Surendra
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    9696652176
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
                 <span className='block w-[400px]'>   Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    231001
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    2000
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    spmk23@gamil.com
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                   <span className='text-red-400'> 6dgjhhdfdfd465gssgbt74nn</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   <Badge status="confirm"/>
                </th>
               
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   2024-12-05
                </th>
                
           

</tr>

{
    isOpenOrderProdct ===1 &&
    
    <tr>
    <td className='!pl-26' colSpan={6}>
        
    <div className="relative overflow-x-auto ">
            <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
    <thead className=" text-body bg-neutral-secondary-soft border-b !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
        <tr>
            
            <th scope="col" className="!px-6 !py-3 font-medium text-black  whitespace-nowrap">
                Product Id
            </th>
            <th scope="col" className="!px-6 !py-3 font-medium text-black whitespace-nowrap">
                Product Title
            </th>
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Image
            </th>

            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Quantity

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Price

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Sub Total

            </th>

            
           
           
        </tr>
    </thead>
    <tbody>
        <tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-black'>6357273hg36647s648383vx54</span>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
            <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
                
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                4
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                969
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
           3000
            </th>
            
            
       

</tr>

<tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <span className='text-black'>6357273hg36647s648383vx54</span>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
           <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
               
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               4
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
               969
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
          3000
           </th>
           
           
      

</tr>


  
        
    </tbody>
</table>
          </div>
        </td>
        </tr>  
}
<tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] ">
                <Button className='!w-[35px] !h-[35px]  !min-w-[35px] !rounded-full !bg-[#f1f1f1]  ' onClick={() => isShowOrderProdct(2)}>
                    {
                        isOpenOrderProdct === 2  ?  <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'  />:
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'  />
                    }
                    
                    </Button> 
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    <span className='text-red-400'>6357273hg36647s648383vx54</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-red-400'>pay-Ptp0guexbs8</span>
                    
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Shirt
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                    Surendra
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    9696652176
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
                 <span className='block w-[400px]'>   Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar    Mirzapur Nagar Chunar</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    231001
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    2000
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                    spmk23@gamil.com
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                   <span className='text-red-400'> 6dgjhhdfdfd465gssgbt74nn</span>
                </th>
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   <Badge status="delivered"/>
                </th>
               
                <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                   2024-12-05
                </th>
                
           

</tr>

{
    isOpenOrderProdct ===2 &&
    
    <tr>
    <td className='!pl-26' colSpan={6}>
        
    <div className="relative overflow-x-auto ">
            <table className=" !w-full text-sm text-left rtl:text-right text-body !mb-4 !py-5  text-gray-500  dark:text-gray-400">
    <thead className=" text-body bg-neutral-secondary-soft border-b !rounded-base border-default  !mt-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase !text-[15px]">
        <tr>
            
            <th scope="col" className="!px-6 !py-3 font-medium text-black  whitespace-nowrap">
                Product Id
            </th>
            <th scope="col" className="!px-6 !py-3 font-medium text-black whitespace-nowrap">
                Product Title
            </th>
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Image
            </th>

            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Quantity

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black whitespace-nowrap">
            Price

            </th>
            
            <th scope="col" className="!px-6  !py-3 font-medium text-black  whitespace-nowrap">
            Sub Total

            </th>

            
           
           
        </tr>
    </thead>
    <tbody>
        <tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <span className='text-black'>6357273hg36647s648383vx54</span>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
            <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
                
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
                4
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
                969
            </th>
            <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
           3000
            </th>
            
            
       

</tr>

<tr className="bg-neutral-primary border-b border-default !py-5 !pb-5">
           
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <span className='text-black'>6357273hg36647s648383vx54</span>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
           <span className='text-black'>A -Line Kurti With Sharara & Dupatta </span>
               
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               <img src="https://mahezon.in/cdn/shop/files/IMG-20240531-WA0394_1200x1200.jpg?v=1719413561" alt=""  className='w-[40px] h-[40px]o object-cover rounded-md'/>
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px] whitespace-nowrap">
               4
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  whitespace-nowrap">
               969
           </th>
           <th  className="!px-6 !py-3 font-medium text-black text-[15px]  ">
          3000
           </th>
           
           
      

</tr>


  
        
    </tbody>
</table>
          </div>
        </td>
        </tr>  
}
  
  
  
  
  
                
            
            
        </tbody>
    </table>
              </div>
</div>


    <div className="card my-4 shadow-md sm-rounded-lg bg-white px-2">
        <div className="flex items-center justify-between px-5 py-5 pb-0">
            <h2 className='text-[16px] font-[600]'>Total Users & Total Sales</h2>
        </div>
        <div className="flex items-center gap-4 px-5 py-5 pt-0">
            <span className='flex items-center gap-1 text-[15px]'><span className='block w-[8px] h-[8px] rounded-full bg-green-600'></span>Total Users</span>
            <span className='flex items-center gap-1 text-[15px]'><span className='block w-[8px] h-[8px] rounded-full bg-blue-600'></span>Total Sales</span>
        </div>

      <LineChart
      style={{ width: '100%', maxWidth: '900px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={chart1Date}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3"  stroke='none'/>
      <XAxis dataKey="name" tick={{fontSize:12}} />
      <YAxis width="auto"  tick={{fontSize:12}} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="TotalSales" stroke="#8884d8"  strokeWidth={3} activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={3} />
    </LineChart>
      </div>
    
    </>
  )
};

export default Dashboard;
