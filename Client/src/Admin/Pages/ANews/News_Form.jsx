import React from 'react'
import Header from '@Admin/Layouts/Header'
import Sidebar from '@Admin/Layouts/Sidebar'

export const News_Form = () => {
  return (
    <div className="">
        <Header />
        <Sidebar />
        <div className="px-4 mt-3 sm:ml-64">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm ">
            <div className="grid grid-cols-9 border-b-[1px]">
              <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                Add News Details
              </h1>
            </div>  
          </div>
        </div>
    </div>
  )
}
