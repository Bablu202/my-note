import { useEffect, useState } from "react";
import "./sass/main.scss";
import { supabase } from "./supabase/client";

import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export default function App() {
  return (
    <>
      <ExpensesApp />
    </>
  );
}

function ExpensesApp() {
  // const [monthlyExpenses, setMonthlyExpenses] = useState([
  //   { id: 1, expenseName: "rent", priceValue: 550 },
  //   { id: 2, expenseName: "Travel", priceValue: 120.5 },
  // ]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  let defaultExpense = { id: null, expenseName: "", priceValue: "" };
  const [moreExpense, setMoreExpense] = useState(defaultExpense);
  //Handle Add Button
  const handleAddExpense = async (e) => {
    e.preventDefault();
    console.log("added");
    if (!moreExpense.expenseName || !moreExpense.priceValue) return;
    const { data: db, error } = await supabase
      .from("expenseTable")
      .insert({
        expenseName: moreExpense.expenseName,
        priceValue: moreExpense.priceValue,
      })
      .select("*")
      .single();
    if (db) setExpenses((prev) => [...prev, db]);
    if (error) console.log(error);
    setMoreExpense(defaultExpense);
  };
  //Handle Edit
  const handleEdit = (id) => {
    setEditMode(true);
    const editExpense = expenses.filter((e) => e.id === id);
    setMoreExpense(editExpense[0]);
    console.log(id);
  };
  //Update Edit Mode
  const handleUpdate = async (e) => {
    e.preventDefault();
    let id = moreExpense.id;
    console.log(moreExpense);
    const { data: db, error } = await supabase
      .from("expenseTable")
      .update({
        expenseName: moreExpense.expenseName,
      })
      .eq("id", id);
    console.log(db);
    if (db) setExpenses(db);
    if (error) setError(error);
    setEditMode(false);
    setMoreExpense(defaultExpense);
  };
  //Handle Delete
  const handleDelete = async (id) => {
    await supabase.from("expenseTable").delete().eq("id", id);
    if (!error) {
      setExpenses((prev) => prev.filter((item) => item.id !== id));
    } else {
      setError(error);
    }
  };
  //getting dataBase
  const getBaseDataExpense = async () => {
    const refExpenseData = await supabase.from("expenseTable").select("*");
    setExpenses(refExpenseData.data);
  };
  //total Expense
  const totalExpenseValue = "";

  useEffect(() => {
    getBaseDataExpense();
  }, []);

  return (
    <div className="app">
      <div className="main">
        <Header />
        <ExpenseMonthly />
      </div>
      <ExpenseList
        expenses={expenses}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <FormExpense
        moreExpense={moreExpense}
        setMoreExpense={setMoreExpense}
        handleAddExpense={handleAddExpense}
        editMode={editMode}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
/*HEADER----------------------------------------------------------------*/
function Header() {
  return (
    <div className="header">
      <h3 className="header-name">flow</h3>
      <p className="header-amount">0.00</p>
    </div>
  );
}
/*FORM EXPENSE----------------------------------------------------------------*/

function FormExpense({
  moreExpense,
  setMoreExpense,
  handleAddExpense,
  editMode,
  handleUpdate,
}) {
  return (
    <form className="form">
      <div className="form-input">
        <input
          placeholder="spent on.."
          className="form-input--name"
          type="text"
          value={moreExpense.expenseName}
          onChange={(e) => {
            setMoreExpense({ ...moreExpense, expenseName: e.target.value });
          }}
        />
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          className="form-input--price"
          value={moreExpense.priceValue}
          onChange={(e) => {
            setMoreExpense({ ...moreExpense, priceValue: e.target.value });
          }}
        />
        {!editMode ? (
          <button className="form-input--btn btn" onClick={handleAddExpense}>
            $ add
          </button>
        ) : (
          <button className="form-input--btn btn" onClick={handleUpdate}>
            $ change
          </button>
        )}
      </div>
    </form>
  );
}
/* EXPENSE LIST and ITEM----------------------------------------------------------------*/

function ExpenseList({ expenses, handleEdit, handleDelete }) {
  return (
    <>
      <div className="bills-box">
        <ul className="bills-box--list">
          <ExpenseItem
            expenses={expenses}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </ul>
      </div>
    </>
  );
}
function ExpenseItem({ expenses, handleEdit, handleDelete }) {
  return (
    <>
      {expenses.map((e) => (
        <li className="bill" key={e.id}>
          <span className="bill-name">{e.expenseName}</span>
          <span className="bill-price">-{e.priceValue}$</span>
          <span className="bill-edit">
            <button
              className="bill-edit--btn edit--btn"
              onClick={() => handleEdit(e.id)}
            >
              <AiFillEdit />
            </button>
          </span>
          <span className="bill-delete">
            <button
              className="bill-delete--btn edit--btn"
              onClick={() => handleDelete(e.id)}
            >
              <AiFillDelete />
            </button>
          </span>
        </li>
      ))}
    </>
  );
}
/* MONTHLY EXPENSE----------------------------------------------------------------*/

function ExpenseMonthly() {
  return (
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
  );
}
