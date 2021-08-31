import React, { useEffect, useState } from "react";

function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

  const randomColor = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;

  useEffect(() => {
    fetch("https://type.fit/api/quotes", {
      method: "GET"
   })
   .then(response => response.json())
   .then(data => { setQuotes(data); setQuote(data[Math.round(Math.random()* 1643)]) });
  },[]);

  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <div id="quote-box">
        <div id="text" style={{color: randomColor}}>{quote.text}</div>
        <div id="author" style={{color: randomColor}}>- {quote.author ?? 'author unknown'}</div>
        <button id="new-quote" onClick={() => setQuote(quotes[Math.round(Math.random()* 1643)])} style={{backgroundColor: randomColor}}>Next quote</button>
      </div>
    </div>
  );
}

export default App;
