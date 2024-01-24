import './App.css';
import {Form} from './Form';
import {FormLib} from './FormLib';

function App() {
  return (
    <div className="App-header">
      <h2>упрощённая валидация пароля:</h2>
      <h4>ввод более 5ти [a-z] </h4>
      <FormLib />
      <div style={{height: '20px'}}></div>
      <Form />
    </div>
  );
}

export default App;
