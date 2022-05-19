import { useState } from "react";
import Link from "next/link";
import TestButton from "../components/TestButton";

function About() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>About {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>

      <div>
        <Link href="/test" passHref>
          <TestButton text={"link test"} />
        </Link>
      </div>

      <div>
        <span className="hello">global style</span>
      </div>
    </div>
  );
}

export default About;
