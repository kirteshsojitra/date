import DateObject from "react-date-object";
import "./App.css";

function App() {
  var date = new DateObject();
  const max = date.format("YYYY-MM-DD");
  date.day -= 30;
  const min = date.format("YYYY-MM-DD");
  return (
    <div className="App">
      <h1></h1>
      <input type="date" max={max} min={min} />
    </div>
  );
}

export default App;
