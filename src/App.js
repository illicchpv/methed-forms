import './App.css';
import {Form} from './Form';
import {FormLib} from './FormLib';

function App() {
  return (
    <div className="App-header">
      <Form />
      <div style={{height: '20px'}}></div>
      <FormLib />
    </div>
  );
}

export default App;
