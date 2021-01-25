import {
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,

} from './actionTypes';

const URL = 'https://api.exchangeratesapi.io/latest?base=';

export function fetchRates(fromValue) {
  return async dispatch => {

    try {
      const response = await fetch(URL + fromValue);
      const results = await response.json();

      dispatch(fetchRatesSuccess(results));

    } catch (e) {
      dispatch(fetchRatesError(e))
    }
  }
};

export function fetchRatesSuccess(rates) {
  return {
    type: FETCH_RATES_SUCCESS,
    rates
  }
};

export function fetchRatesError(e) {
  return {
    type: FETCH_RATES_ERROR,
    error: e
  }
};