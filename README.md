## Redux is a State management tool

## for demo

1. clone the repo
2. npm install
3. npm start
4. Inspect the console.log(store.getState()) in index.js to terminal how the
   value changes when dispatching different actions.

## The main three things you should know while implementing redux

1. Actions and types
2. store
3. reducer
4. dispatching the actions by importing store and actions

## While implementing the redux

1. Design the store first, that how it will looks

```
e.g

[
    {id: 1,
     name:'testname',
     status:false
     },
    {id: 2,
     name:'testname',
     status:true
     },
]

```

2. Create a actions types _for example if you want to register, login and logout
   user actions so defines the actions types as below to make it more dynamic_

```
/redux/actionsTypes.js

export const REGISTER = 'register';
export const LOGIN = 'login';
export const LOGOUT = 'logout';


```

3. Create actual actions that will be dispatched when needed

```
_actions generic format should be {type,payload}_
return {
    type:actions.REGISTER,
    payload:{
        id:id,
        name:name,
        state:status
    }
}


/redux/actions.js

for example, creating the function makes it reusable as below

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

```

4. Now create the reducer, that will takes that current state and action as
   props and modifies and return the news state. since reducers are pure
   functions we shouldn't return the mutable state, always return the new state

```

/redux/reducer.js
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


```

4. import the {createStore} from redux and create the store

//install the redux@4.0 or below otherwise there will be strike through in
createStore

```
/redux/store.js

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;


```

5. Finally store need to be updated, import the store and and needed actions
   from actions.js and dispatch the actions

```
/index.js


import store from './redux/store';
import { register, login, logout } from './redux/actions';

store.dispatch(register({ id: 1, name: 'Milan Khati', status: 'false' }));
store.dispatch(login({ id: 1 }));
store.dispatch(logout({ id: 1 }));

console.log(store.getState());




```
