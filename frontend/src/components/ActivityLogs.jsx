import {
    useEffect,
    useState
} from "react";

import axios from "axios";

function ActivityLogs() {

    const [activities,setActivities] =
    useState([]);

    useEffect(()=>{

        fetchActivities();

    },[]);

    const fetchActivities = async()=>{

        try{

            const response =
            await axios.get(

                "http://localhost:5000/api/activities"
            );

            setActivities(response.data);

        }catch(error){

            console.log(error);
        }
    };

    return (

        <div className="glass rounded-3xl p-10 mt-20">

            <h1 className="text-4xl font-black mb-10">

                Recent Activities

            </h1>

            <div className="flex flex-col gap-6">

                {
                    activities.map((activity)=>(

                        <div
                            key={activity._id}
                            className="bg-black/30 p-6 rounded-2xl border border-gray-800"
                        >

                            <h1 className="text-xl font-bold">

                                {activity.action}

                            </h1>

                            <p className="text-gray-400 mt-2">

                                {new Date(
                                    activity.createdAt
                                ).toLocaleString()}

                            </p>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default ActivityLogs;