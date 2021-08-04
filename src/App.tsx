import ActionButton from './components/ActionButton';
import OperatorPeeker from './components/OperationPeeker';
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <section className="container p-2 is-flex is-flex-direction-column is-justify-content-center is-align-content-center fixedWidth">
        <div className="notification is-grey is-rounded">
          <OperatorPeeker />
          <ActionButton
            classes={["button",
              "is-green",
              "is-rounded",
              "is-outlined",
              "is-fullwidth",
              "is-large"
            ]}>
            Начать!
            </ActionButton>
        </div>
      </section>
    </div>
  );
}

export default App;
