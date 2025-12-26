import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Component/Header';
import './App.css';
import Sidebar from './Component/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { createContext } from 'react';
import Product from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import HomeSliderBanner from './Pages/HomeSliderBanners';
import AddHomeSlide from './Pages/AddHomeSlide';
import Category from './Pages/Category';
import AddCategory from './Pages/AddCategory';
import SubCategory from './Pages/SubCategory';
import AddSubCategory from './Pages/AddSubCategory';
import Orders from './Pages/Orders';
import Users from './Pages/Users';

const MyContext = createContext();

const App = () => {
  const[isSidebarOpen ,setisSidebarOpen] =useState(true);
  const[isLogin ,setIsLogin] =useState(true);


  const router =createBrowserRouter([
    {
      path:"/",
      element:(
        <>
        <section className='main'>
          <Header/>
          <div className="contentMain flex">
            <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
          
          <Sidebar/>
          </div>
          <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
            <Dashboard/>
          </div>
          </div>
        </section>
        </>
      )
        },


      {
        path:"/login",
        exact:true,
        element:(
          <>
   
              <Login/>
          </>
        ), 
        },

        {
          path:"/signup",
        exact:true,

          element:(
            <>
     
                <SignUp/>
            </>
          ),
          },

          {
            path:"/product",
            exact:true,
            element:(
              <>
              <section className='main'>
                <Header/>
                <div className="contentMain flex">
                  <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                
                <Sidebar/>
                </div>
                <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                  <Product/>
                </div>
                </div>
              </section>
              </>
            ),
              },
              {
                path:"/product/upload",
                exact:true,
                element:(
                  <>
                  <section className='main'>
                    <Header/>
                    <div className="contentMain flex">
                      <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                    
                    <Sidebar/>
                    </div>
                    <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                      <AddProduct/>
                    </div>
                    </div>
                  </section>
                  </>
                ),
                  },
                  {
                    path:"/homeSlider/list",
                    exact:true,
                    element:(
                      <>
                      <section className='main'>
                        <Header/>
                        <div className="contentMain flex">
                          <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                        
                        <Sidebar/>
                        </div>
                        <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                          <HomeSliderBanner/>
                        </div>
                        </div>
                      </section>
                      </>
                    ),
                      },
                      
                      {
                        path:"/homeSlider/add",
                        exact:true,
                        element:(
                          <>
                          <section className='main'>
                            <Header/>
                            <div className="contentMain flex">
                              <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                            
                            <Sidebar/>
                            </div>
                            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                              <AddHomeSlide/>
                            </div>
                            </div>
                          </section>
                          </>
                        ),
                          },
  
                          {
                            path:"/category",
                            exact:true,
                            element:(
                              <>
                              <section className='main'>
                                <Header/>
                                <div className="contentMain flex">
                                  <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                
                                <Sidebar/>
                                </div>
                                <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                  <Category/>
                                </div>
                                </div>
                              </section>
                              </>
                            ),
                              },

                              {
                                path:"/category/add",
                                exact:true,
                                element:(
                                  <>
                                  <section className='main'>
                                    <Header/>
                                    <div className="contentMain flex">
                                      <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                    
                                    <Sidebar/>
                                    </div>
                                    <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                      <AddCategory/>
                                    </div>
                                    </div>
                                  </section>
                                  </>
                                ),
                                  },

                                  {
                                    path:"/category/subCat",
                                    exact:true,
                                    element:(
                                      <>
                                      <section className='main'>
                                        <Header/>
                                        <div className="contentMain flex">
                                          <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                        
                                        <Sidebar/>
                                        </div>
                                        <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                          <SubCategory/>
                                        </div>
                                        </div>
                                      </section>
                                      </>
                                    ),
                                      },

                                      {
                                        path:"/category/subCat/add",
                                        exact:true,
                                        element:(
                                          <>
                                          <section className='main'>
                                            <Header/>
                                            <div className="contentMain flex">
                                              <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                            
                                            <Sidebar/>
                                            </div>
                                            <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                              <AddSubCategory/>
                                            </div>
                                            </div>
                                          </section>
                                          </>
                                        ),
                                          },
                                          {
                                            path:"/order",
                                            exact:true,
                                            element:(
                                              <>
                                              <section className='main'>
                                                <Header/>
                                                <div className="contentMain flex">
                                                  <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                                
                                                <Sidebar/>
                                                </div>
                                                <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                                  <Orders/>
                                                </div>
                                                </div>
                                              </section>
                                              </>
                                            ),
                                              },

                                              {
                                                path:"/users",
                                                exact:true,
                                                element:(
                                                  <>
                                                  <section className='main'>
                                                    <Header/>
                                                    <div className="contentMain flex">
                                                      <div className={`sidebarWrapper  overflow-hidden  ${isSidebarOpen===true ? 'w-[18%]' :'w-[0px] opacity-0'} transition-all`}>
                                                    
                                                    <Sidebar/>
                                                    </div>
                                                    <div className={`contentRight py-4 px-5 ${isSidebarOpen===false ? 'w-[100%]' :'w-[82%]'} transition-all`}>
                                                      <Users/>
                                                    </div>
                                                    </div>
                                                  </section>
                                                  </>
                                                ),
                                                  },
  ]);

  const values={
    setisSidebarOpen,
    isSidebarOpen,
    setIsLogin,
    isLogin
   
  };
  return (
    <>
    <MyContext.Provider  value={values}>
    <RouterProvider router={router} />
    </MyContext.Provider>
    </>
  )
}

export default App;
export {MyContext};
