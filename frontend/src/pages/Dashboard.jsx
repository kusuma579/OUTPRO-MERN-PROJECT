import {
    useEffect,
    useState
} from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Analytics from "../components/Analytics";
import Notification from "../components/Notification";
import ActivityLogs from "../components/ActivityLogs";

function Dashboard() {

    const [projects, setProjects] = useState([]);

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        github: "",
        image: ""
    });

    useEffect(() => {

        fetchProjects();

    }, []);

    const fetchProjects = async () => {

        try {

            const response = await axios.get(

                "http://localhost:5000/api/projects"
            );

            setProjects(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/projects",

                formData
            );

            alert("Project Added Successfully");

            setFormData({

                title: "",
                description: "",
                github: "",
                image: ""
            });

            fetchProjects();

        } catch (error) {

            console.log(error);
        }
    };

    const deleteProject = async (id) => {

        try {

            await axios.delete(

                `http://localhost:5000/api/projects/${id}`
            );

            fetchProjects();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="bg-[#050816] min-h-screen text-white">

            <Navbar />

            <div className="pt-40 px-5 md:px-10 max-w-7xl mx-auto">

                <h1 className="text-4xl md:text-6xl font-black mb-16">

                    Admin Dashboard

                </h1>

                {/* FORM */}

                <div className="glass rounded-3xl px-5 md:px-10 py-10 mb-20">

                    <h1 className="text-4xl font-black mb-10">

                        Add Project

                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-6"
                    >

                        <input
                            type="text"
                            name="title"
                            placeholder="Project Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="bg-black/40 p-5 rounded-2xl border border-gray-700 outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={handleChange}
                            className="bg-black/40 p-5 rounded-2xl border border-gray-700 outline-none"
                            required
                        />

                        <input
                            type="text"
                            name="github"
                            placeholder="Github Link"
                            value={formData.github}
                            onChange={handleChange}
                            className="bg-black/40 p-5 rounded-2xl border border-gray-700 md:col-span-2 outline-none"
                            required
                        />

                        <textarea
                            name="description"
                            placeholder="Project Description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-black/40 p-5 rounded-2xl border border-gray-700 md:col-span-2 outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="gradient p-5 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300"
                        >

                            Add Project

                        </button>

                    </form>

                </div>

                {/* PROJECT LIST */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {
                        projects.map((project) => (

                            <div
                                key={project._id}
                                className="glass rounded-3xl overflow-hidden"
                            >

                                <img
                                    src={project.image}
                                    alt=""
                                    className="h-[250px] w-full object-cover"
                                />

                                <div className="p-8">

                                    <h1 className="text-3xl font-black mb-4">

                                        {project.title}

                                    </h1>

                                    <p className="text-gray-400 mb-6">

                                        {project.description}

                                    </p>

                                    <div className="flex gap-4">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="gradient px-5 py-3 rounded-xl"
                                        >

                                            Github

                                        </a>

                                        <button
                                            onClick={() => deleteProject(project._id)}
                                            className="bg-red-500 px-5 py-3 rounded-xl hover:bg-red-600 transition"
                                        >

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

                {/* EXTRA COMPONENTS */}

                <div className="mt-20">

                    <Analytics />

                </div>

                <div className="mt-20">

                    <Notification />

                </div>

                <div className="mt-20 pb-20">

                    <ActivityLogs />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;