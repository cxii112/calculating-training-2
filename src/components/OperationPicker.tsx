import createIonIcon from '../additional/createIonIcon';
import Operation from '../additional/Operation';
import { removeClassByClass } from '../additional/removeClassByClass';
import { toggleClassById } from '../additional/toggleClassById';
interface OperationPickerProps {
  operationPickerCallback: Function
}

function OperationPicker(props: OperationPickerProps) {
  const plusSign = createIonIcon('add-outline');
  const minusSign = createIonIcon('remove-outline');
  const multiplySign = createIonIcon('close-outline');
  const divideSign = '÷';
  const tabsClasses = [
    'tab'
  ];
  const clickHandler = (currentTabId: string,
    newOperation: Operation) => {
    removeClassByClass('tab', 'is-active');
    toggleClassById(currentTabId, 'is-active');
    props.operationPickerCallback(newOperation);
  };
  return (
    <div className='OperationPicker py-4'>
      <div className='tabs is-centered is-boxed is-fullwidth is-primary is-outlined'>
        <ul>
          <li
            id='summ-tab'
            className={tabsClasses.join(' ') + ' ' + 'is-active'}
            onClick={event => {
              clickHandler(event.currentTarget.id,
                Operation.SUMM)
            }}>
            <a>
              <span>{plusSign}</span>
            </a>
          </li>
          <li
            id='subtract-tab'
            className={tabsClasses.join(' ')}
            onClick={event => {
              clickHandler(event.currentTarget.id,
                Operation.SUBTRACT)
            }}>
            <a>
              <span>{minusSign}</span>
            </a>
          </li>
          <li
            id='multiply-tab'
            className={tabsClasses.join(' ')}
            onClick={event => {
              clickHandler(event.currentTarget.id,
                Operation.MULTIPLY)
            }}>
            <a>
              <span>{multiplySign}</span>
            </a>
          </li>
          <li
            id='divide-tab'
            className={tabsClasses.join(' ')}
            onClick={event => {
              clickHandler(event.currentTarget.id,
                Operation.DIVIDE)
            }}>
            <a>
              <span>{divideSign}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OperationPicker;