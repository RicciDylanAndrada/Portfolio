import Creatify from '../images/Creatify.png'
import ChatApp from '../images/ChatApp.png'
import g from '../images/g.png'


function Projects() {
    return (
        <section className="grid  "   >
        <div className="grid mobile:flex     mobile:h-full	 w-full h-2/6 md:grid-cols-1 mobile:flex-col-reverse  place-items-center">
                 <div className="grid  w-4/6 mobile:w-full 	 just mobile:gap-4   ">
                     <h2 className="text-4xl  mobile:mx-auto  mobile:text-2xl xl:text-2xl 2xl:text-2xl">Projects</h2>
                     <div className="divider mobile:mx-auto  bg-orange w-20 h-px  2xl:w-28 "></div>
                    
                 </div>
         </div>


         <div className=" grid grid-cols-1 mx-auto    w-full h-full">
          <ul className="  h-3/6 w-4/6 mx-auto grid gap-40">
              <li className="   place-items-center grid grid-cols-8 mobile:grid-cols-1"> 
                 <div className=" project-image ">
                     <img src={Creatify} className=' rounded-lg shadow-[-20px_15px_rgba(0,0,0,0.2)]'></img>
                 </div>


                 <div className=" w-full  grid h-full  project-description rounded-lg ">
                    <div className="place-self-center  grid  mobile:text-center text-right h-1/2  bg-amber mobile:h-4/6w-full">
                    <h1 className="text-2xl  mb-4" >Creatify</h1>
                        <div className="w-full h-28 mobile:h-full text-center grid  p-4 shadow-xl bg rounded-md place-items-center  bg-overlayBox">
                        <p className="text-s  " > A web application that allows you to see your top tracks/songs in a given time frame. Create and save new playlists of the top songs</p>
                        </div>
                     <div className="flex  place-self-end w-4/6 text-xs mobile:w-full justify-between p-1 text-right flex-row">
                         <div className="" >Spotify API</div>
                         <div className="">ReactJS</div>
                         <div className="">TailwindCSs</div>

                     </div>
                 </div>
                    
                 </div>
              </li>
              



              <li className="   place-items-center grid grid-cols-8 mobile:grid-cols-1"> 
                 <div className=" project-image-right ">
                     <img src={ChatApp} className=' rounded-lg shadow-[20px_15px_rgba(0,0,0,0.2)]'></img>
                 </div>


                 <div className=" w-full h-full grid  project-description-right rounded-lg ">
                    <div className="place-self-center  grid  mobile:text-center text-left h-1/2  bg-amber mobile:h-4/6w-full">
                    <h1 className="text-2xl  mb-4" >ChatApp</h1>
                        <div className="w-full h-28 mobile:h-full text-center grid  p-4 shadow-xl bg rounded-md place-items-center  bg-overlayBox">
                        <p className="text-s " > A single room discord clone realtime chat application. </p>
                        </div>
                     <div className="flex  place-self-auto w-4/6 text-xs mobile:w-full justify-between p-1  flex-row">
                         <div className="">ReactJS</div>
                         <div className="" >Firebase</div>
                         <div className="">TailwindCSS</div>

                     </div>
                 </div>
                    
                 </div>
              </li>


              <li className="  place-items-center grid grid-cols-8 mobile:grid-cols-1"> 
                 <div className=" project-image ">
                     <img src={g} className=' rounded-lg shadow-[-20px_15px_rgba(1,0,1,0.2)]'></img>
                 </div>


                 <div className=" w-full h-full grid  project-description rounded-lg ">
                    <div className="place-self-center  grid  mobile:text-center text-right h-1/2  bg-amber mobile:h-4/6w-full">
                    <h1 className="text-2xl  mb-4" >Gym Mock Page</h1>
                        <div className="w-full h-28 mobile:h-full text-center grid  p-4 shadow-xl bg rounded-md place-items-center  bg-overlayBox">
                        <p className="text-s  " > A basic landing page for a gym. Displaying prices of memberhips and programs avaliable.</p>
                        </div>
                     <div className="flex  place-self-end w-4/6 text-xs mobile:w-full justify-between p-1 text-right flex-row">
                         <div className="">GatsbyJS</div>
                         <div className="">Boostrap</div>
                         <div className="" >Netlify</div>


                     </div>
                 </div>
                    
                 </div>
              </li>
          </ul>
        </div>
 
 
 
 
         
 
         </section>
    )
}

export default Projects
