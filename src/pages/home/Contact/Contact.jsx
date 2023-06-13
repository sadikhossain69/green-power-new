import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Slide } from "react-reveal";

const Contact = () => {
    return (
        <>
            <section>
                <div id="contact" className="container mx-auto bg-[#F2F2FE] py-10">
                    <div className="flex md:justify-between md:pl-44 2xl:pl-64 pb-10 justify-center">
                        <p className={`text-2xl text-[#0454A9] font-semibold akshar-font`}>Contact Us To Know More</p>
                        <p></p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        <Slide left>
                            <div className="md:border-r-2 md:border-[#0454A9] w-full md:w-1/2 lg:pl-56 2xl:pl-80 pl-5">
                                <span>
                                    <img className="bg-[#F2F2FE]" src="contact.png" alt="" />
                                </span>
                                <div className="flex items-center space-x-3 pt-5">
                                    <span className="bg-[#0454A9] rounded-full p-2">
                                        <BsFillTelephoneFill size={15} color="white" />
                                    </span>
                                    <div>
                                        <p className="text-sm">Call Anytime</p>
                                        <p className="font-semibold"><a href="tel:+353851022100">+353 85 10 22 100</a></p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 mt-3">
                                    <span className="bg-[#0454A9] rounded-full p-2">
                                        <AiOutlineMail size={15} color="white" />
                                    </span>
                                    <div>
                                        <p className="text-sm">Send Email</p>
                                        <p className="font-semibold"><a href="mailto:roy@greenpoweredsystems.ie">roy@greenpoweredsystems.ie</a> </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 mt-3">
                                    <span className="bg-[#0454A9] rounded-full p-2">
                                        <FaFacebookF size={15} color="white" />
                                    </span>
                                    <div>
                                        <a href="https://www.facebook.com/GreenPoweredSystems" target="_blank" className="text-sm font-semibold text-blue-500" rel="noreferrer">Facebook</a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 mt-3">
                                    <span className="bg-[#0454A9] rounded-full p-2">
                                        <FaInstagram size={15} color="white" />
                                    </span>
                                    <div>
                                        <a href="https://www.instagram.com/green_powered_systems12" target="_blank" className="text-sm font-semibold text-blue-500" rel="noreferrer">Instagram</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="w-full md:w-1/2 md:px-20 p-5">
                                <form action="">
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Name</label>
                                        <input className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Email</label>
                                        <input className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Number</label>
                                        <input className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="number" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Description</label>
                                        <input className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="text" />
                                    </div>
                                    <input className="submit" type="submit" value={"Get A Quote"} />
                                </form>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;