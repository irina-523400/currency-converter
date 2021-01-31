import {
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,
  SELECT_VALUE_SAVE,
  VALIDATION,
  INPUT1_VALUE_SAVE,
  INPUT2_VALUE_SAVE
} from './actionTypes';
import {store} from '../../index'

const URL = 'https://api.exchangeratesapi.io/latest?base=';

export function saveSelects(selects) {
  return {
    type: SELECT_VALUE_SAVE,
    selects
  }
};

export function setSelectValue(value, id) {
  return (dispatch, getState) => {
    const selects = getState().selects;
    selects[id] = value;
    dispatch(saveSelects(selects))
  }
};


export function fetchRates(fromSelect) {
  return async dispatch => {

    try {
      const response = await fetch(URL + fromSelect);
      const results = await response.json();
      const baseRates = results.rates;

      dispatch(fetchRatesSuccess(baseRates));
      dispatch(convert(store.getState()['input1']))

    } catch (err) {
      dispatch(fetchRatesError(err))
    }
  }
};

export function fetchRatesSuccess(baseRates) {
  return {
    type: FETCH_RATES_SUCCESS,
    baseRates
  }
};

export function fetchRatesError(err) {
  return {
    type: FETCH_RATES_ERROR,
    error: err
  }
};

export function saveInput1Value(value) {
  return {
    type: INPUT1_VALUE_SAVE,
    value
  }
};

export function inputValidation(value) {
  const numValue = Number(value);
  const isInvalid = Number.isNaN(numValue);
  return {
    type: VALIDATION,
    isInvalid
  }
};

export function saveInput2Value(value) {
  const result = store.getState()['input1'] === '' || Number.isNaN(value)
  ? ''
  : value
  return {
    type: INPUT2_VALUE_SAVE,
    result
  }
};

export function convert(value) {
  return (dispatch, getState) => {
    const stateSelects = getState().selects;
    const stateRates = getState().baseRates;
    const toRate = stateSelects['to'];
    const result = value*stateRates[toRate];
    dispatch(saveInput2Value(result))
  }
};

