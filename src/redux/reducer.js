import * as actions from './actionTypes';

export default function reducer(state = [], action) {
	switch (action.type) {
		case actions.REGISTER:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
					status: false,
				},
			];
		case actions.LOGIN:
			return state.map((_user) =>
				_user.id === action.payload.id ? _user : { ..._user, status: true }
			);
		case actions.LOGOUT:
			return state.map((_user) =>
				_user.id === action.payload.id ? _user : { ..._user, status: false }
			);
		default:
			return state;
	}
}
