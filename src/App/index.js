import { useState } from "react";
import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="app">
      <Clock/>
      <Form result={result} calculateResult={calculateResult} />
    </div>
  );
}

export default App;
