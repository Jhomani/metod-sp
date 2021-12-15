import { 
  CHANGE_COLOR_START,
  CHANGE_LOCALE_START,
  CHANGE_MODE_START 
} from "./constants";

export const initialState: InSetting = {
  mode: 'light',
  color: 'purple',
  locale: 'EN',
};

const setting = (state = initialState, action: Action) => {
  let {type, payload} = action;
  let resp = state;

  switch (type) {
    case CHANGE_MODE_START:
      if(state.mode != payload)
        resp = { ...state, mode: payload };
      
      break;
    case CHANGE_LOCALE_START:
      if(state.locale != payload)
        resp = { ...state, locale: payload };
      
      break;
    case CHANGE_COLOR_START:
      if(state.color != payload)
        resp = { ...state, color: payload };
      
      break;
  }

  return resp;
};

export default setting;
