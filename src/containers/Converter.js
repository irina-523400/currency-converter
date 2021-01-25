import React, { useState } from 'react';
import { CURRENCY } from '../constants/CURRENCY';
import {Input} from '../UI/Input/Input';
import {Select} from '../UI/Select/Select';
import s from './Converter.module.scss';


function Converter() {

  const [inputControls, setInputControls] = useState({
    input1: {
      value: '',
    },
    input2: {
      value: ''
    },
  });

  const [selectControls, setSelectControls] = useState({
    from: {
      value: 'AUD',
    },
    to: {
      value: 'AUD',
    },
  })

  const inputChangeHandler = (value, name) => {
    const controlsIsChange = { ...inputControls };
    const inputControl = { ...inputControls[name] };
    inputControl.value = value;

    controlsIsChange[name] = inputControl;

    setInputControls(controlsIsChange);

    console.table(controlsIsChange);
  };

  const renderInputs = () => Object.keys(inputControls).map((name, index) => {
    const inputControl = inputControls[name];

    return (
        <Input
          key={name + index}
          name={name}
          value={inputControl.value}
          errorMessage={inputControl.errorMessage}
          onChange={event => inputChangeHandler(event.target.value, name)}
        />
      )
    });

  const selectChangeHandler = (value, name) => {
    const controlsIsChange = { ...selectControls };
    const selectControl = { ...selectControls[name] };
    selectControl.value = value;

    controlsIsChange[name] = selectControl;

    setSelectControls(controlsIsChange);

    console.table(controlsIsChange)
  };

  const renderSelect = () => Object.keys(selectControls).map((name, index) => {

    return (
      <Select
        key={name + index}
        name={name}
        onChange={event => selectChangeHandler(event.target.value, name)}
        options={CURRENCY}
      />
    )
  });

  return (
    <div className={s.Converter}>

      <div className={s.wrapper}>
        <h1>Currency Converter</h1>

        <div className={s.content}>
          {renderInputs()}
          {renderSelect()}
        </div>

      </div>

    </div>
  )
};

export {Converter};