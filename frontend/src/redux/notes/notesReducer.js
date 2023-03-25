import { ADD, DELETE, GET, GETSINGLE, UPDATE } from "./notesType";

const InitialState = {
  notes: [],
};

export const notesReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET: {
      return {
        ...state,
        notes: payload,
      };
    }
    case DELETE: {
      return {
        ...state,
        notes: payload,
      };
    }

    case UPDATE: {
      return {
        ...state,
        notes: payload,
      };
    }
    case ADD: {
      return {
        ...state,
        notes: payload,
      };
    }
    case GETSINGLE: {
      return {
        ...state,
        notes: payload,
      };
    }
    default: {
      return state;
    }
  }
};
