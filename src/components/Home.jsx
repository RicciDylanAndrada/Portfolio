import Navbar from "./layout/Navbar"
import pic from "../images/portfolio1.png"
import Skills from "./Skills"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import {useRef} from 'react'


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
     
        <section className="grid w-full h-screen grid-rows-2	 mobile:h-screen  mobile:p-5   mobile:items-center  mobile:flex-col " >
        <div className="grid mobile:flex  	 h-100 w-full md:grid-cols-2 mobile:flex-col-reverse  place-items-center">
                <div className="grid gap-3  text-left mobile:gap-4  ">
                    <h2 className="text-4xl mobile:text-2xl xl:text-4xl 2xl:text-5xl">Hello</h2>
                    <h2 className="text-6xl mobile:text-4xl  xl:text-6xl 2xl:text-8xl ">My Name Is Ricci,</h2>
                    <h2 className="text-2xl  mobile:text-xl 2xl:text-3xl">I am a Developer/Designer</h2>

                </div>
                
                <div className=" w-full h-full grid mobile:place-self-start	place-items-center mobile:place-items-center" >
                    <div className='oval drop-shadow-2xl grid place-items-start'>
                    <img src={pic} className=" mx-auto  mobile:h-36  md:h-72 l:h-72 flex justify-center   pb-2  2xl:h-full  " ></img>
                    </div>
                </div>
        </div>




        <div className=" grid grid-rows-2 mobile:text-center  place-items-center   h-4/6">
        
                    <div className=" place-self-center grid   h-full " > 

                        <h1 className=" place-self-center text-2xl mobile:text-base" >
                        With a passion of building digital experiences on the web, I continue to always learn and hone my craft.</h1>
                        
                    </div>
                    <div className="grid  place-items-center">
                        <button className="btn btn-square btn-ghost arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-orange">            
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>              
                                </svg>
                        </button>
                    </div>
        </div>

        </section>

        <div className="mobile:grid mobile:gap-20 grid gap-60">
        <div  ref={AboutMee} className="">  <AboutMe /></div>
        <div ref={Skillss} className="">        <Skills/></div>
        <div ref={Projectss} className="">        <Projects/></div>
        <div ref={ContactMe} className="">               <Contact/></div>

        
        <Footer/>


        



        
        </div>
        </div>
    )
}

export default Home
