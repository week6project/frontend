import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

const initialState = {
  postDetail: {},
  isLoading: false,
  error: null,
};

export const __getPostDetail = createAsyncThunk(
  "posts/GET_POST_DETAIL",
  async (payload, thunkAPI) => {
    try{
      const {data} = await axios.get(`${serverUrl}/posts/${payload}`)
      console.log('상세 : ', data)
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
      console.log("action.payload : ", action.payload);
      state.postDetail = action.payload; // Store에 있는 postDetail에 서버에서 가져온 data 추가
      console.log("state.postDetail : ", state.postDetail);
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postDetailSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postDetailSlice.reducer;
