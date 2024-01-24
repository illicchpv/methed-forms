import {useState} from 'react';
import _ from './FormLib.module.css';
import {useForm} from 'react-hook-form';

export const FormLib = () => {
  const {
    register,
    handleSubmit, // занимается проверками. если ок - вызывает переданную ей ф-ю
    formState: {errors}, // объявляет переменную состояния формы. доступна внутри FormLib
  } = useForm();

  const onSubmit = (data) => {
    console.log('onSubmit data: ', data);
  }
  console.log('errors: ', errors);

  return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <p>библиотека react-hook-form:</p>
      <div className={_.wrap}>
        <label className={_.label} htmlFor="email">email</label>
        <input className={_.input} id="email" type="text" autoComplete="off"
          {...register('email', {
            required: // 'введите email'
            { // или
              value: true,
              message: 'укажите email адрес',
            },
            pattern: {
              value: /^.+@.+\..+$/,
              message: 'неверный формат email',
            }
          })}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor="password">password</label>
        <input className={_.input} id="password" type="text" autoComplete="off"
          {...register('password', {
            required:{
              value: true,
              message: 'укажите пароль',
            },
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
            //   message: 'неверный формат пароля',
            // }
            pattern: {
              value: /^(?=.*[a-z]).{6,}/,
              message: 'неверный формат пароля',
            }
          })}
          aria-invalid={!!errors.password}
        />
        {errors.password && <p className={_.error}>{errors.password.message}</p>}
      </div>

      <div className={_.wrapCheckbox}>
        <input className={_.checkbox} id="save" type="checkbox"
          {...register('save')}
        />
        <label className={_.labelCheckbox} htmlFor="save">запомнить пароль</label>
      </div>

      <button className={_.submit} type='submit'>войти</button>

    </form>
  );
};