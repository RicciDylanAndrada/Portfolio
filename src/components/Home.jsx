import Navbar from "./layout/Navbar"
import pic from "../images/portfolio1.png"
import Skills from "./Skills"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

function Home() {
    return (
        <div className="h-screen">
        <Navbar/>
     
        <section className="grid w-full h-screen grid-rows-2	 mobile:h-screen  mobile:p-5   mobile:items-center  mobile:flex-col " >
        <div class="grid mobile:flex  	 h-100 w-full md:grid-cols-2 mobile:flex-col-reverse  place-items-center">
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




        <div class=" grid grid-rows-2 mobile:text-center  place-items-center   h-4/6">
        
                    <div className=" place-self-center grid   h-full " > 

                        <h1 className=" place-self-center text-2xl mobile:text-base" >
                        With a passion of building digital experiences on the web, I continue to always learn and hone my craft.</h1>
                        
                    </div>
                    <div class="grid  place-items-center">
                        <button class="btn btn-square btn-ghost arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-orange">            
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>              
                                </svg>
                        </button>
                    </div>
        </div>

        </section>

        <div className="mobile:grid mobile:gap-20 grid gap-60">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>


        



        
        </div>
        </div>
    )
}

export default Home
