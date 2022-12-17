import "./App.css";
import AccountsList from "./components/GetAllAccounts/AccountsList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ position: "relative", top: "1rem" }}>HELLO!</h1>
        <br></br>
        <AccountsList />
      </header>
    </div>
  );
}

export default App;
