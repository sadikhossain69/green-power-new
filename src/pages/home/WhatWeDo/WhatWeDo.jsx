import { Zoom } from "react-reveal";

const WhatWeDo = () => {
    return (
        <>
            <section>
                <div className=" container mx-auto py-10">
                    <div>
                        <p className={`text-[#0000FF] text-3xl text-center font-semibold`}>What do we do?!</p>
                        <p className="text-sm text-center mt-2">
                            We are the pioneers of electrical services for both ecological and environmental cause.
                        </p>
                    </div>
                    <div className=" relative flex flex-col justify-between items-center lg:flex-row py-10 px-5 space-y-4 md:space-y-0">
                        <Zoom>
                            <img src="whatWeDoLeft.jpg" alt="" />
                        </Zoom>
                        <p className={`text-[#0000FF]  text-center text-6xl border-b-2 border-[#52FF00] mx-4`}>
                            Give us a call to get started
                        </p>
                        {/* <div className="hidden xl:block absolute bottom-28 left-[35%] w-96 border-b-2 border-[#52FF00]"></div> */}
                        <Zoom>
                            <img src="whatWeDoRight.jpg" alt="" />
                        </Zoom>
                    </div>
                    <div>
                        <span className="flex justify-center">
                            <h1 className={`text-center text-[#0000FF] lg:text-6xl md:text-3xl text-2xl border-b-2 border-[#52FF00] inline py-2 `}>
                                Quality Work For an Affordable Price
                            </h1>
                        </span>
                        <div className="flex md:flex-row flex-col justify-between py-10 px-6 space-y-3 md:space-y-0">
                            <div>
                                <p className={`text-[#0000FF] font-semibold border-b-2 border-[#52FF00] inline text-2xl `}>Why Green Powered Systems?</p>
                                <ul>
                                    <li className="text-semibold">{'->18yrs Electrical Experience'}</li>
                                    <li className="text-semibold">{'->Friendly, Reliable Service'}</li>
                                    <li className="text-semibold">{'->Versatility & Ingenuity to get the job done'}</li>
                                </ul>
                            </div>
                            <div>
                                <p className={`text-[#0000FF] font-semibold border-b-2 border-[#52FF00] inline text-2xl`}>What you get?</p>
                                <ul>
                                    <li className="text-semibold">{'->Free Estimations & Consultations'}</li>
                                    <li className="text-semibold">{'->Top Quality Work for an Affordable Price'}</li>
                                    <li className="text-semibold">{'->Hands on Job Management by Owner'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhatWeDo;