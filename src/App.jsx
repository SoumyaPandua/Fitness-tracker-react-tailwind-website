import Header from './components/Header';
import Hero from './components/Hero';
import WorkoutTracker from './components/WorkoutTracker';
import Progress from './components/Progress';
import FeaturedWorkouts from './components/FeaturedWorkouts';
import Quotes from './components/Quotes';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <WorkoutTracker />
        <Progress />
        <FeaturedWorkouts />
        <Quotes />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;