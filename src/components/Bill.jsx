import React from "react";

export default function Bill() {
  return (
    <ul className="bills-box--list">
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
  );
}
