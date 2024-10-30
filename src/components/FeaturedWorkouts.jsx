const workoutPlans = [
  {
    title: 'Cardio Blast',
    description: '30-minute high-intensity cardio workout',
    category: 'Cardio',
    icon: '🏃‍♂️',
  },
  {
    title: 'Strength Builder',
    description: 'Full-body strength training routine',
    category: 'Strength',
    icon: '💪',
  },
  {
    title: 'Yoga Flow',
    description: 'Relaxing yoga session for flexibility',
    category: 'Yoga',
    icon: '🧘‍♀️',
  },
];

const FeaturedWorkouts = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Featured Workouts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workoutPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{plan.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
                {plan.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkouts;