import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "Unknown"
  },
  {
    text: "Your body can stand almost anything. It's your mind that you have to convince.",
    author: "Unknown"
  },
  {
    text: "The hard days are the best because that's when champions are made.",
    author: "Gabrielle Reece"
  },
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Daily Motivation</h2>
          <blockquote className="text-2xl italic mb-4">
            "{quotes[currentQuote].text}"
          </blockquote>
          <cite className="text-lg">- {quotes[currentQuote].author}</cite>
        </div>
      </div>
    </section>
  );
};

export default Quotes;