import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Slide } from "react-reveal";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = data => {
        const contactData = {
            name: data.name,
            message: data.message,
            number: data.number,
            email: data.email
        }
        console.log(data)
        emailjs.send('service_chp0dkh', 'template_dvunn7h', contactData, 'Eesm4YiD0vqT9hRIr').then(res => {
            toast.success("Email Sent Successful")
            console.log(res)
            reset()
        })
    }


    return (
        <>
            <section>
                <Toaster />
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Name</label>
                                        <input {
                                            ...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Name is Required"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Name must be at least 3 characters',
                                                },
                                            })
                                        } className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="text" required />
                                        {
                                            errors.name?.type === "required"
                                            &&
                                            <p className='font-bold text-red-600'>
                                                {errors.name.message}
                                            </p>
                                        }
                                        {
                                            errors.name?.type === "minLength"
                                            &&
                                            <p className='font-bold text-red-600'>
                                                {errors.name.message}
                                            </p>
                                        }
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Email</label>
                                        <input {
                                            ...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "email is Required"
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Invalid email address',
                                                }
                                            })
                                        } required className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="email" />
                                        {errors.email?.type === 'required' && (
                                            <p className="font-bold text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                        {errors.email?.type === 'pattern' && (
                                            <p className="font-bold text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Number</label>
                                        <input {
                                            ...register("number", {
                                                required: {
                                                    value: true,
                                                    message: "Number is Required"
                                                },
                                                minLength: {
                                                    value: 5,
                                                    message: 'Number must be at least 5 characters',
                                                },
                                            })
                                        } required className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="number" />
                                        {errors.number?.type === 'required' && (
                                            <p className="font-bold text-red-600">
                                                {errors.number.message}
                                            </p>
                                        )}
                                        {errors.number?.type === 'minLength' && (
                                            <p className="font-bold text-red-600">
                                                {errors.number.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-semibold" htmlFor="">Description</label>
                                        <input {
                                            ...register("message", {
                                                required: {
                                                    value: true,
                                                    message: "Description is Required"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Description must be at least 3 characters',
                                                },
                                            })
                                        } className="outline-none bg-[#F2F2FE] border-b-2 border-[#0454A9]" type="text" required />
                                        {
                                            errors.message?.type === "required"
                                            &&
                                            <p className='font-bold text-red-600'>
                                                {errors.message.message}
                                            </p>
                                        }
                                        {
                                            errors.message?.type === "minLength"
                                            &&
                                            <p className='font-bold text-red-600'>
                                                {errors.message.message}
                                            </p>
                                        }
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