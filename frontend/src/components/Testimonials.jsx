function Testimonials() {

    const testimonials = [
        {
            name: "John Smith",
            role: "CEO",
            review: "Amazing experience working with this team."
        },
        {
            name: "Sarah Johnson",
            role: "Founder",
            review: "Highly professional and modern solutions."
        },
        {
            name: "Michael Lee",
            role: "Director",
            review: "Outstanding design and development quality."
        }
    ];
    
    return (

        <section
            id="testimonials"
            className="bg-black text-white py-32 px-8"
        >

            <div id="testimonials" className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center mb-20">
                    Testimonials
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    {
                        testimonials.map((item, index) => (

                            <div
                                key={index}
                                className="bg-gray-900 border border-gray-800 p-10 rounded-3xl"
                            >

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    "{item.review}"
                                </p>

                                <div className="mt-8">

                                    <h3 className="text-2xl font-bold">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-500">
                                        {item.role}
                                    </p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default Testimonials;