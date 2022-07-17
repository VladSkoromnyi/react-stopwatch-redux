import { createStore } from 'redux';

const initialState = {
	seconds: 0,
	isActive: false,
}

const Select = {
	RESET: 'RESET',
	TOGGLE: 'TOGGLE',
	START: 'START',
}

export const actions = {
  reset: () => ({
    type: Select.RESET,
  }),

  toggle: () => ({
    type: Select.TOGGLE,
  }),

	start: () => ({
		type: Select.START,
	}),
};

export const selectors = {
  seconds: (state) => state.seconds,
  isActive: (state) => state.isActive,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Select.RESET:
      return {
        ...state,
        seconds: 0,
				isActive: false,
      };

    case Select.TOGGLE:
      return {
        ...state,
				isActive: !state.isActive,
      };
  
		case Select.START:
			return {
				...state,
				seconds: state.seconds + 1,
			};

    default:
      return state;
  }
};

const store = createStore(
  reducer,
);

export default store;