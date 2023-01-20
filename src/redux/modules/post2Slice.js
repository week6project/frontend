import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";
const tokenLocal = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refreshToken");

axios.defaults.withCredentials = true;
// Initial State
const initialState = {
  writeLists: [],
  isLoading: false,
  error: null,
  decodeImg: null,
};

export const __postFormData = createAsyncThunk(
  "postFormData",
  async (payload, thunkAPI) => {
    console.log("payload=", payload);

    await axios
      .post(
        `${serverUrl}/posts`,
        //"http://prachang.shop/api/users/",
        payload,
        {
          headers: {
            authorization: tokenLocal,
            refreshauthorization: refreshToken,
            "Content-Type": "multipart/form-data",
          },
        },
        console.log("asdas", payload),
      )
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  },
);

const post2Slice = createSlice({
  name: "postwriter",
  initialState,
  reducers: {
    getDecodeImg: (state, action) => {
      state.decodeImg = action.payload;
    },
  },
  extraReducers: {
    [__postFormData.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postFormData.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.lists = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      //console.log("전송 action.payload", action.payload);
    },
    [__postFormData.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const { getDecodeImg } = post2Slice.actions;
export default post2Slice.reducer;
