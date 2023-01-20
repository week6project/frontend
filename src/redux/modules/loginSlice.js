import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

axios.defaults.withCredentials = true;

// Initial State
const initialState = {
  users: {},
  isLoading: false,
  error: null,
};

//POST
export const __postUsers = createAsyncThunk(
  "postUsers",
  async (payload, thunkAPI) => {
    //console.log("payload=", payload);
    try {
      const { data } = await axios
        .post(
          `${serverUrl}/user/login`,
          //"http://prachang.shop/api/users/",
          payload,
        )
        .then((res) => {
          const token = res.headers.authorization;
          const refreshToken = res.headers.refreshauthorization;
          localStorage.clear();
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);

          console.log("로그인 리듀서 token : ", token);
          console.log("로그인 리듀서 refreshToken : ", refreshToken);

          // 가져오기 코드 const tokenLocal = localStorage.getItem('token');
          return res;
        });
      console.log("로그인 data : ", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("aa", error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [__postUsers.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postUsers.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.users = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      console.log("로그인 state.users", state.users);
    },
    [__postUsers.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("state err", state.error);
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
