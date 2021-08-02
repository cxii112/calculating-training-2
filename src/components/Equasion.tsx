import { useState } from "react";
import EOperation, {  } from "../additional/EOperation";
interface IEquasionProps {
  left: number,
  right: number,
  operation: EOperation
}
function Equation(props: IEquasionProps) {

  const [left, setLeft] = useState<number>(props.left);
  const [right, setRight] = useState<number>(props.right);

  return (
    <span>
      {left}
    </span>
  )
}