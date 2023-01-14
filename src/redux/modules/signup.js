import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  signup:[],
  isLoading: false,
  error: null,
  isModalToggleSignup : false
};


const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    isModalGlobalToggleSignup : (state, action)=>{
      state.isModalToggleSignup = action.payload
    }
  },
  extraReducers: {
   
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {isModalGlobalToggleSignup} = signupSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default signupSlice.reducer;