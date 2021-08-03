import { ReactElement } from "react";

export interface ActionButtonProps {
  content?: React.ReactElement | string,
  classes: string[],
  callback?: Function,
}

function ActionButton(props:ActionButtonProps, child: any) {
  const classesString = props.classes.join(' ');
  return <>
    <button type='button' className={classesString}>
      {props.content}
    </button>
    </>
};

export default ActionButton;
