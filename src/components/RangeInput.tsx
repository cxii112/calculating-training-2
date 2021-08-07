import createIonIcon from "../additional/createIonIcon";

interface RangeInputProps {
  minimum: Number,
  maximum: Number,
  current: Number,
  decrease?: Function,
  Increase?: Function
}

function RangeInput(props: RangeInputProps) {
  const buttonsClasses = [
    'button',
    'is-primary',
    'is-outlined',
  ];
  const inputClasses = [
    'input',
    'is-primary',
  ];

  return <>
    <div className="control has-addons">
      <button role='button' className={buttonsClasses.join(' ')}>
        {createIonIcon('remove-outline')}
      </button>
      <input type='text' className={inputClasses.join(' ')} readOnly />
      <button role='button' className={buttonsClasses.join(' ')}>
        {createIonIcon('add-outline')}
      </button>
    </div>
    </>
};

export default RangeInput;