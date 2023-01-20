import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "posts/GET_POSTS",
  async (payload, thunkAPI) => {
    try {
      const tokenLocal = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refreshToken');
      const data = await axios.get(`${serverUrl}/posts`, {
        headers: {
          authorization: tokenLocal,
          refreshauthorization: refreshToken,
          // Cookie: `Authorization=${tokenLocal};
          //         refreshAuthorization=${refreshToken};`
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.posts = action.payload.data.data.posts; // Store에 있는 posts에 서버에서 가져온 data 추가
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postsSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsSlice.reducer;
