import {
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaGithub
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="relative bg-black text-white overflow-hidden">

            {/* TOP GRADIENT */}

            <div className="absolute top-0 left-0 w-full h-full">

                <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[180px] top-[-100px] left-[-100px]" />

                <div className="absolute w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[180px] bottom-[-100px] right-[-100px]" />

            </div>

            {/* MAIN CONTENT */}

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">

                {/* CTA SECTION */}

                <div className="glass rounded-[40px] p-16 flex flex-col lg:flex-row justify-between items-center gap-10 mb-28">

                    <div>

                        <p className="text-purple-400 tracking-[5px] mb-5">
                            LET'S BUILD
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">

                            Ready To
                            <br />
                            Transform
                            <br />
                            Your Brand?

                        </h1>

                    </div>

                    <button className="gradient px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition">

                        <button

                            onClick={() => {

                                document
                                .getElementById("contact")
                                ?.scrollIntoView({

                                    behavior:"smooth"
                                });
                            }}

                            className="gradient px-8 py-4 rounded-2xl text-white font-bold"
                        >

                            Start Project

                        </button>

                    </button>

                </div>

                {/* FOOTER GRID */}

                <div className="grid md:grid-cols-4 gap-16">

                    {/* BRAND */}

                    <div>

                        <h1 className="text-5xl font-black mb-8 tracking-widest">
                            OUTPRO
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-lg">

                            Premium enterprise digital solutions
                            for modern businesses and startups.

                        </p>

                        <div className="flex gap-5 mt-10 text-2xl">

                            <FaInstagram className="hover:text-purple-400 cursor-pointer transition" />

                            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

                            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />

                            <FaGithub className="hover:text-gray-300 cursor-pointer transition" />

                        </div>

                    </div>

                    {/* COMPANY */}

                    <div>

                        <h2 className="text-2xl font-bold mb-8">
                            Company
                        </h2>

                        <div className="flex flex-col gap-5 text-gray-400 text-lg">

                            <p className="hover:text-white cursor-pointer transition">
                                About Us
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Services
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Portfolio
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Careers
                            </p>

                        </div>

                    </div>

                    {/* SERVICES */}

                    <div>

                        <h2 className="text-2xl font-bold mb-8">
                            Services
                        </h2>

                        <div className="flex flex-col gap-5 text-gray-400 text-lg">

                            <p className="hover:text-white cursor-pointer transition">
                                Web Development
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                UI/UX Design
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Branding
                            </p>

                            <p className="hover:text-white cursor-pointer transition">
                                Marketing
                            </p>

                        </div>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <h2 className="text-2xl font-bold mb-8">
                            Contact
                        </h2>

                        <div className="flex flex-col gap-5 text-gray-400 text-lg">

                            <p>
                                contact@outpro.com
                            </p>

                            <p>
                                +91 9876543210
                            </p>

                            <p>
                                Hyderabad, India
                            </p>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}

                <div className="border-t border-gray-800 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-5">

                    <p className="text-gray-500 text-lg">
                        © 2026 OUTPRO. All Rights Reserved.
                    </p>

                    <div className="flex gap-10 text-gray-500">

                        <p className="hover:text-white cursor-pointer transition">
                            Privacy Policy
                        </p>

                        <p className="hover:text-white cursor-pointer transition">
                            Terms & Conditions
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;