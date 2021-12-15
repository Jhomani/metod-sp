import { 
  REQUEST_ROLES_START, 
  REQUEST_ROLES_SUCCESS, 
  TOGGLE_MODAL,
  CHANGE_SCREEN
} from "./constants";

export const requestRolesStart = (payload: Object) => ({
  type: REQUEST_ROLES_START,
  payload,
});
export const requestRolesSuccess = (payload: Action) => ({
  type: REQUEST_ROLES_SUCCESS,
  payload,
});

export const toggleModal = (payload: boolean) => ({
  type: TOGGLE_MODAL,
  payload,
});
export const changeScreen = (payload: string) => ({
  type: CHANGE_SCREEN,
  payload,
});