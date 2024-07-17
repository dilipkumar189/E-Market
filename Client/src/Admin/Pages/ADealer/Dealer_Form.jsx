import React from 'react'
import Header from '@Admin/Layouts/Header'
import Sidebar from '@Admin/Layouts/Sidebar'

const inputCss = "block py-1 px-2 w-full text-sm text-gray-900 bg-transparent border-[1px] border-gray-300 rounded-[4px] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

const labelCss = "peer-focus:font-medium px-2 text-[13px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-70 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

export const Dealer_Form = () => {
  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm ">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              Add Dealer Details
            </h1>
          </div>
          <form className="mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${inputCss}`}
                  placeholder=''
                  required
                />
                <label
                  htmlFor="name"
                  className={`${labelCss}`}
                >
                 Vehicle Name
                </label>
              </div>

              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  name="speed"
                  id="speed"
                  className={`${inputCss}`}
                  placeholder=''
                  required
                />
                <label
                  htmlFor="speed"
                  className={`${labelCss}`}
                >
                 Vehicle Speed
                </label>
              </div>

              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className={`${inputCss}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className={`${labelCss}`}
                >
                  Password
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-4 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className={`${inputCss}`}
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className={`${labelCss}`}
              >
                Confirm password
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className={`${inputCss}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className={`${labelCss}`}
                >
                  First name
                </label>
              </div>

              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className={`${inputCss}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className={`${labelCss}`}
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className={`${inputCss}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className={`${labelCss}`}
                >
                  Phone number (123-456-7890)
                </label>
              </div>

              <div className="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className={`${inputCss}`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className={`${labelCss}`}
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>     
        </div>
      </div>
    </div>
  )
}
