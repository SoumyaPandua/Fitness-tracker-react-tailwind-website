import fitnessHero from '../assets/fitness-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Track Your Fitness Goals,
            <span className="text-primary"> Anytime Anywhere</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Take control of your fitness journey with our comprehensive workout tracking platform.
          </p>
          <button className="btn-primary">Start Tracking Now</button>
        </div>
        <div className="md:w-1/2">
          <img
            src={fitnessHero}
            alt="Fitness Tracking"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;