import "./sass/main.scss";
export default function App() {
  function handleAddExpense(e) {
    e.preventDefault();
    console.log("add");
  }
  return (
    <div className="app">
      {/* Main */}
      <div className="main">
        <div className="header">
          <h3 className="header-name">flow</h3>
          <p className="header-amount">0.00</p>
        </div>
        <div className="sub">
          <ul className="sub-lists">
            <li className="sub-list">
              <span className="sub-list--name">one</span>
              <span className="sub-list--price">0.00</span>
            </li>
            <li className="sub-list">
              <span className="sub-list--name">two</span>
              <span className="sub-list--price">0.00</span>
            </li>
          </ul>
        </div>
      </div>
      {/* list */}
      <div className="bills-box">
        <ul className="bills-box--list">
          {/* sub-list */}
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">-1.00$</span>
          </li>
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">-2.50$</span>
          </li>
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">-35.85$</span>
          </li>
        </ul>
      </div>
      {/* form */}
      <form className="form" onSubmit={handleAddExpense}>
        <div className="form-input">
          <input
            placeholder="spent on.."
            className="form-input--name"
            type="text"
            id="expense"
            required
          />
          <input
            type="number"
            step="0.01"
            placeholder="0.00"
            className="form-input--price"
            id="price"
            required
          />
          <button className="form-input--btn btn">$ add</button>
        </div>
      </form>
    </div>
  );
}
