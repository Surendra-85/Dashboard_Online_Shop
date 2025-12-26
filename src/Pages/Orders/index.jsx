import React, { useState } from 'react'
import  Button  from '@mui/material/Button';



import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Badge from '../../Component/Badge';


const Orders = () => {

    const[isOpenOrderProdct ,setIsOpenOrderProduct] = useState(null);
    const isShowOrderProdct =(index) =>{

        if(isOpenOrderProdct === index){
        setIsOpenOrderProduct(null);

        }else{
            setIsOpenOrderProduct(index);

        }
    };
  return (
    <div>
       <div className="card my-4 shadow-md sm:rounded-lg bg-white">    
        <div className="flex items-center justify-between px-5 py-2">
        <h2 className='text-[20px] font[700]'>Users Orders</h2>


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
    </div>
  )
}

export default Orders
