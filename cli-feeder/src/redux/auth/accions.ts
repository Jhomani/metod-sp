import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  UPDATE_REDUX_AUTH_START, 
  UPDATE_REDUX_AUTH_SUCCESS 
} from "./constants";

export const loginStart = <T>(payload: T) => ({
  type: LOGIN_START,
  payload,
});

export const loginSuccess = (payload: Object) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const registerStart = (payload: Object) => ({
  type: REGISTER_START,
  payload,
});
export const registerSuccess = (payload: Object) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const updateReduxAuthStart = (payload: Object) => ({
  type: UPDATE_REDUX_AUTH_START,
  payload,
});
export const updateReduxAuthSuccess = (payload: Object) => ({
  type: UPDATE_REDUX_AUTH_SUCCESS,
  payload,
});
