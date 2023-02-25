import * as actions from './actionTypes';

export const register = ({ id, name, status }) => {
	return {
		type: actions.REGISTER,
		payload: {
			id,
			name,
			status,
		},
	};
};

export const login = (id) => {
	return {
		type: actions.LOGIN,
		payload: {
			id,
			status: true,
		},
	};
};
export const logout = (id) => {
	return {
		type: actions.LOGOUT,
		payload: {
			id,
			status: false,
		},
	};
};
