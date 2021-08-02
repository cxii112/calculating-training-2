import React from 'react';
import OperatorPeeker from './components/OperationPeeker';
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <section className="container p-2 is-flex is-flex-direction-column is-justify-content-center is-align-content-center fixedWidth">
        <div className="notification is-grey is-rounded">
          <OperatorPeeker />
        </div>
      </section>
    </div>
  );
}

export default App;
