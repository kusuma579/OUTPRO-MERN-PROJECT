import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const token = localStorage.getItem("token");

    const scrollToSection = (id) => {

        if (location.pathname !== "/") {

            navigate("/");

            setTimeout(() => {

                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth"
                });

            }, 200);

        } else {

            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (

        <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-6">

            <div className="max-w-7xl mx-auto">

                <div className="glass rounded-2xl px-8 py-5 flex justify-between items-center">

                    {/* LOGO */}

                    <div
                        onClick={() => navigate("/")}
                        className="flex items-center gap-3 cursor-pointer"
                    >

                        <div className="gradient w-10 h-10 rounded-xl flex justify-center items-center text-white font-bold text-xl">

                            O

                        </div>

                        <h1 className="text-white text-3xl font-black tracking-wider">

                            OUTPRO

                        </h1>

                    </div>

                    {/* NAV LINKS */}

                    <div className="hidden lg:flex items-center gap-10 text-lg font-medium">

                        <ul className="flex gap-10 text-white">

                            <li
                                onClick={() => navigate("/")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                Home
                            </li>

                            <li
                                onClick={() => scrollToSection("services")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                Services
                            </li>

                            <li
                                onClick={() => scrollToSection("portfolio")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                Portfolio
                            </li>

                            <li
                                onClick={() => scrollToSection("testimonials")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                Testimonials
                            </li>

                            <li
                                onClick={() => navigate("/about")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                About
                            </li>

                            <li
                                onClick={() => navigate("/contact")}
                                className="cursor-pointer hover:text-purple-400 transition"
                            >
                                Contact
                            </li>

                        </ul>

                    </div>

                    {/* RIGHT BUTTONS */}

                    <div className="flex gap-4 items-center">

                        {
                            token ? (

                                <>

                                    <button
                                        onClick={() => navigate("/dashboard")}
                                        className="text-white px-6 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition"
                                    >

                                        Dashboard

                                    </button>

                                    <button

                                        onClick={() => {

                                            localStorage.removeItem("token");
                                            localStorage.removeItem("user");

                                            navigate("/signin");
                                        }}

                                        className="gradient px-6 py-3 rounded-xl text-white"
                                    >

                                        Logout

                                    </button>

                                </>

                            ) : (

                                <>

                                    <button

                                        onClick={() => navigate("/signin")}

                                        className="text-white px-6 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition"
                                    >

                                        Sign In

                                    </button>

                                    <button

                                        onClick={() => navigate("/signup")}

                                        className="gradient px-6 py-3 rounded-xl text-white"
                                    >

                                        Signup

                                    </button>

                                </>

                            )
                        }

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;