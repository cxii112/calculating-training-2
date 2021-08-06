import { useState } from "react";
import Operation, {  } from "../additional/Operation";
interface EquasionProps {
  left: number,
  right: number,
  operation: Operation
}
function Equation(props: EquasionProps) {

  const [left, setLeft] = useState<number>(props.left);
  const [right, setRight] = useState<number>(props.right);

  return (
    <span>
      {left}
    </span>
  )
}