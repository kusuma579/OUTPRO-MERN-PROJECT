import Navbar from "../components/Navbar";

function GetStarted() {

    return (

        <div className="bg-[#050816] min-h-screen text-white">

            <Navbar />

            <section className="pt-40 pb-32 px-6">

                <div className="max-w-7xl mx-auto text-center">

                    <p className="text-blue-400 tracking-[5px] mb-5">
                        START YOUR JOURNEY
                    </p>

                    <h1 className="text-7xl md:text-[100px] font-black leading-none mb-10">

                        Let's Build
                        <br />
                        Something Great

                    </h1>

                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">

                        Transform your business with premium enterprise
                        digital experiences and scalable modern solutions.

                    </p>

                    <div className="grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">

                        <div className="glass rounded-3xl p-12">

                            <h1 className="text-4xl font-black mb-6">
                                Strategy
                            </h1>

                            <p className="text-gray-400">
                                Enterprise growth planning and solutions.
                            </p>

                        </div>

                        <div className="glass rounded-3xl p-12">

                            <h1 className="text-4xl font-black mb-6">
                                Design
                            </h1>

                            <p className="text-gray-400">
                                Premium UI/UX digital experiences.
                            </p>

                        </div>

                        <div className="glass rounded-3xl p-12">

                            <h1 className="text-4xl font-black mb-6">
                                Development
                            </h1>

                            <p className="text-gray-400">
                                Modern scalable applications.
                            </p>

                        </div>

                    </div>

                    <button className="gradient mt-20 px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition">

                        Start Now

                    </button>

                </div>

            </section>

        </div>
    );
}

export default GetStarted;