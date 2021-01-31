import {CURRENCY} from '../constants/CURRENCY';
import {Input} from '../UI/Input/Input';
import {Select} from '../UI/Select/Select';
import {connect} from 'react-redux';
import {
  fetchRates, 
  setSelectValue, 
  convert, 
  inputValidation, 
  saveInput1Value, 
  saveInput2Value
} from '../redux/actions/actionsConverter';
import {store} from '../redux/store/store';
import s from './Converter.module.scss';

function Converter(props) {

  const selectId = ['from', 'to'];

  const inputChangeHandler = event => {
    props.inputValidation(event.target.value);
    props.saveInput1Value(event.target.value);
    const isInvalid = store.getState().isInvalid;
    if (!isInvalid) {
      props.convert(event.target.value)
    }
  };

  const selectChangeHandler = event => {
    props.setSelectValue(event.target.value, event.target.id);
    props.convert(store.getState()['input1'])
    
    if (event.target.id === 'from') {
      props.fetchRates(event.target.value)
    }
  };

  const renderSelect = () => selectId.map((id, index) => {

    return (
      <Select
        key={id + index}
        id={id}
        onChange={selectChangeHandler}
        options={CURRENCY}
        defaultValue={'DEFAULT'}
      />
    )
  });

  return (
    <div className={s.Converter}>

      <div className={s.wrapper}>
        <h1>Currency Converter</h1>

        <div className={s.content}>

        <Input
          key={'input1'}
          id={'input1'}
          value={store.getState()['input1']}
          onChange={inputChangeHandler}
          isInvalid={store.getState().isInvalid}
        />

        <Input
          key={'input2'}
          id={'input2'}
          value={store.getState()['input2']}
          onChange={e => saveInput2Value(e.target.value)}
        />

          {renderSelect()}

        </div>

      </div>

    </div>
  )
};


function mapStateToProps(state) {
  return {
    input1: state.input1,
    input2: state.input2,
    selects: state.selects,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchRates: value => dispatch(fetchRates(value)),
    setSelectValue: (value, id) => dispatch(setSelectValue(value, id)),
    convert: value => dispatch(convert(value)),
    inputValidation: value => dispatch(inputValidation(value)),
    saveInput1Value: value => dispatch(saveInput1Value(value)),
    saveInput2Value: value => dispatch(saveInput2Value(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
