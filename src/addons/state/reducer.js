import {createSlice} from "@reduxjs/toolkit"

const initialThemeStateValue = {
     bgColor1: 'j-color6', 
     bgColor2: 'j-color4',
     bgColor3: 'j-color3',
    
};

const themeSlice = createSlice({
   name: 'theme',			//name of the slice i.e state
   initialState: {value:initialThemeStateValue}, // initial state value
   reducers:{
    changeTheme: (state,action) => { //reducer, takes 2 arguments, state and action triggers the
      state.value = action.payload;
    }
   },
});

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer;