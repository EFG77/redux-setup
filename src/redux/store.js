import { configureStore } from '@reduxjs/toolkit';

import users_reducer from '../Reducers/users_reducer';




const reducer= users_reducer;


 configureStore({
  reducer: {usersReducer:users_reducer},
});


export default configureStore({reducer});














