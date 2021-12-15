import { put, takeLatest, select, all, call } from "redux-saga/effects";
import request, { getOptionsWithToken, postOptions } from "utils/request";

import {
  REQUEST_ROLES_START, REQUEST_ROLES_SUCCESS,
} from "./constants";

let filter = {
  where: {},
};

export function* roles(arg: Action) {
  let payload = arg.payload;

  try {
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
}

export default function* authSaga() {
  yield takeLatest(REQUEST_ROLES_SUCCESS, roles);
}
