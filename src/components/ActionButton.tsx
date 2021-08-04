export interface ActionButtonProps {
  classes: string[],
  callback?: Function,
  children?: React.ReactElement | string
}

function ActionButton(props:ActionButtonProps, child: any) {
  const classesString = props.classes.join(' ');
  return <>
    <button type='button' className={classesString}>
      {props.children}
    </button>
    </>
};

export default ActionButton;
