import {
  useEffect,
  useState
} from 'react';
import Operation from './additional/Operation';
import SettingCtx from './additional/SettingsCtx';
import ActionButton from './components/ActionButton';
import OperationPicker from './components/OperationPicker';
import Settings from './components/Settings/Settings';
import './css/App.css';

function App() {
  const [operation, setOperation] = useState<Operation>(Operation.SUMM);
  useEffect(() => {
    setOperation(Operation.SUMM);
  }, []);
  return (
    <div className='App'>
      <section className='container p-2 is-flex is-flex-direction-column is-justify-content-center is-align-content-center fixedWidth'>
        <div className='notification is-grey is-rounded'>
          <OperationPicker
            operationPickerCallback={setOperation} />
          <SettingCtx.Provider value={{ operation: operation }}>
            <Settings />
          </SettingCtx.Provider>
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
