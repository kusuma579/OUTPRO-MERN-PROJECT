import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (

        <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">

            <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-20 top-[-100px] left-[-100px]" />

            <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[200px] opacity-20 bottom-[-100px] right-[-100px]" />

            <div className="relative z-10 text-center max-w-6xl px-6">

                <motion.p
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    className="text-purple-400 text-xl mb-6 tracking-[5px]"
                >

                    MODERN DIGITAL AGENCY

                </motion.p>

                <motion.h1
                    initial={{ opacity:0, y:100 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:1 }}
                    className="text-white text-7xl md:text-[110px] font-black leading-none"
                >

                    Enterprise
                    <br />
                    Experience

                </motion.h1>

                <motion.p
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:0.5 }}
                    className="text-gray-400 text-xl mt-10 max-w-3xl mx-auto leading-relaxed"
                >

                    We create world-class enterprise digital platforms
                    with premium UI/UX experiences for modern brands.

                </motion.p>

                <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ delay:1 }}
                    className="flex justify-center gap-6 mt-14"
                >

                    <button className="gradient px-10 py-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition">

                        <motion.button

                            whileHover={{ scale:1.05 }}

                            whileTap={{ scale:0.95 }}

                            onClick={() => navigate("/signup")}

                            className="gradient px-10 py-5 rounded-2xl text-white font-bold text-lg shadow-2xl"
                         >

                            Get Started

                        </motion.button>

                    </button>

                    <button className="glass px-10 py-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition">

                        <motion.button

                                whileHover={{ scale:1.05 }}

                                whileTap={{ scale:0.95 }}

                                onClick={() => {

                                    document
                                    .getElementById("services")
                                    ?.scrollIntoView({

                                        behavior:"smooth"
                                    });
                                }}

                                className="border border-gray-600 px-10 py-5 rounded-2xl text-white font-bold text-lg"
                             >

                                Learn More

                            </motion.button>

                    </button>

                </motion.div>

            </div>

        </section>
        
    );
}

export default Hero;