const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    text: "This fitness tracker has completely transformed my workout routine. I've lost 20 pounds in 3 months!",
    rating: 5
  },
  {
    name: "Mike Thompson",
    image: "https://i.pravatar.cc/150?img=2",
    text: "The progress tracking features keep me motivated. Best fitness app I've ever used!",
    rating: 5
  },
  {
    name: "Emily Davis",
    image: "https://i.pravatar.cc/150?img=3",
    text: "Love how easy it is to log workouts and track progress. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;