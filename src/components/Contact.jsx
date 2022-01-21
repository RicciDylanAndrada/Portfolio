function Contact() {
    return (
        <section className="grid  h-4/6	 " >
        <div className="grid mobile:flex     mobile:h-full	 w-full h-2/6 md:grid-cols-1   place-items-center">
                 <div className="grid  gap-4  w-4/6 mobile:w-full  text-center	 just mobile:gap-4   ">
                     <h2 className="text-6xl  mx-auto  mobile:text-2xl xl:text-4xl 2xl:text-4xl"> Get in Touch</h2>
                     <div className="divider mx-auto  bg-orange w-20 h-px  2xl:w-28 "></div>

                     <p className="text-xl w-4/6  mx-auto  mobile:text-2xl xl:text-xl 2xl:text-xl">I am always looking for new connections. Whether you have questions or just want to say hi</p>
                     <a className=" btn hover:bg-orange btn-success mx-auto w-24 border-orange bg-background text-xs" href="mailto:email@email.de">Say Hello</a>

                    
                 </div>
         </div>


         
 
 
 
 
         
 
         </section>
    )
}

export default Contact
