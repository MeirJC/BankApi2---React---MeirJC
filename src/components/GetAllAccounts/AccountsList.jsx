import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AccountsList.css";

const AccountsList = () => {
  const [accounts, setAccounts] = useState([]);
  const [editingAccount, setEditingAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await axios.get(
        "https://bankapi-2-wa.onrender.com/BankApi"
      );
      setAccounts(response.data);
    };
    fetchAccounts();
  }, [accounts]);

  async function handleUpdate(event, id) {
    event.preventDefault();
    const updatedAccount = {
      id: id,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      isActive: event.target.isActive.checked ? true : false,
    };
    console.log("event", event, "_id", id);
    console.log("updatedAccount inside handleUpdate", updatedAccount);
    try {
      await axios.post(
        "https://bankapi-2-wa.onrender.com/BankApi/update",
        updatedAccount
      );
    } catch (error) {
      console.log(error.message);
    }

    setEditingAccount(null);
    const updatedAccounts = accounts.map((account) =>
      account._id === id ? updatedAccount : account
    );
    setAccounts(updatedAccounts);
  }
  function handleEdit(account) {
    handleUpdate(account);
    setEditingAccount(account);
  }

  return (
    <>
      {editingAccount ? <h2>Edit Account:</h2> : <h2>All Accounts:</h2>}
      <hr style={{ width: "85vw" }} />
      <div className="card-container">
        {editingAccount ? (
          <form onSubmit={(event) => handleUpdate(event, editingAccount._id)}>
            <h3>Deatils:</h3>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                defaultValue={editingAccount.firstName}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                defaultValue={editingAccount.lastName}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                defaultValue={editingAccount.email}
              />
            </label>
            <br />
            <label>
              Active:
              <input
                type="checkbox"
                name="isActive"
                defaultChecked={editingAccount.isActive}
              />
            </label>
            <br />
            <button className="btn" type="submit">
              Update
            </button>
            <button className="btn" onClick={() => setEditingAccount(null)}>
              Cancel
            </button>
          </form>
        ) : (
          accounts.map((account, i) => (
            <div key={`${account._id}${i}`} className="card">
              <h3>
                {account.firstName} {account.lastName}
              </h3>
              <p>Account Number: {account._id}</p>
              <p>Owner ID: {account.ownerID}</p>
              <p>Email: {account.email}</p>
              <p>Balance: {account.balance}</p>
              <p>Credit: {account.credit}</p>
              <p>Active: {account.isActive ? "Yes" : "No"}</p>
              <button
                className="btn"
                onClick={() => {
                  console.log(account);
                  handleEdit(account);
                }}
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AccountsList;
