export default function App() {
  return (
    <div className="app">
      {/* Main */}
      <div className="main">
        <div className="header">
          <h3 className="header-name">bill</h3>
          <p className="header-amount">$0.00</p>
        </div>
        <div className="sub">Other Monthly stuff</div>
      </div>
      {/* list */}
      <div className="bills-box">
        <ul className="bills-box--list">
          {/* sub-list */}
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">001</span>
          </li>
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">002</span>
          </li>
          <li className="bill">
            <span className="bill-name">name of the expense </span>
            <span className="bill-price">003</span>
          </li>
        </ul>
      </div>
      {/* form */}
      <form className="form">
        <div className="form-input">
          <input className="form-input--name" type="text" />
          <input className="form-input--price" type="number" />
        </div>
        <button className="btn--add">$ add</button>
      </form>
    </div>
  );
}