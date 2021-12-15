import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import global from "./global/sagas";

export default function* rootSaga() {
  yield all([
    auth(),
    global() 
  ]);
}