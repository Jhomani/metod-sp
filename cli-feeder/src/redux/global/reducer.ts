import { 
  CHANGE_SCREEN,
  REQUEST_ROLES_START, 
  REQUEST_ROLES_SUCCESS, 
  TOGGLE_MODAL
} from "./constants";

export const initialState = {
  mode: 'light',
  screenSize: 689,
  showModal: false,
  currentScreen: 'Login'
};

export type InGlobalState = typeof initialState;

const global = (state = initialState, action: Action) => {
  let {type, payload} = action;
  let resp = state;

  switch (type) {
    case REQUEST_ROLES_SUCCESS: 
      resp = { ...state, ...payload };
      
      break;
    case TOGGLE_MODAL:
      if(state.showModal != payload)
        resp = { ...state, showModal: payload };

      break;
    case CHANGE_SCREEN:
      if(state.currentScreen != payload)
        resp = { ...state, currentScreen: payload };

      break;
  }

  return resp;
};

export default global;
