import DateObject from "react-date-object";
import "./App.css";

function App() {
  const d = new Date();
  const date = new DateObject();
  const dateNew = new Date();

  date.add(21, "day");
  date.subtract(21, "day");
  date.day += 2;
  const max = date.format("YYYY-MM-DD");
  date.day -= 2;
  const min = date.format("YYYY-MM-DD");
  date.year += 2;
  date.month += 2;
  date.setDay(15);
  date.setYear(2013);
  date.setHour(12);

  return (
    <div className="App">
      <p>
        <b>Date UTC Stirng: </b>
        {d.toUTCString()}
      </p>
      <p>
        <b>Date ISO Stirng: </b>
        {d.toISOString()}
      </p>
      <p>
        <b>Date ISO Stirng: </b>
        {d.toDateString()}
      </p>
      <p>{date.format()}</p>
      <p>{date.format("MM/DD/YYYY")}</p>
      <p>{date.format("MMM/DD/YYYY HH:mm:ss")}</p>
      <p>{date.format("dddd DD MMMM YYYY, hh:mm:ss A")}</p>
      <p>{date.format("ddd DD MMM YYYY, hh:mm a")}</p>
      <p>{d.getDate()}</p>
      <p>{d.getDay()}</p>
      <p>{d.getFullYear()}</p>
      <input type="date" max={max} min={min} />
      <p>{d.getTime === d.getTime ? "true" : "false"}</p>
    </div>
  );
}

export default App;


