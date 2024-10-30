const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="input-field"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;