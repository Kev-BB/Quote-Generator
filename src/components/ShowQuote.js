import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ShowQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    };
    fetchQuotes();
  }, []);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setNewQuote(randomQuote);
  };

  return (
    <div className="q-container">
      <h1>Quote Generator</h1>
      <button onClick={handleNewQuote}>New Quote</button>
      {newQuote && (
        <Card className="container">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote">
              <p>{newQuote?.text}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{newQuote?.author}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ShowQuote;
