import { useState } from "react";

function About() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>About {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default About;
