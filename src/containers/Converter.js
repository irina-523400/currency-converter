import { connect } from 'react-redux';
import { CURRENCY } from '../constants/CURRENCY';
import { Input } from '../UI/Input/Input';
import { Select } from '../UI/Select/Select';
import {
  fetchRates,
  setSelectValue,
  convert,
  inputValidation,
  saveInput1Value,
  saveInput2Value
} from '../redux/actions/actionsConverter';
import classes from './Converter.module.scss';

function currencyConverter({
  fetchRates,
  setSelectValue,
  convert,
  inputValidation,
  saveInput1Value,
  saveInput2Value,
  isInvalid,
  input1,
  input2 }) {

  const selectId = ['from', 'to'];

  const input1ChangeHandler = (event) => {
    inputValidation(event.target.value);
    saveInput1Value(event.target.value);
    if (!isInvalid) {
      convert(event.target.value)
    }
  };

  const input2ChangeHandler = (event) => {
    saveInput2Value(event.target.value)
  };

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value, event.target.id);
    convert(input1)

    if (event.target.id === 'from') {
      fetchRates(event.target.value)
    }
  };

  return (
    <div className={classes.Converter}>
      <div className={classes.wrapper}>
        <h1>Currency Converter</h1>
        <div className={classes.content}>
          <Input
            key="input1"
            id="input1"
            value={input1}
            onChange={input1ChangeHandler}
            isInvalid={isInvalid}
          />
          <Input
            key="input2"
            id="input2"
            value={input2}
            onChange={input2ChangeHandler}
          />
          {selectId.map((id, index) => {
            return (
              <Select
                key={id + index}
                id={id}
                onChange={selectChangeHandler}
                options={CURRENCY}
                defaultValue={'DEFAULT'}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
    input1: state.input1,
    input2: state.input2,
    selects: state.selects,
    isInvalid: state.isInvalid,
});

const mapDispatchToProps = (dispatch) => ({
    fetchRates: value => dispatch(fetchRates(value)),
    setSelectValue: (value, id) => dispatch(setSelectValue(value, id)),
    convert: value => dispatch(convert(value)),
    inputValidation: value => dispatch(inputValidation(value)),
    saveInput1Value: value => dispatch(saveInput1Value(value)),
    saveInput2Value: value => dispatch(saveInput2Value(value))
});

const Converter = connect(mapStateToProps, mapDispatchToProps)(currencyConverter);

export {Converter};
