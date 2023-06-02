import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'



// get user from local storage.

const user = JSON.parse(localStorage.getItem('user'))

//every item that is stored in local storage has the data type of string.
//when we send a login or register request, we get a token back to protect our routes.
//we will save that token in local storgae. 



const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  
export const register = createAsyncThunk('auth/register' , async (user, thunkAPI)=>{
  try {
    return await authService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
}) 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },

   extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state)=>{
          state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess =true
          state.user = action.payload
        })
        .addCase(register.rejected, (state,action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
    } 

})


export const { reset } = authSlice.actions //this way we can bring reset into components where we want to fire it off
export default authSlice.reducer

