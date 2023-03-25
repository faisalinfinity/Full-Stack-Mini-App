import { LOGIN, LOGOUT } from "./authTypes";

const InitialState = {
  isLogged:false,
  firstname: "",
  lastname: "",
  email: "",
  token: "",
};

export const authReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        payload,
      };
    }

    case LOGOUT: {
      return InitialState;
    }

    default: {
      return state;
    }
  }
};
