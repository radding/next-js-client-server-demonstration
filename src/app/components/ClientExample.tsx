"use client";

import { useState } from "react";
import { Explaination } from "./Explaination";
import { SillyFib } from "./SillyFibb";

export const ClientExample = () => {
  const [buttonCount, setButtonCount] = useState(0);

  return (
    <main>
      <h1>Hello, you pressed this button {buttonCount} times!</h1>
      <button onClick={() => setButtonCount(buttonCount + 1)}>Press Me!</button>
      <Explaination inClientExample />
      <div>
        <SillyFib number={10} inClientExample />
      </div>
    </main>
  );
};
