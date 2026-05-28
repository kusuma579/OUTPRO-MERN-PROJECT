import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

    return (

        <div id="about" className="bg-[#050816] text-white min-h-screen">

            <Navbar />

            <section className="pt-40 pb-32 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <div>

                        <p className="text-purple-400 tracking-[5px] mb-5">
                            ABOUT US
                        </p>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-10">

                            We Build
                            <br />
                            Digital
                            <br />
                            Experiences

                        </h1>

                        <p className="text-gray-400 text-xl leading-relaxed">

                            OUTPRO is a premium enterprise digital agency
                            focused on creating world-class platforms,
                            modern user experiences, and scalable business
                            solutions for startups and enterprises.

                        </p>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-20 blur-[150px] top-0 left-0" />

                        <div className="glass rounded-[40px] p-12 relative z-10">

                            <div className="grid grid-cols-2 gap-8">

                                <div>

                                    <h1 className="text-5xl font-black mb-3">
                                        120+
                                    </h1>

                                    <p className="text-gray-400">
                                        Projects Completed
                                    </p>

                                </div>

                                <div>

                                    <h1 className="text-5xl font-black mb-3">
                                        50+
                                    </h1>

                                    <p className="text-gray-400">
                                        Global Clients
                                    </p>

                                </div>

                                <div>

                                    <h1 className="text-5xl font-black mb-3">
                                        10+
                                    </h1>

                                    <p className="text-gray-400">
                                        Years Experience
                                    </p>

                                </div>

                                <div>

                                    <h1 className="text-5xl font-black mb-3">
                                        99%
                                    </h1>

                                    <p className="text-gray-400">
                                        Satisfaction
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default About;