import { createSlice } from "@reduxjs/toolkit";


const postslice = createSlice({
    name:"Post",
    initialState:{
        isLoading:false,
         isError:false, 
         error:null, 
         data:"hello",
    },
    reducers:{},
    extraReducers:function(builder){}

})
export default postslice.reducer