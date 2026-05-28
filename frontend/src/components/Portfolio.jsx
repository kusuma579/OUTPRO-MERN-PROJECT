function Portfolio() {

    const projects = [
        {
            title:"Corporate Platform",
            image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title:"Business Analytics",
            image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        },
        {
            title:"Enterprise Solutions",
            image:"https://images.unsplash.com/photo-1552664730-d307ca884978"
        }
    ];

    return (

        <section
            id="portfolio"
            className="py-32 bg-[#050816] text-white"
        >

            <div id="portfolio" className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">

                    <p className="text-blue-400 tracking-[5px] mb-5">
                        PORTFOLIO
                    </p>

                    <h1 className="text-6xl font-black">
                        Featured Projects
                    </h1>

                </div>

                <div className="grid md:grid-cols-3 gap-10">

                    {
                        projects.map((project,index)=>(

                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-3xl"
                            >

                                <img
                                    src={project.image}
                                    className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                <div className="absolute bottom-10 left-10">

                                    <h1 className="text-4xl font-bold">
                                        {project.title}
                                    </h1>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default Portfolio;