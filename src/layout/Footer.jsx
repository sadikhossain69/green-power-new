const Footer = () => {
    return (
        <>
            <footer>
                <section className="text-gray-400 bg-gray-900 body-font">
                    <div className="container mx-auto px-5 py-5">
                        <div className="flex md:justify-between md:px-8 justify-center items-center flex-col md:flex-row">
                            <div className="  px-4">
                                <p className="text-sm">Send Email</p>
                                <h1 className="text-lg text-white font-semibold">
                                    <a href="mailto:roy@greenpoweredsystems.ie">roy@greenpoweredsystems.ie</a>
                                </h1>
                            </div>
                            <div className="  px-4">
                                <p className="text-sm">Call Now</p>
                                <div>
                                    <h1 className="text-lg text-white font-semibold">
                                        <a href="tel:+353851022100">+353 85 10 22 100</a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[85%] w-full border-t-2 md:ml-16 border-[#FFFFFF4D]">

                    </div>
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap md:text-left text-center order-first">
                            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">About</h2>
                                <p>
                                    We are the pioneers of electrical services for both ecological and environmental cause.
                                </p>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">Explore</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-400 hover:text-white">About company</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 hover:text-white">Meet the team</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 hover:text-white">News and media</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 hover:text-white">Contact</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">CONTACT</h2>
                                <nav className="list-none mb-10 space-y-3">
                                    <li>
                                        <p>
                                            Athlone, Co. Westmeath, Ireland
                                        </p>
                                    </li>
                                    <li className="flex space-x-2 justify-center md:justify-normal">
                                        <a className="text-gray-400 hover:text-white" href="https://www.facebook.com/GreenPoweredSystems" target="_blank" rel="noreferrer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-400 hover:text-white" href="https://www.instagram.com/green_powered_systems12" target="_blank" rel="noreferrer">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;