import { useState } from "react";
import "./sass/main.scss";
export default function App() {
  // const [monthlyExpenses, setMonthlyExpenses] = useState([
  //   { id: 1, expenseName: "rent", priceValue: 550 },
  //   { id: 2, expenseName: "Travel", priceValue: 120.5 },
  // ]);
  const [expenses, setExpenses] = useState([
    { id: 1, expenseName: "food", priceValue: "35.89" },
    { id: 2, expenseName: "games", priceValue: "22.5" },
  ]);

  function handleAddExpense(e) {
    e.preventDefault();
    console.log("added");
    let idWithTime = Date.now();
    let newExpense = {
      id: idWithTime,
      expenseName: expenses.expenseName,
      priceValue: expenses.priceValue,
    };
    setExpenses((prev) => [...prev, newExpense]);
  }

  return (
    <div className="app">
      {/* Header */}
      <div className="main">
        <div className="header">
          <h3 className="header-name">flow</h3>
          <p className="header-amount">0.00</p>
        </div>
        {/* monthly things */}
        <>
          <div className="sub">
            <ul className="sub-lists">
              {/* {monthlyExpenses.map((e) => (
                <li className="sub-list" key={e.id}>
                  <span className="sub-list--name">{e.expenseName}</span>
                  <span className="sub-list--price">${e.priceValue}</span>
                </li>
              ))} */}
            </ul>
          </div>
        </>
      </div>
      {/* list */}
      {/* sub-list */}
      <>
        <div className="bills-box">
          <ul className="bills-box--list">
            {expenses.map((e) => (
              <li className="bill" key={e.id}>
                <span className="bill-name">{e.expenseName}</span>
                <span className="bill-price">-{e.priceValue}$</span>
              </li>
            ))}
          </ul>
        </div>
      </>

      {/* form */}
      <form className="form">
        <div className="form-input">
          <input
            placeholder="spent on.."
            className="form-input--name"
            type="text"
            value={expenses.expenseName}
            onChange={function (e) {
              expenses.expenseName = e.target.value;
            }}
          />
          <input
            type="number"
            // step="0.01"
            // placeholder="0.00"
            className="form-input--price"
            value={expenses.priceValue}
            onChange={function (e) {
              expenses.priceValue = e.target.value;
            }}
          />
          <button className="form-input--btn btn" onClick={handleAddExpense}>
            $ add
          </button>
        </div>
      </form>
    </div>
  );
}
