import { ReactNode } from "react";
import { Explaination2 } from "./Explaination2";

const fibs: Record<number, number> = {};

function calculateFib(value: number): number {
  if (fibs[value]) {
    return fibs[value];
  }
  if (value === 1) {
    return 1;
  }
  if (value <= 0) {
    return 0;
  }
  const fib = calculateFib(value - 1) + calculateFib(value - 2);
  fibs[value] = fib;
  return fib;
}

export const SillyFib = (props: {
  number: number;
  inClientExample: boolean;
}) => {
  const number = calculateFib(props.number);
  const components: ReactNode[] = [];
  for (let i = 0; i < number; i++) {
    components.push(
      <div key={i}>
        <Explaination2
          exampleNumber={i}
          inClientExample={props.inClientExample}
        />
      </div>
    );
  }
  return (
    <div>
      <h2>This is a silly fib component</h2>
      {props.inClientExample ? (
        <p>
          This will render {number} explainations, just to demonstrate how large
          the client bundle could be.
        </p>
      ) : (
        <p>
          This will render {number} explainations on the server, but omit this
          from the client
        </p>
      )}
      {components}
    </div>
  );
};
