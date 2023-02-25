import store from './redux/store';
import { register, login, logout } from './redux/actions';

store.dispatch(register({ id: 1, name: 'Milan Khati', status: 'false' }));
store.dispatch(login({ id: 1 }));
store.dispatch(logout({ id: 1 }));

console.log(store.getState());
