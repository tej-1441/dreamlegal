import {createSlice,configureStore} from '@reduxjs/toolkit';

const authenticationInitialState={
    user:"",
};
        

const AuthenticationSlice=createSlice({
    name:'auth',
    initialState:authenticationInitialState,
    reducers:{
        setuser(state,action){
            console.log("action",action.payload);
            state.user=action.payload;
            console.log("user",state.user);
        }

    }
})


const store=configureStore({
    reducer: AuthenticationSlice.reducer,
});

export const AuthenticationAction=AuthenticationSlice.actions;
export default store;