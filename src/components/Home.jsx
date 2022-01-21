import Navbar from "./layout/Navbar"
import pic from "../images/portfolio1.png"
import Skills from "./Skills"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import {useRef} from 'react'
import TypeAnimation from 'react-type-animation';
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FaLinkedin,FaGithub, FaGit} from 'react-icons/fa'




function FadeInWhenVisible({ children }) {


    const{ref,inView} =useInView();
    useEffect(()=>{

    },[inView])
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true  }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }


function Home() {
    const AboutMee=useRef(null)
    const Projectss=useRef(null)
    const ContactMe=useRef(null)
    const Skillss=useRef(null)


    const executeScroll = () => AboutMee.current.scrollIntoView({behavior:"smooth"})    
    const executeScroll2 = () => Projectss.current.scrollIntoView({behavior:"smooth"})       
    const executeScroll3 = () => ContactMe.current.scrollIntoView({behavior:"smooth"})     
    const executeScroll4 = () => Skillss.current.scrollIntoView({behavior:"smooth"})    


    return (
        <div className="h-screen">
        <Navbar executeScroll={executeScroll} executeScroll2={executeScroll2}executeScroll3={executeScroll3} executeScroll4={executeScroll4} />
     
        <section className="grid w-full h-screen grid-rows-2	 mobile:h-screen  mobile:p-10   mobile:items-center  mobile:flex-col " >
        <div className="grid mobile:flex mobile:text-center  mobile:gap-12	 h-100 w-full md:grid-cols-2 mobile:flex-col-reverse  place-items-center">
                <div className="grid gap-3  text-left mobile:gap-4  ">
                
                    <h2 className="text-4xl text-orange  mobile:text-2xl xl:text-4xl 2xl:text-5xl"><TypeAnimation
      cursor={false}
      sequence={['Hello,', 1000,]}
      wrapper="h1"
    /></h2>
                    <h2 className="text-6xl mobile:text-4xl  xl:text-6xl 2xl:text-8xl "><TypeAnimation
      cursor={false}
      sequence={['', 800,"My Name is Ricci"]}
      wrapper="h1"
    /></h2>
                    <div className="text-2xl   flex flex-row mobile:text-xl 2xl:text-3xl">
                    
                    <TypeAnimation
      cursor={false}
      sequence={['', 2000,"I am a "]}
      wrapper="h1"
    />
                    <TypeAnimation
      cursor={false}
      sequence={[ 2500," Designer",800," Developer"]}
      wrapper="h1"
      className="ml-2 text-orange"
    /></div>



    
    




                </div>
                
                <div className=" w-full h-full grid mobile:place-self-start	place-items-center mobile:place-items-center" >
                    <div className='oval drop-shadow-2xl grid place-items-start'>
                    <img src={pic} className=" iconpage  mx-auto  mobile:h-36  md:h-72 l:h-72 flex justify-center   pb-2  2xl:h-94  " ></img>
                    </div>
                </div>
        </div>




        <div className=" grid grid-rows-2 mobile:text-center  place-items-center   h-4/6">
        
                    <div className=" place-self-center grid   h-full " > 

                        <h1 className=" place-self-center text-2xl mobile:text-base" >
                        With a passion of building digital experiences on the web, I continue to always learn and hone my craft.</h1>
                        
                    </div>
                    <div className="grid  place-items-center">
                        {/* <button className="btn btn-square btn-ghost arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-orange">            
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>              
                                </svg>
                        </button> */}
                    </div>
        </div>

        </section>

        <div className="mobile:grid mobile:gap-20 grid gap-60">
        <FadeInWhenVisible>
        <div  ref={AboutMee} className="">  <AboutMe /></div>
        </FadeInWhenVisible>



        <FadeInWhenVisible>

        <div ref={Skillss} className="">        <Skills/></div>
        </FadeInWhenVisible>


<div r  class="">
<FadeInWhenVisible>

<div ref={Projectss} className="">        <Projects/></div>

</FadeInWhenVisible>
</div>
        



        <FadeInWhenVisible>

        <div ref={ContactMe} className="">               <Contact/></div>

        </FadeInWhenVisible>

        <FadeInWhenVisible>

        <Footer/>
        </FadeInWhenVisible>


        



        
        </div>
        </div>
    )
}

export default Home
