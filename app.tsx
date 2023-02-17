import { createRoot } from "react-dom/client";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
}

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
