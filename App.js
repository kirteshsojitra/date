import logo from "./logo.svg";
import "./App.css";

function App() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div className="App">
      <h1>
        {day}/{month}/{year}
      </h1>
      <input type="date" max={"2022-12-12"} min={"2022-10-21"} />
    </div>
  );
}

export default App;
