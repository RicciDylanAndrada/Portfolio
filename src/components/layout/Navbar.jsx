import {useState} from 'react'
import { Transition } from "@headlessui/react";
import { MenuButton } from '../MenuButton.tsx';
import {motion} from 'framer-motion'

function Navbar({executeScroll,executeScroll2,executeScroll3,executeScroll4,}) {
  const [isOpen,setOpen] =useState(false)

    const[clicked,setClick]=useState(false)
    const handleClick=()=>{
  executeScroll()
    }
    const handleClickButton=()=>{
      setClick(!clicked)
      setOpen(!isOpen)
}

    return (
        <div className=" mobile:grid mobile:grid-cols-7 navbar p-4 w-full mb-12 bg-background text-neutral-content">
         <div className="flex-none px-2 mx-2 mobile:col-span-2">
                <h1 className="font-Karla" >Ricci Andrada</h1>
            </div>
        <div className="container  mobile:hidden mx-auto w-3/6 ">
           
            <div className="flex-1 mobile:hidden  px-2 mx-2">
            <div className="flex justify-center space-x-12 ">
                    <motion.button
                    whileHover={{scale:1.1}}
                    >
                    <a className="hover:text-orange  hover:rounded-md" onClick={handleClick} >About Me</a>

                    </motion.button>

                    <motion.button
                    whileHover={{scale:1.1}}
                    >
                   <a className="hover:text-orange   hover:rounded-md" onClick={executeScroll4} >Skills </a>
</motion.button>
<motion.button
                    whileHover={{scale:1.1}}
                    >
                   <a className="hover:text-orange  hover:rounded-md" onClick={executeScroll2} >Projects  </a>
</motion.button>

<motion.button
                    whileHover={{scale:1.1}}
                    >
                   <a className="hover:text-orange  hover:rounded-md" onClick={executeScroll3} >Contact Me </a>
</motion.button>

                </div>
                
            </div>
            
        </div>

        <div className="flex  mobile:col-span-4 justify-end">
                   <a className="text-orange" >Resume</a>
                </div>
    <div className="  mobile:visible invisible grid  place-items-end	  ">
    <MenuButton
        isOpen={isOpen}
onClick={handleClickButton }      />


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
                onClick={handleClick}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
About Me                </a>

                <a
                onClick={executeScroll4}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Skills
                </a>

                <a
                onClick={executeScroll2}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                onClick={executeScroll3}
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
