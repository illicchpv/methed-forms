import {useState} from 'react';
import _ from './Form.module.css';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState('');

  const [save, setSave] = useState(true);

  const [checkErrorForm, setCheckErrorForm] = useState(false);

  const [isPending, setIsPending] = useState(false);

  const validEmail = (val) => {
    setEmailError(/^.+@.+\..+$/.test(val));
  };
  const handleEmail = ({target}) => {
    setEmail(target.value);
    validEmail(target.value);
  };

  const validPassword = (val) => {
    // setPasswordError(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(val));
    setPasswordError(/^(?=.*[a-z]).{6,}/.test(val));
  };
  const handlePassword = ({target}) => {
    setPassword(target.value);
    validPassword(target.value);
  };

  const handleSave = ({target}) => {
    setSave(target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError || !passwordError) {
      console.log('(!emailError || !passwordError): ', (!emailError || !passwordError));
      setCheckErrorForm(true);
      return;
    }

    setIsPending(true);
    setTimeout(()=> { setIsPending(false);}, 700)

    console.log('handleSubmit', {
      email,
      password,
      save,
    });
  };

  return (
    <form className={_.form} onSubmit={handleSubmit}>
      <p>без библиотеки:</p>
      <div className={_.wrap}>
        <label className={_.label} htmlFor="email">email</label>
        <input className={_.input} id="email" name="email" type="text" autoComplete="off"
          value={email} onChange={handleEmail} onBlur={() => {setEmailDirty(true);}}
          disabled={isPending}
        />
        {!emailError && emailDirty && <p className={_.error}>сообщение об ошибке</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor="password">password</label>
        <input className={_.input} id="password" name="password" type="text" autoComplete="off"
          value={password} onChange={handlePassword} onBlur={() => {setPasswordDirty(true);}}
          disabled={isPending}
        />
        {!passwordError && passwordDirty && <p className={_.error}>сообщение об ошибке</p>}
      </div>

      <div className={_.wrapCheckbox}>
        <input className={_.checkbox} id="save" name="save" type="checkbox"
          checked={save} onChange={handleSave}
          disabled={isPending}
        />
        <label className={_.labelCheckbox} htmlFor="save">запомнить пароль</label>
      </div>

      {isPending && <p className={_.pending}>отправка</p>}
      {!isPending && <button className={_.submit} type='submit'>войти</button>}

      {checkErrorForm && (!passwordError || !emailError) && (
        <p className={_.errorSubmit}>сообщение об ошибке</p>
      )}
    </form>
  );
};