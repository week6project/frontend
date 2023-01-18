import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
// Initial State
const initialState = {
  writeLists: [],
  isLoading: false,
  error: null,
};

//GET
export const __getlist = createAsyncThunk(
  "getlist",
  async (payload, thunkAPI) => {
    //console.log("payload=", payload);
    try {
      const { data } = await axios.get(
        "http://localhost:3001/lists/",
        // "http://prachang.shop/api/users/",
        payload,
      );
      // console.log("payload=", payload);
      // console.log("data=", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      //console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const postSlice = createSlice({
  name: "postwriter",
  initialState,
  reducers: {},
});

export const {} = postSlice.actions;
export default postSlice.reducer;
