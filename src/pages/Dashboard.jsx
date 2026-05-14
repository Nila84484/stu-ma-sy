import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    const data = [
        { name: "Total", students: 120 },
        { name: "Present", students: 98 },
        { name: "Absent", students: 22 },
    ];
    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg p-5">
                <h1 className="text-xl font-bold mb-6">Student System</h1>

                <ul className="space-y-4">
                    <li className="text-blue-600 font-semibold cursor-pointer">
                        Dashboard
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Students
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Attendance
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Settings
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Dashboard Overview
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Total Students</h3>
                        <p className="text-2xl font-bold">120</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Present Today</h3>
                        <p className="text-2xl font-bold">98</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Absent</h3>
                        <p className="text-2xl font-bold">22</p>
                    </div>

                </div>

                {/* Chart Placeholder */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold mb-4">Attendance Chart</h3>
                    <p className="text-gray-500">

                    </p>
                </div>

            </div>
            <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
            <div className="mt-8 bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-4">Student Analytics</h3>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="students" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}