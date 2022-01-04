import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
const base_url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=4cd42f31881f7442b5dcc5a31034d322&format=1";
function App() {
  // we want to use useState to state which currency will be converted
  // we dont have any initial state so we put empty array
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);
  // we use useEffect hook to fetch data and return to empty array so it render once
  // we can not use async/await so use .then which will return a promise and then
  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  return (
    <div className="App">
      <h1>Convert</h1>
      {/* pass currency state as prop*/}
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className="equal">=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </div>
  );
}

export default App;
