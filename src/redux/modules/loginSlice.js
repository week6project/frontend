import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Initial State
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

//Action Creator

export const __getUserId = createAsyncThunk(
  "getUserId",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/users");

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserId.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getUserId.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.users = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getUserId.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});
//export
export const {} = loginSlice.actions;
export default loginSlice.reducer;
