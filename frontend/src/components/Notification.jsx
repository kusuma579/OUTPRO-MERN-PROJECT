import { useEffect,useState } from "react";

import io from "socket.io-client";

const socket =
io("http://localhost:5000");

function Notification() {

    const [notification,setNotification] =
    useState("");

    useEffect(()=>{

        socket.on("newMessage",(data)=>{

            setNotification(data.message);

            setTimeout(()=>{

                setNotification("");

            },4000);
        });

    },[]);

    return (

        <>
            {
                notification && (

                    <div className="fixed top-10 right-10 z-50 gradient px-8 py-5 rounded-2xl text-white font-bold shadow-2xl">

                        {notification}

                    </div>
                )
            }
        </>
    );
}

export default Notification;