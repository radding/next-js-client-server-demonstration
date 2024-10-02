import { Fragment } from "react";
import { Explaination } from "./Explaination";

export const Explaination2 = (props: {
  exampleNumber: number;
  inClientExample: boolean;
}) => {
  return (
    <Fragment>
      <h3>This is example {props.exampleNumber}</h3>
      <Explaination inClientExample={props.inClientExample} />
    </Fragment>
  );
};
