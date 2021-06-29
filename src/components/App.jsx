import React from "react";

function App(props) {
  const [Time, func] = React.useState(props.getTime);

  function updatedTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    func(newTime);
  }

  function interval() {
    setInterval(updatedTime, 1000);
  }

  return (
    <div className="container">
      <h2>Dynamic Clock</h2>
      <h1>{Time}</h1>
      <button onClick={interval}>Time</button>
    </div>
  );
}

export default App;
