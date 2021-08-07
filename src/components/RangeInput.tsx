import createIonIcon from "../additional/createIonIcon";

interface RangeInputProps {
  minimum: Number,
  maximum: Number,
  current: Number,
  classes: string[],
  decrease?: Function,
  Increase?: Function
}

function RangeInput(props: RangeInputProps) {
  const buttonsClasses = [
    'button',
    'is-primary',
    'is-outlined',
  ];
  const labelClasses = [
    'button',
    'is-static',
    'is-primary',
  ];

  return <>
    <div className="control has-addons">
      <button role='button' className={
        buttonsClasses.join(' ') + ' ' + props.classes.join(' ')}>
        {createIonIcon('remove-outline')}
      </button>
      <button role='button' className={
        labelClasses.join(' ') + ' ' + props.classes.join(' ')}>
        {props.current}
      </button>
      <button role='button' className={
        buttonsClasses.join(' ') + ' ' + props.classes.join(' ')}>
        {createIonIcon('add-outline')}
      </button>
    </div>
    </>
};

export default RangeInput;