import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl, tokenLocal, refreshToken } from ".";

const initialState = {
  postDetail: {},
  isLoading: false,
  error: null,
};

export const __getPostDetail = createAsyncThunk(
  "posts/GET_POST_DETAIL",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.get(`${serverUrl}/posts/${payload}`,{
        headers: {
          authorization: tokenLocal,
          refreshauthorization: refreshToken,
          // Cookie: `authorization=${tokenLocal}; 
          //         refreshauthorization=${refreshToken};`
        }
      })
      return thunkAPI.fulfillWithValue(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  },
);

export const __addAnswer = createAsyncThunk(
  "posts/ADD_ANSWER",
  async (payload, thunkAPI) => {
    try{
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

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.postDetail = action.payload.data; // Store에 있는 postDetail에 서버에서 가져온 data 추가
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
    //정답 제출
    [__addAnswer.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__addAnswer.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.postDetail = action.payload.data; // Store에 있는 postDetail에 서버에서 가져온 data 추가
      console.log("정답 제출 action.payload : ", action.payload);
      console.log("정답 제출 state.postDetail : ", state.postDetail);
    },
    [__addAnswer.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postDetailSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postDetailSlice.reducer;
