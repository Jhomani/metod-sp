// Add to here reducers types

declare interface InAuth {
  userToken: string;
  dateLogin: string;
  userType: string;
  dataUser: {
    id: string;
    email: string;
    name: string;
  }
}

declare interface InGlobal {
  mode: 'light' | 'dark';
  screenSize: number;
  showModal: boolean;
  currentScreen: string;
}

declare interface InSetting {
  mode: 'light' | 'dark';
  color: string;
  locale: 'EN' | 'ES';
}

declare interface MainState {
  auth: InAuth;
  global: InGlobal;
  setting: InSetting;
}

// redux
declare type Action = {
  type: string;
  payload: any
}

declare interface PromiseAcc {
  res: (value: unknown) => void;
  rej: (value: unknown) => void;
}