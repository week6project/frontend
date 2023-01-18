import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
// Initial State
const initialState = {
  users: [],
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
          // "http://localhost:3001/users/",
          "https://codingtestrg.shop:3001/api/user/login",
          payload,

          //{ withCredentials: true },
        )
        .then((res) => {
          console.log(res);
          return res;
        });
      // .then(function (response) {
      //   console.log(response);
      // });
      console.log("payload=", payload);
      console.log("data=", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      //console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: {
    // [__getUsers.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [__getUsers.fulfilled]: (state, action) => {
    //   state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.Users = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    // },
    // [__getUsers.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
    //post
    [__postUsers.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postUsers.fulfilled]: (state, action) => {
      console.log("stateusers", state.users);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.users = [...state.users, action.payload]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      console.log("stateusers2", state.users);
    },
    [__postUsers.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
