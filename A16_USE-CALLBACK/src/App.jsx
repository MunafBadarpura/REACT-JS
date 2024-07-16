import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(() => {
    return "new";
  }, []);

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
