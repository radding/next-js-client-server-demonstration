"use client";

import { PropsWithChildren, useState } from "react";

export const ServerExample = (props: PropsWithChildren) => {
  const [buttonCount, setButtonCount] = useState(0);

  return (
    <main>
      <h1>Hello, you pressed this button {buttonCount} times!</h1>
      <button onClick={() => setButtonCount(buttonCount + 1)}>Press Me!</button>
      {props.children}
    </main>
  );
};
