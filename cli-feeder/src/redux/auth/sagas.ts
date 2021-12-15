import { put, takeLatest, select, all, call } from "redux-saga/effects";
import request, { getOptionsWithToken, postOptions } from "utils/request";

import {
  LOGIN_START,
  REGISTER_START,
  UPDATE_REDUX_AUTH_START
} from "./constants";

let filter = {
  where: {},
};

export function* Login(arg: Action) {
  let url, options, filter;
  let payload = arg.payload;

  try {
    console.log(payload, 'into saga');
  } catch (err) {
    console.log(err);
  }
}

export function* Register(arg: Action) {
  let payload = arg.payload;

  try {
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_START, Login);
  yield takeLatest(REGISTER_START, Register);
}
