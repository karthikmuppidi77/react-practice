
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const saveData = () => {
    localStorage.setItem("username", name);
    alert("Data saved!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={saveData}>
        Save
      </button>
    </div>
  );
}

export default App;
