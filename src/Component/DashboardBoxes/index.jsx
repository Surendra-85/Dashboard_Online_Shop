import React  from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { IoStatsChartSharp } from 'react-icons/io5';
import { AiTwotoneGift } from 'react-icons/ai';
import { BsBank2 } from "react-icons/bs";
import { AiTwotonePieChart } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";

const DashboardBoxes = () => {

  return (
    <>
       <Swiper
        slidesPerView={4}
        spaceBetween={10}
        Navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box p-5 bg-blue-500  text-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer ">
 <AiTwotoneGift  className='text-[40px] text-white'/>
 
            <div className="info w-[80%]">
              <h3>New Orders</h3>
              <b>1,780</b>

            </div>
            <IoStatsChartSharp className='text-[60px] '/>
          </div>
        
        </SwiperSlide>

        <SwiperSlide>
          <div className="box p-5 bg-green-500 text-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer">
 <AiTwotonePieChart  className='text-[40px] '/>
 
            <div className="info w-[80%]">
              <h3>Sales</h3>
              <b>1,37800</b>

            </div>
            <IoStatsChartSharp className='text-[60px]   '/>
          </div>
        
        </SwiperSlide>

        <SwiperSlide>
          <div className="box   p-5 bg-red-400 !text-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer ">
 <BsBank2  className='text-[40px] '/>
 
            <div className="info w-[80%]">
              <h3>Revenue</h3>
              <b>1,9080</b>

            </div>
            <IoStatsChartSharp className='text-[60px]'/>
          </div>
        
        </SwiperSlide>

        <SwiperSlide>
          <div className="box  p-5 bg-purple-800 text-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer">
 <RiProductHuntLine  className='text-[40px]'/>
 
            <div className="info w-[80%]">
              <h3>Total Product</h3>
              <b>1,780</b>

            </div>
            <IoStatsChartSharp className='text-[60px] '/>
          </div>
        
        </SwiperSlide>


        <SwiperSlide>
          <div className="box  p-5 bg-white rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 cursor-pointer hover:bg-[#f1f1f1]">
 <AiTwotoneGift  className='text-[40px]'/>
 
            <div className="info w-[80%]">
              <h3>New Orders</h3>
              <b>1,780</b>

            </div>
            <IoStatsChartSharp className='text-[60px] text-[#3872fa]'/>
          </div>
        
        </SwiperSlide>
        
      </Swiper>


      
    </>
  )
}

export default DashboardBoxes;

