import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

function Analytics() {

    const barData = [

        {
            name:"Projects",
            value:120
        },

        {
            name:"Clients",
            value:50
        },

        {
            name:"Messages",
            value:35
        },

        {
            name:"Users",
            value:80
        }
    ];

    const pieData = [

        {
            name:"Completed",
            value:70
        },

        {
            name:"Pending",
            value:30
        }
    ];

    return (

        <div className="grid md:grid-cols-2 gap-10 mt-20">

            {/* BAR CHART */}

            <div className="glass rounded-3xl p-10 h-[400px]">

                <h1 className="text-3xl font-black mb-10">

                    Dashboard Analytics

                </h1>

                <ResponsiveContainer width="100%" height="80%">

                    <BarChart data={barData}>

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar dataKey="value" />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* PIE CHART */}

            <div className="glass rounded-3xl p-10 h-[400px]">

                <h1 className="text-3xl font-black mb-10">

                    Project Status

                </h1>

                <ResponsiveContainer width="100%" height="80%">

                    <PieChart>

                        <Pie
                            data={pieData}
                            dataKey="value"
                            outerRadius={120}
                            label
                        >

                            <Cell />

                            <Cell />

                        </Pie>

                        <Tooltip />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default Analytics;