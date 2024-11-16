import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Settings,
  User,
  ClipboardList,
  LayoutDashboard,
  ChartArea,
} from "lucide-react";

const DashboardPage = () => {
  // Sample data for the chart
  const quotationData = Array.from({ length: 12 }, (_, i) => ({
    name: String.fromCharCode(65 + i),
    newRequest: Math.floor(Math.random() * 3000) + 1000,
    underReview: Math.floor(Math.random() * 2000) + 500,
  }));

  const stats = [
    { label: "Total Request", value: "2.3k", change: "+100.0%" },
    {
      label: "Total Approval",
      value: "823",
      change: "+30.9%",
      highlight: true,
    },
    { label: "Pending Quotation", value: "1.2k", change: "+59.8%" },
    { label: "Rejected Quotation", value: "200", change: "+10.2%" },
    { label: "Under Review Process", value: "102", change: "+10.2%" },
  ];

  const shipments = [
    {
      name: "User 1",
      role: "Lead Cook",
      code: "BRU1902-ARC",
      pickup: "New York",
      dropoff: "London",
      weight: "3.8 Tonne",
      type: "Bulk Shipping",
      status: "Shipped",
    },
    {
      name: "User 2",
      role: "CTO",
      code: "BRU4513-PEC",
      pickup: "Deblin",
      dropoff: "Norway",
      weight: "5.8 Tonne",
      type: "Bulk Shipping",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-xl font-light mb-12">
            <ChartArea className="w-6 h-6" />
            <span>Management</span>
          </div>

          <nav className="space-y-4">
            {[
              {
                icon: <LayoutDashboard className="w-5 h-5" />,
                label: "Dashboard",
                active: true,
              },
              {
                icon: <ClipboardList className="w-5 h-5" />,
                label: "Quotations",
              },
              { icon: <User className="w-5 h-5" />, label: "Profile" },
              { icon: <Settings className="w-5 h-5" />, label: "Settings" },
            ].map((item, i) => (
              <button
                key={i}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                  item.active ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Search For Query"
              className="pl-4 pr-10 py-2 border rounded-lg w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="font-light">User_profile</span>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl ${
                stat.highlight ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="text-3xl font-light mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="text-sm text-green-500 mt-2">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-light">Quotation Overview</h3>
            <select className="border rounded-lg px-3 py-1">
              <option>15 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quotationData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="newRequest" fill="#000000" />
                <Bar dataKey="underReview" fill="#cccccc" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Shipments Table */}
        <div className="bg-white rounded-xl p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">Enquiry Management</th>
                <th className="pb-4">Code Number</th>
                <th className="pb-4">Pickup Location</th>
                <th className="pb-4">Drop Location</th>
                <th className="pb-4">Weight</th>
                <th className="pb-4">Load Type</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, i) => (
                <tr key={i} className="border-t">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <div>{shipment.name}</div>
                        <div className="text-sm text-gray-500">
                          {shipment.role}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{shipment.code}</td>
                  <td>{shipment.pickup}</td>
                  <td>{shipment.dropoff}</td>
                  <td>{shipment.weight}</td>
                  <td>{shipment.type}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        shipment.status === "Shipped"
                          ? "bg-black text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
