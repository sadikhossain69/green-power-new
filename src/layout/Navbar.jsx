const Navbar = () => {
    return (
        <>
            <section>
                <div className="navbar px-10 bg-[#52FF00] fixed top-0 z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href="/">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl" href="/">
                            <img src="companyLogo.png" alt="" width={150} />
                        </a>
                    </div>
                    <div className="navbar-end hidden ">
                        <a className="btn bg-primary">contact us</a>
                    </div>
                    <div className="navbar-end hidden md:inline-flex space-x-5">
                        <a href="/">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a className="btn bg-primary " href="#contact">contact us</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;