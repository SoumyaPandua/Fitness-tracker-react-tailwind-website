import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const WorkoutTracker = () => {
  const [workoutDate, setWorkoutDate] = useState(new Date());
  const [workoutForm, setWorkoutForm] = useState({
    exercise: '',
    sets: '',
    reps: '',
    duration: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle workout submission
    console.log({ ...workoutForm, date: workoutDate });
  };

  return (
    <section id="workouts" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Log Your Workout
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Date
              </label>
              <DatePicker
                selected={workoutDate}
                onChange={date => setWorkoutDate(date)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Exercise Name
              </label>
              <input
                type="text"
                className="input-field"
                value={workoutForm.exercise}
                onChange={e => setWorkoutForm({...workoutForm, exercise: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Sets
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={workoutForm.sets}
                  onChange={e => setWorkoutForm({...workoutForm, sets: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Reps
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={workoutForm.reps}
                  onChange={e => setWorkoutForm({...workoutForm, reps: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-white mb-2">
                  Duration (min)
                </label>
                <input
                  type="number"
                  className="input-field"
                  value={workoutForm.duration}
                  onChange={e => setWorkoutForm({...workoutForm, duration: e.target.value})}
                />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">
              Add Workout
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkoutTracker;