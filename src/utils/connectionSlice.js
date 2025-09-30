import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
   name:"Connections",
   initialState:null,
   reducers:{
     addConnection:(state,action)=>{
              return action.payload;
      },
    removeConnection:(action)=>null,
   }

});

export const{addConnection,removeConnection}=connectionSlice.actions;
export default connectionSlice.reducer;