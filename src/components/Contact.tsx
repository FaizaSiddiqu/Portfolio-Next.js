import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id="contact" className="pt-40 container">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl" data-aos="zoom-in-up"> Contact Me</h2>
                <p className="text-[18px] pt-2" data-aos="zoom-in-up">Reach out with a quick message, a call, or simply fill out 
                  the form.
                </p>

                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <IoIosMail size={30} /> faizasiddiqui902@gmail.com
                </div>
                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <BsFillTelephoneInboundFill size={30} /> (+92) 3162635533
                </div>
            </div>

            <div className='space-y-8'>
              <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                <label htmlFor="name">Name:</label>
                <input type="text"
                className="h-[40px] bg-transparent border-2 border-customPurple rounded-md"
                id="name" />
              </div>

              <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                <label htmlFor="email">Email:</label>
                <input type="text"
                className="h-[40px] bg-transparent border-2 border-customPurple rounded-md"
                id="email" />
              </div>

              <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                <label htmlFor="msg">Message:</label>
                <textarea
                className="bg-transparent border-2 border-customPurple rounded-md"
                id="msg" rows={8} >
                </textarea>
              </div>
              <button className="bg-customPurple p-2 px-8 text-black hover:text-white rounded-lg">Send</button>


            </div>



        </div>
      
    </div>
  )
}

export default Contact
