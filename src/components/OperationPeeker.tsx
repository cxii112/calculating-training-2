import createIonIcon from "../additional/createIonIcon";

function OperatorPeeker() {
  const buttonClasses = [
    "is-primary",
    "is-outlined"
  ];
  const plusSign = createIonIcon('add-outline');
  const minusSign = createIonIcon('remove-outline');
  const multiplySign = createIonIcon('close-outline');
  const divideSign = '÷';
  return (
    <div className="OperatorPeeker py-4">
      <div className="tabs is-centered is-boxed is-fullwidth is-primary is-outlined">
        <ul>
          <li className="is-active">
            <a>
              <span>{plusSign}</span>
            </a>
          </li>
          <li className="">
            <a>
              <span>{minusSign}</span>
            </a>
          </li>
          <li className="">
            <a>
              <span>{multiplySign}</span>
            </a>
          </li>
          <li className="">
            <a>
              <span>{divideSign}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OperatorPeeker;