import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const petsData = {
  Luna: {
    steps: 8420,
    heartRate: 85,
    hydration: 75,
    mealsPortion: 90,
    sleepHours: 12,
    activityLevel: 85,
    overallIndex: 79,
    weeklyData: [
      { day: "Mon", steps: 7500, heartRate: 82, hydration: 70 },
      { day: "Tue", steps: 8200, heartRate: 85, hydration: 75 },
      { day: "Wed", steps: 7800, heartRate: 83, hydration: 72 },
      { day: "Thu", steps: 8420, heartRate: 85, hydration: 75 },
      { day: "Fri", steps: 7900, heartRate: 84, hydration: 73 },
      { day: "Sat", steps: 8100, heartRate: 86, hydration: 74 },
      { day: "Sun", steps: 8300, heartRate: 85, hydration: 76 },
    ],
  },
  Max: {
    steps: 9200,
    heartRate: 88,
    hydration: 80,
    mealsPortion: 85,
    sleepHours: 10,
    activityLevel: 90,
    overallIndex: 87,
    weeklyData: [
      { day: "Mon", steps: 8800, heartRate: 87, hydration: 78 },
      { day: "Tue", steps: 9000, heartRate: 88, hydration: 80 },
      { day: "Wed", steps: 8600, heartRate: 86, hydration: 77 },
      { day: "Thu", steps: 9200, heartRate: 88, hydration: 80 },
      { day: "Fri", steps: 8900, heartRate: 87, hydration: 79 },
      { day: "Sat", steps: 9100, heartRate: 89, hydration: 81 },
      { day: "Sun", steps: 9300, heartRate: 88, hydration: 82 },
    ],
  },
};

const Health = () => {
  const [selectedPet, setSelectedPet] = useState("Luna");
  const healthData = petsData[selectedPet];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 relative">
        <div className="absolute top-6 right-8">
          <select
            className="border border-gray-300 rounded-lg p-2"
            value={selectedPet}
            onChange={(e) => setSelectedPet(e.target.value)}
          >
            {Object.keys(petsData).map((pet) => (
              <option key={pet} value={pet}>
                {pet}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
              📊 Health Monitoring 💖
              </h1>
              <p className="text-gray-500">All the numbers behind those happy tail wags.</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-4">
              {Object.entries(healthData).slice(0, 6).map(([key, value]) => (
                <div key={key} className="bg-primary/30 rounded-xl p-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">{key}</h3>
                  <p className="text-2xl font-semibold">{value}{key === "heartRate" ? " bpm" : key === "sleepHours" ? "h": key === "steps" ? "" : "%"}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-50 p-3 mb-2">
              <h3 className="text-lg font-semibold mb-2">Weekly Trends</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healthData.weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="steps" stroke="#9EC5FE" name="Steps" />
                    <Line type="monotone" dataKey="heartRate" stroke="#F1A7A7" name="Heart Rate" />
                    <Line type="monotone" dataKey="hydration" stroke="#A7F1E4" name="Hydration" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-secondary/80 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Overall Zoomies Index 😇</h3>
              <p className="text-4xl font-bold">{healthData.overallIndex}%</p>
              <p className="text-gray-600 mt-2">Your pet is doing great! Keep up the good work.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Health;
