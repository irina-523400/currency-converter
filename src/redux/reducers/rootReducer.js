import {
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,
  SELECT_VALUE_SAVE,
  VALIDATION,
  INPUT1_VALUE_SAVE,
  INPUT2_VALUE_SAVE
} from '../actions/actionTypes';

const initialState = {
  input1: '',
  input2: '',
  isInvalid: false,
  selects: {
    from: 'DEFAULT',
    to: 'DEFAULT',
  },
  baseRates: {},
  error: null
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_VALUE_SAVE:
      return {
        ...state,
        selects: action.selects
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        baseRates: action.baseRates
      };
    case FETCH_RATES_ERROR:
      return {
        ...state, 
        error: action.err
      };
    case INPUT2_VALUE_SAVE:
      return {
        ...state,
        input2: action.result
      };
    case VALIDATION:
      return {
        ...state,
        isInvalid: action.isInvalid 
      };
    case INPUT1_VALUE_SAVE:
      return {
        ...state,
        input1: action.value
      }

    default: 
      return state
  }
};