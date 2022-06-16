import {createSlice,configureStore} from '@reduxjs/toolkit';

const aboutusInitialState={
    counter:0
};
        

const AboutusSlice=createSlice({
    name:'aboutus',
    initialState:aboutusInitialState,
    reducers:{


    }
})


const store=configureStore({
    reducer: AboutusSlice.reducer,
});

export const AboutusAction=AboutusSlice.actions;
export default store;