import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerList from './components/BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Beer App</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BeerList beers={beers} />
    </div>
  );
}

export default App;
