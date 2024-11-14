import React from "react";
import { useState } from "react";
import "../styles.css";

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState({
    text: "Amo Mi Mama",
    author: "-Hugo",
  });

  const [isLoading, setIsLoading] = useState(false);

  const quotes = [
    {
      text: "Ella es muy amable",
      author: "-Hugo",
    },
    {
      text: "Ella me da mucho amor",
      author: "-Hugo",
    },
    {
      text: "siepmre estas cuando la neccisto",
      author: "-Hugo",
    },
    {
      text: "Ella brilla como el sol",
      author: "-Hugo",
    },
    {
      text: "Ella es bella y me hace sentir feliz",
      author: "-Hugo",
    },
  ];
  const generateNewQuote = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      setCurrentQuote(newQuote);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="container">
      <div className="quote-card">
        <div className="quote-content">
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            <div className="quote">
              <p>{currentQuote.text}</p>
              <p>{currentQuote.author}</p>
            </div>
          )}

          <button
            className="generate-button"
            onClick={generateNewQuote}
            disabled={isLoading}
          >
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
