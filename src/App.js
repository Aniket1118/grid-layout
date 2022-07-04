import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to grid Layout</h1>
      <div className="grid-container">
        <div
          className="grid-item grid-item-1"
          onClick={() => alert("You click on Red color")}
        ></div>
        <div
          className="grid-item grid-item-2"
          onClick={() => alert("You click on Black color")}
        ></div>
        <div
          className="grid-item grid-item-3"
          onClick={() => alert("You click on Brown color")}
        ></div>
        <div
          className="grid-item grid-item-4"
          onClick={() => alert("You click on Blue color")}
        ></div>
        <div
          className="grid-item grid-item-5"
          onClick={() => alert("You click on violet color")}
        ></div>
        <div
          className="grid-item grid-item-6"
          onClick={() => alert("You click on Green color")}
        ></div>
      </div>
    </div>
  );
}
