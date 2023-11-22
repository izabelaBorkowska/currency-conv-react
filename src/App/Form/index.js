import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">Currency Converter</h1>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Calculate your currency</legend>
        <p>
          <label className="container">
            <span className="form__labelText">Amount in PLN:</span>
            <input
              autoFocus
              className="form__field"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="amount"
              type="number"
              required
            />
          </label>
        </p>
        <p>
          <label className="container">
            <span className="form__labelText">Choose currency:</span>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">
            <strong>Calculate</strong>
          </button>
        </p>

    <div className='form__result'>Result:
         <Result result={result} /></div>
      </fieldset>
    </form>
  );
};
