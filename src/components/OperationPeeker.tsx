import createIonIcon from "../additional/createIonIcon";
import ActionButton from "./ActionButton";

function OperatorPeeker() {
  const buttonClasses = [
    "button",
    "is-outlined",
    "is-primary"
  ]
  const plusSign = createIonIcon('add-outline');
  const minusSign = createIonIcon('remove-outline');
  const multiplySign = createIonIcon('close-outline');
  const divideSign = '÷';
  return (
    <div className="OperatorPeeker py-4">
      <div className="buttons has-addons is-fullwidth">
        <ActionButton
          classes={buttonClasses}
          content={plusSign}
        />
        <ActionButton
          classes={buttonClasses}
          content={minusSign}
        />
        <ActionButton
          classes={buttonClasses}
          content={multiplySign}
        />
        <ActionButton
          classes={buttonClasses}
          content={divideSign}
        />
      </div>
    </div>
  )
};

export default OperatorPeeker;