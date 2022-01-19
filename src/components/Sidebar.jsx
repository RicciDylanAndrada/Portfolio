import {FaGithub,FaLinkedin} from 'react-icons/fa'
function Sidebar() {
    return (
        <div className=" mobile:hidden grid gap-1 h-screen	  grid-rows-3 place-content-center	">
        <div className="divider divider-vertical  place-self-start	  bg-orange w-px h-3/6">

        </div>
        <div class="place-self-center grid gap-12">
            <FaGithub  size="20px"  />
            <FaLinkedin size="20px"  />

        </div>
        <div class="divider divider-vertical  place-self-end	  bg-orange w-px h-3/6"></div>
            
        </div>
    )
}

export default Sidebar
