import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

const initialState = {
  addAnswer: {},
  isLoading: false,
  error: null,
};


export const __addAnswer = createAsyncThunk(
  "posts/ADD_ANSWER",
  async (payload, thunkAPI) => {
    try{
      console.log('정답 제출 리듀서 콘솔 1')
      const tokenLocal = localStorage.getItem('token');
      console.log('정답 제출 리듀서 콘솔 2 : ', tokenLocal)
      const refreshToken = localStorage.getItem('refreshToken');
      console.log('정답 제출 리듀서 payload : ', payload)
      const {data} = await axios.post(`${serverUrl}/posts/answerd`, payload ,{
        headers: {
          authorization: tokenLocal,
          refreshauthorization: refreshToken,
          // Cookie: `authorization=${tokenLocal}; 
          //         refreshauthorization=${refreshToken};`
        }
      })
      console.log('정답 제출 리듀서 확인 : ', data)
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  },
);

const addAnswerSlice = createSlice({
  name: "addAnswerSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__addAnswer.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__addAnswer.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.addAnswer = action.payload; // Store에 있는 postDetail에 서버에서 가져온 data 추가
      console.log("정답 제출 엑스트라 리듀서 action.payload : ", action.payload);
      console.log("정답 제출 엑스트라 리듀서 state.postDetail : ", state.postDetail);
    },
    [__addAnswer.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = addAnswerSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default addAnswerSlice.reducer;
