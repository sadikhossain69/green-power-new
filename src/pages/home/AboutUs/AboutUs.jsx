import { Fade } from "react-reveal";

const AboutUs = () => {
    return (
        <>
            <section>
                <div id="about" className="bg-[#F2F2FE]">
                    <div className="text-center space-y-2 pt-4">
                        <p className="font-semibold">About Us</p>
                        <h2 className={`text-[#0000FF] text-3xl font-semibold akshar-font`}>What Are We?!</h2>
                        <p className="text-sm">
                            We are the pioneers of electrical services for both ecological and environmental cause.
                        </p>
                    </div>
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                            <Fade left>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <img className="object-cover object-center rounded" alt="hero" src="aboutusBanner.jpg" />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#0000FF]">
                                        GREEN POWERED SYSTEMS
                                    </h1>
                                    <p className="mb-8 leading-relaxed">
                                        is a company that specializes in providing electrical services to both residential and commercial customers. They offer a wide range of electrical services, including installation, maintenance, and repair of electrical systems, as well as energy-efficient lighting solutions and renewable energy systems.</p>
                                    <div className="flex justify-center">
                                        <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase">Get In Touch</button>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default AboutUs;