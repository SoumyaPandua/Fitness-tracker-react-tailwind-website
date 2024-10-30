import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Progress = () => {
  const data = [
    { name: 'Mon', calories: 2400, weight: 85 },
    { name: 'Tue', calories: 2100, weight: 84.5 },
    { name: 'Wed', calories: 2800, weight: 84.3 },
    { name: 'Thu', calories: 2600, weight: 84.1 },
    { name: 'Fri', calories: 2900, weight: 83.8 },
    { name: 'Sat', calories: 2400, weight: 83.5 },
    { name: 'Sun', calories: 2200, weight: 83.2 },
  ];

  return (
    <section id="progress" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Your Progress
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Weekly Overview</h3>
            <div className="overflow-x-auto">
              <LineChart width={800} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="calories" stroke="#646cff" />
                <Line yAxisId="right" type="monotone" dataKey="weight" stroke="#ff4757" />
              </LineChart>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Total Workouts</h4>
              <p className="text-3xl font-bold text-primary">24</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Calories Burned</h4>
              <p className="text-3xl font-bold text-primary">12,450</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-2 dark:text-white">Weight Lost</h4>
              <p className="text-3xl font-bold text-primary">2.8 kg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;