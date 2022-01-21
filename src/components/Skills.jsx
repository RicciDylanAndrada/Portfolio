import {FaJava,FaPython,FaReact,FaLaravel,FaHtml5,FaCss3,FaFigma,FaGit,FaNpm,FaNode,FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiDjango,DiJqueryLogo,DiPhp} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'
import {SiPostgresql,SiTailwindcss,SiFlask,SiFirebase,SiChakraui} from 'react-icons/si'




function Skills() {
    return (
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
                
                <div className=" w-3/6 mobile:w-5/6 h-full grid grid-cols-5 place-content-center  text-4xl mobile:text-xl gap-4 place-items-center" >
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
    )
}

export default Skills
