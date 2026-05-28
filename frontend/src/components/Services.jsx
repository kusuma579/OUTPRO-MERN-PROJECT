import {
    FaCode,
    FaPalette,
    FaRocket
} from "react-icons/fa";

function Services() {

    const services = [
        {
            icon:<FaCode />,
            title:"Development",
            desc:"Modern scalable enterprise applications."
        },
        {
            icon:<FaPalette />,
            title:"UI/UX Design",
            desc:"Luxury premium user experiences."
        },
        {
            icon:<FaRocket />,
            title:"Strategy",
            desc:"Growth focused digital transformation."
        }
    ];

    return (

        <section
            id="services"
            className="py-32 bg-[#050816] text-white"
        >

            <div id="services" className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">

                    <p className="text-purple-400 tracking-[5px] mb-5">
                        SERVICES
                    </p>

                    <h1 className="text-6xl font-black">
                        What We Offer
                    </h1>

                </div>

                <div className="grid md:grid-cols-3 gap-10">

                    {
                        services.map((service,index)=>(

                            <div
                                key={index}
                                className="glass rounded-3xl p-12 hover:-translate-y-3 transition duration-500"
                            >

                                <div className="text-6xl text-purple-400 mb-8">
                                    {service.icon}
                                </div>

                                <h1 className="text-3xl font-bold mb-6">
                                    {service.title}
                                </h1>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {service.desc}
                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default Services;