import { LOGIN, LOGOUT } from "./authTypes";

const InitialState =JSON.parse(localStorage.getItem("notes/login")) || {
  isLoggedIn: false,
  firstname: "",
  lastname: "",
  email: "",
  token: "",
}

export const authReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {

      return {
        ...state,
        ...payload,
        isLoggedIn: true,
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
