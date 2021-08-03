import createIonIcon from "../additional/createIonIcon";
import ActionButton from "./ActionButton";

function OperatorPeeker() {
  const buttonClasses = [
    "button",
    "is-primary",
    "is-outlined"
  ]
  const plusSign = createIonIcon('add-outline');
  const minusSign = createIonIcon('remove-outline');
  const multiplySign = createIonIcon('close-outline');
  const divideSign = '÷';
  return (
    <div className="OperatorPeeker py-4">
      <div className="tabs is-centered is-boxed is-fullwidth is-primary is-outlined">
        <ul>
          <li className="is-active">
            <ActionButton
              classes={buttonClasses}
              content={plusSign}
            />
          </li>
          <li className="">
            <ActionButton
              classes={buttonClasses}
              content={minusSign}
            />
          </li>
          <li className="">
            <ActionButton
              classes={buttonClasses}
              content={multiplySign}
            />
          </li>
          <li className="">
            <ActionButton
              classes={buttonClasses}
              content={divideSign}
            />
          </li>
        </ul>
      </div>
    </div>
  )
};

export default OperatorPeeker;