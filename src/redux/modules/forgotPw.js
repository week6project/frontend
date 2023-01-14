import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  forgotPw:[],
  isLoading: false,
  error: null,
  isModalTogglePw : false
};


const forgotPwSlice = createSlice({
  name: "forgotPw",
  initialState,
  reducers: {
    isModalGlobalTogglePw : (state, action)=>{
      state.isModalTogglePw = action.payload
    }
  },
  extraReducers: {
   
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {isModalGlobalTogglePw} = forgotPwSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default forgotPwSlice.reducer;