import {useState} from 'react'
import { Transition } from "@headlessui/react";

function Navbar() {

    const[clicked,setClick]=useState(false)
    const handleClick=()=>{

    }

    return (
        <div className=" mobile:grid mobile:grid-cols-7 navbar p-4 w-full mb-12 bg-background text-neutral-content">
         <div className="flex-none px-2 mx-2 mobile:col-span-2">
                <h1 className="font-Karla" >Ricci Andrada</h1>
            </div>
        <div className="container  mobile:hidden mx-auto w-3/6 ">
           
            <div className="flex-1 mobile:hidden  px-2 mx-2">
            <div className="flex justify-center space-x-12 ">
                   <a>About Me</a>
                   <a>Work </a>
                   <a>Contact Me </a>


                </div>
                
            </div>
            
        </div>

        <div className="flex  mobile:col-span-4 justify-end">
                   <a className="text-orange" >Resume</a>
                </div>
    <div class="  mobile:visible invisible mobile:place-self-end  mobile:lg:flex">
    <button onClick={()=>setClick(!clicked)} class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
    </button>
    
  </div> 
  <Transition
          show={clicked}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="sm:hidden w-screen " id="mobile-menu">
              <div ref={ref}  className=" w-screen block px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
About Me                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Work
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Me
                </a>

                
              </div>
            </div>
          )}
        </Transition>
        </div>
    )
}

export default Navbar
