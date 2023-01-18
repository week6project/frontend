import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { serverUrl, tokenLocal } from ".";


const initialState = {
  forgotPw:[],
  isLoading: false,
  error: null,
  isModalTogglePw : false
};


export const __forgotPw = createAsyncThunk(
  "posts/FORGOT_PW",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.patch(`${serverUrl}/user/reset`, payload, {
          headers: {
            authorization: tokenLocal
          }
      })
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      console.log('error: ', error.response.data.errorMessage)
      return thunkAPI.rejectWithValue(error.response.data.errorMessage)
    }
  }
);


const forgotPwSlice = createSlice({
  name: "forgotPw",
  initialState,
  reducers: {
    isModalGlobalTogglePw : (state, action)=>{
      state.isModalTogglePw = action.payload
    }
  },
  extraReducers: {
    [__forgotPw.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__forgotPw.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      console.log('비번변경 state.forgotPw : ' , state.forgotPw)
      state.forgotPw = action.payload; // Store에 있는 state.data에 서버에서 가져온 action.payload 추가
      console.log('비번변경 action.payload : ' , action.payload)
      console.log('비번변경 state.forgotPw : ' , state.forgotPw)
    },
    [__forgotPw.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {isModalGlobalTogglePw} = forgotPwSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default forgotPwSlice.reducer;