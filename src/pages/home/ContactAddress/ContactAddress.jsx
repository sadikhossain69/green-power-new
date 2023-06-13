import { AiFillMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsWatch } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

const ContactAddress = () => {
    return (
        <>
            <section>
                <div className='container mx-auto my-5'>
                    <div className='flex flex-col md:flex-row justify-around shadow-xl border py-10 px-5'>
                        <div className='flex items-center space-x-4'>
                            <span className="bg-[#0454A9] rounded-full p-2">
                                <BsFillTelephoneFill size={15} color="white" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold">Call Anytime</p>
                                <a className="font-bold" href="tel:+353851022100">+353 85 10 22 100</a>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className="bg-[#0454A9] rounded-full p-2">
                                <AiFillMail size={15} color="white" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold">Send Email</p>
                                <a className="font-bold" href="mailto:roy@greenpoweredsystems.ie ">roy@greenpoweredsystems.ie </a>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className="bg-[#0454A9] rounded-full p-2">
                                <IoLocationSharp size={15} color="white" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold">Visit Anytime</p>
                                <a className="font-bold" href="">Athlone, Co. Westmeath, Ireland</a>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className="bg-[#0454A9] rounded-full p-2">
                                <BsWatch size={15} color="white" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold">Working Hour</p>
                                <a className="font-bold" href="">7am – 7pm Monday-Friday</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactAddress;