import { createSlice, createAsyncThunk, history } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

// Initial State
const initialState = {
  users: {},
  isLoading: false,
  error: null,
  isLoginOk: false,
};

//POST
export const __postUsers = createAsyncThunk(
  "postUsers",
  async (payload, thunkAPI) => {
    //console.log("payload=", payload);
    try {
      console.log('로그인 트라이 시작')
      const data = await axios.post(`${serverUrl}/user/login`, payload,)
      .then((res)=>{
          if(res.status===200){
            console.log('😂😂😂로그인 res.status : ', res.status)
            const token = res.headers.authorization;
            const refreshToken = res.headers.refreshauthorization;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            alert('로그인 성공!!!')
            return res
          }
        })
      .catch((err)=>{
        console.log('로그인 에러 캐치 err : ', err)
        alert('정확한 정보를 입력해주세요!')
        return err
      })
      console.log('로그인 리듀서!! data : ', data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log('😢🤢😢로그인 error.status : ', error.response.status)
      console.log('로그인 리듀서 에러찍기', error)
      alert('다시 확인해주세요!!')
      //navigate('/')
      //if(error.response.status === 404){
        //return thunkAPI.rejectWithValue(error);
      //}
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
      state.isLoginOk = true
    },
    [__postUsers.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("state err", state.error);
      state.isLoginOk = false
      state.users = null
    },
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
