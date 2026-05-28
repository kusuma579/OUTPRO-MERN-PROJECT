import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        message: ""

    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await axios.post(

                "http://localhost:5000/api/contact",

                formData
            );

            console.log(response.data);

            alert("Contact Created Successfully");

            setFormData({

                name: "",
                email: "",
                message: ""
            });

            setLoading(false);

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

            setLoading(false);
        }
    };

    return (

        <div
            id="contact"
            className="bg-black min-h-screen text-white"
        >

            <Navbar />

            <div className="flex justify-center items-center min-h-screen px-6">

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-900 border border-gray-800 p-12 rounded-3xl w-full max-w-2xl shadow-2xl"
                >

                    <h1 className="text-5xl font-bold mb-10 text-center">

                        Contact Us

                    </h1>

                    <div className="flex flex-col gap-6">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-black border border-gray-700 p-5 rounded-xl outline-none focus:border-purple-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black border border-gray-700 p-5 rounded-xl outline-none focus:border-purple-500"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-black border border-gray-700 p-5 rounded-xl outline-none focus:border-purple-500"
                        />

                        <button
                            type="submit"
                            className="bg-white text-black p-5 rounded-xl font-bold hover:scale-105 transition duration-300"
                        >

                            {loading ? "Sending..." : "Send Message"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Contact;