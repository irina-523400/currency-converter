import {
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,
  SELECT_VALUE_SAVE,
  VALIDATION,
  INPUT1_VALUE_SAVE,
  INPUT2_VALUE_SAVE
} from './actionTypes';
import { store } from '../store/store';

const URL = 'https://api.exchangeratesapi.io/latest?base=';

export const saveSelects = (selects) => ({
  type: SELECT_VALUE_SAVE,
  selects
});

export const setSelectValue = (value, id) => {
  return (dispatch, getState) => {
    const selects = getState().selects;
    selects[id] = value;
    dispatch(saveSelects(selects))
  }
};

export const fetchRates = (fromSelect) => {
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

export const fetchRatesSuccess = (baseRates) => ({
  type: FETCH_RATES_SUCCESS,
  baseRates
});

export const fetchRatesError = (err) => ({
  type: FETCH_RATES_ERROR,
  error: err
});

export const saveInput1Value = (value) => ({
  type: INPUT1_VALUE_SAVE,
  value
});

export const inputValidation = (value) => {
  const numValue = Number(value);
  const isInvalid = Number.isNaN(numValue);

  return {
    type: VALIDATION,
    isInvalid
  }
};

export const saveInput2Value = (value) => {
  const result = store.getState()['input1'] === '' || Number.isNaN(value)
  ? ''
  : value;

  return {
    type: INPUT2_VALUE_SAVE,
    result
  }
};

export const convert = (value) => {
  return (dispatch, getState) => {
    const stateSelects = getState().selects;
    const stateRates = getState().baseRates;
    const toRate = stateSelects['to'];
    const result = value*stateRates[toRate];
    dispatch(saveInput2Value(result))
  }
};

