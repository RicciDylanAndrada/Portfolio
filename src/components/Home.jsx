import Navbar from "./layout/Navbar"
import pic from "../images/portfolio1.png"
import Sidebar from "./Sidebar"
import AboutMe from "./AboutMe"
import {FaJava,FaPython,FaReact,FaLaravel,FaHtml5,FaCss3,FaFigma,FaGit,FaNpm,FaNode,FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiDjango,DiJqueryLogo,DiPhp} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'
import {SiPostgresql,SiTailwindcss,SiFlask,SiFirebase,SiChakraui} from 'react-icons/si'





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


        <section className="grid  " >
       <div class="grid mobile:flex     mobile:h-full	 w-full h-2/6 md:grid-cols-1 mobile:flex-col-reverse  place-items-center">
                <div className="grid  w-4/6 mobile:w-full 	 just mobile:gap-4   ">
                    <h2 className="text-4xl  mobile:mx-auto  mobile:text-2xl xl:text-2xl 2xl:text-2xl">About Me</h2>
                    <div class="divider mobile:mx-auto  bg-orange w-20 h-px  2xl:w-28 "></div>
                    <div class="mx-auto text-left  w-5/6 ">
                        <h2 className="text-xl  mobile:text-sm 2xl:text-xl">My name is Ricci Dylan Andrada. I am a senior in New Jersey Institute of Technology pursing a degree in computer science.
    I enjoy creating and designing applications that solve real-life problems.  </h2> 
    <br/>
                        <h2 className="text-xl mobile:text-sm 2xl:text-xl"  >I have always loved learning new things, and being challenged.  Which is why the field of computer science attracted me so much as there is always something new to learn and problems to be solve. I strive to improve my skills and knowledge everyday.</h2>
                        <br/>

                        <h2 className="text-xl mobile:text-sm 2xl:text-xl">Outside from software development, I enjoy the gym, traveling, listening to music, hiking and learning new things. 
                         </h2> 
                    </div>
                    
                  
                </div>
                
                
        </div>




        

        </section>



        <section className="grid  " >
        <div class="grid  mobile:h-full	 w-full h-2/6 md:grid-cols-1  gap-4 place-items-center">
                    <div className="grid place-items-start mobile:w-full w-4/6 	 just mobile:gap-4   ">
                        <h2 className="text-4xl  mobile:mx-auto  mobile:text-2xl xl:text-2xl 2xl:text-2xl">Skills</h2>
                        <div class="divider mobile:mx-auto  bg-orange w-20 h-px "></div>
                            <div class="mx-auto  text-left  w-5/6 ">
                                <h2 className="text-xl mobile:text-sm 2xl:text-xl">Technology and tools are never definite. New frameworks, languages and tools are being released every year. </h2>
                                <br/>
                                    <h2 className="text-xl mobile:text-sm 2xl:text-xl">
                                I believe it is important to be adaptable, and because of my strong foundations I am able to learn and adapt to any new technology. 
                                These are currently the latest languages/frameworks/tools I have experience with.
                                </h2 > 
                                <br/>

                                

                            </div>
                    
                  
                </div>
                
                <div className=" w-4/6 mobile:w-5/6 h-full grid grid-cols-8  text-4xl mobile:text-xl gap-4 place-items-center" >
                <div class="grid place-items-center">
                 <FaBootstrap    />
                <p className="mobile:hidden text-sm">Bootstrap</p>
                </div>
                    <div class="grid place-items-center"> 

                <FaCss3   />

                <p className="mobile:hidden text-sm">CSS</p>
                    </div>

                    <div class="grid place-items-center"> 
            <FaJava   />
            <p className="mobile:hidden text-sm">Java</p>

            </div>


 <div class="grid place-items-center"> 
            <FaPython   />
            <p className="mobile:hidden text-sm">Python</p>

            </div>      
            
            <div class="grid place-items-center"> 
            <FaReact   />
            <p className="mobile:hidden text-sm">ReactJS</p>

            </div>
            <div class="grid place-items-center"> 
            <FaLaravel   />
            <p className="mobile:hidden text-sm">Laravel</p>

            </div>


<div class="grid place-items-center"> 
            <FaHtml5   />
            <p className="mobile:hidden text-sm">HTML</p>

            </div>          
            
            
            <div class="grid place-items-center"> 
            <FaFigma/>
            <p className="mobile:hidden text-sm">Figma</p>

            </div>



            <div class="grid place-items-center"> 
            <FaGit  />
            <p className="mobile:hidden text-sm">Git</p>

            </div>
            <div class="grid place-items-center"> 
            <FaNpm   />
            <p className="mobile:hidden text-sm">NPM</p>

            </div>
            <div class="grid place-items-center"> 
            <FaNode   />
            <p className="mobile:hidden text-sm">NodeJS</p>

            </div>
          
            <div class="grid place-items-center"> 
            <IoLogoJavascript   />
            <p className="mobile:hidden text-sm">Javascript</p>
            <p className="mobile:hidden text-sm">(ES6+)</p>


            </div>
            <div class="grid place-items-center"> 
            <DiDjango   />
            <p className="mobile:hidden text-sm">Django</p>

            </div>

            <div class="grid place-items-center"> 
            <DiJqueryLogo   />
            <p className="mobile:hidden text-sm">JQuery</p>

            </div>
            <div class="grid place-items-center"> 
            <DiPhp   />
            <p className="mobile:hidden text-sm">PHP</p>

            </div>
            <div class="grid place-items-center"> 
            <GrMysql   />
            <p className="mobile:hidden text-sm">SQL</p>

            </div>
            <div class="grid place-items-center"> 
            <SiFirebase   />
            <p className="mobile:hidden text-sm">Firebase</p>

            </div>
            <div class="grid place-items-center"> 
            <SiFlask   />
            <p className="mobile:hidden text-sm">Flask</p>

            </div>
            <div class="grid place-items-center"> 
            <SiPostgresql   />
            <p className="mobile:hidden text-sm">PostgreSQL</p>

            </div>
            <div class="grid place-items-center"> 
            <SiTailwindcss   />
            <p className="mobile:hidden text-sm">TailwindCSS</p>

            </div>
            <div class="grid place-items-center"> 
            <SiChakraui   />
            <p className="mobile:hidden text-sm">ChakraUI</p>

            </div>




<br/>
           
                </div>
        </div>




        

        </section>
        </div>
        </div>
    )
}

export default Home
