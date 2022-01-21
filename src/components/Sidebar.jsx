import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {FiGithub,FiLinkedin,FiCodesandbox, FiCode} from 'react-icons/fi'
import {motion} from 'framer-motion'

function Sidebar() {
    return (
        <div className=" mobile:hidden grid gap-1 h-screen w-20	  grid-rows-2 place-content-center	">
        
        <div className="place-self-end grid gap-12">
           

        </div>
        <div class=" grid place-items-end  ">
        <div class="w-full grid gap-5 place-items-center">

            <motion.button
            whileHover={{scale:1.2}}
            
            >
            <a href="https://github.com/RicciDylanAndrada" class="hover:border-bg-orange">
        <FiGithub  size="20px"  />
        </a>
            </motion.button>
        


            <motion.button
            whileHover={{scale:1.2}}
            
            >
           <a href="https://www.linkedin.com/in/riccidylanandrada/" className="hover:bg-orange">
           <FiLinkedin size="20px"  />
           </a>
</motion.button>




<motion.button
            whileHover={{scale:1.2}}
            
            >
           <a href="https://codesandbox.io/u/RicciDylanAndrada" className="hover:bg-orange">
           <FiCodesandbox size="20px"  />
           </a>
           </motion.button>
        </div>
        <div className="divider divider-vertical  place-self-end opacity-0.1	  bg-orange w-px h-4/6"></div>
            
            </div>

        </div>
        
    )
}

export default Sidebar
