import {
    useState
} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [formData,setFormData] = useState({

        name:"",
        email:"",
        password:""
    });

    const handleChange = (e)=>{

        setFormData({

            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{

            await axios.post(

                "http://localhost:5000/api/auth/signup",

                formData
            );

            alert("Signup Successful");

            navigate("/signin");

        }catch(error){

            console.log(error);
        }
    };
    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:5000/api/auth/signup",

                {
                    name,
                    email,
                    password
                }
            );

            alert("Signup Successful");

            console.log(res.data);

            navigate("/signin");

        } catch(error) {

            console.log(error);

            alert("Signup Failed");
        }
    };

    return (

        <div className="bg-[#050816] min-h-screen flex justify-center items-center text-white px-6">

            <div className="glass rounded-3xl p-12 w-full max-w-xl">

                <h1 className="text-5xl font-black mb-10">

                    Create Account

                </h1>

                <form
                    onSubmit={handleSignup}
                    className="flex flex-col gap-6"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-black/40 p-5 rounded-2xl border border-gray-700"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black/40 p-5 rounded-2xl border border-gray-700"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-black/40 p-5 rounded-2xl border border-gray-700"
                    />

                    <button className="gradient p-5 rounded-2xl font-bold">

                        Signup

                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signup;