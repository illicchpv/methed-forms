import './App.css';
import {Form} from './Form';
import {FormLib} from './FormLib';

function App() {
  return (
    <div className="App-header">
      <FormLib />
      <div style={{height: '20px'}}></div>
      <Form />
    </div>
  );
}

export default App;
