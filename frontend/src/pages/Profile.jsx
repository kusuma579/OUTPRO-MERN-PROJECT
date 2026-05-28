function Profile() {

    const user =
    JSON.parse(localStorage.getItem("user"));

    return (

        <div className="bg-[#050816] min-h-screen text-white flex justify-center items-center px-6">

            <div className="glass rounded-3xl p-16 w-full max-w-2xl text-center">

                <div className="w-32 h-32 rounded-full gradient mx-auto mb-10 flex justify-center items-center text-5xl font-black">

                    {user?.name?.charAt(0)}

                </div>

                <h1 className="text-5xl font-black mb-5">

                    {user?.name}

                </h1>

                <p className="text-gray-400 text-xl mb-5">

                    {user?.email}

                </p>

                <div className="inline-block gradient px-8 py-3 rounded-2xl font-bold text-lg">

                    {user?.role}

                </div>

            </div>

        </div>
    );
}

export default Profile;