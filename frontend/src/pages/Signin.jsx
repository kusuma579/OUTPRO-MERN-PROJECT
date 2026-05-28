import {
    useState
} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Signin() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({

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

            const response =
            await axios.post(

                "http://localhost:5000/api/auth/login",

                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            alert("Login Successful");

            navigate("/dashboard");

        }catch(error){

            console.log(error);
        }
    };

    return (

        <div className="bg-[#050816] min-h-screen flex justify-center items-center text-white px-6">

            <div className="glass rounded-3xl p-12 w-full max-w-xl">

                <h1 className="text-5xl font-black mb-10">

                    Sign In

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                >

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="bg-black/40 p-5 rounded-2xl border border-gray-700"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="bg-black/40 p-5 rounded-2xl border border-gray-700"
                    />

                    <button className="gradient p-5 rounded-2xl font-bold">

                        Login

                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signin;