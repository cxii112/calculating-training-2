import { useState } from 'react';
import Operation from './additional/Operation';
import ActionButton from './components/ActionButton';
import OperatorPeeker from './components/OperationPicker';
import './css/App.css';

function App() {
  const [operation, setOperation] = useState<Operation>(Operation.SUMM);
  return (
    <div className='App'>
      <section className='container p-2 is-flex is-flex-direction-column is-justify-content-center is-align-content-center fixedWidth'>
        <div className='notification is-grey is-rounded'>
          <OperatorPeeker
            operationPickerCallback={
              (newOperation: Operation) => setOperation(newOperation)
            }/>
          <ActionButton
            classes={['button',
              'is-primary',
              'is-rounded',
              'is-outlined',
              'is-fullwidth',
              'is-large'
            ]}>
            Начать!
            </ActionButton>
        </div>
      </section>
    </div>
  );
}

export default App;
