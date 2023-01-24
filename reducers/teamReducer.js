import { createSlice } from "@reduxjs/toolkit";

export const team = createSlice({
    name:'team',
    initialState:{
        team:null
    },
    reducers:{
        TEAM_MEMBERS: (state)=>{
            return state
        },
        NEW_MEMBER_ADDED: (state)=>{
            return state
        },
    }
});

export const {TEAM_MEMBERS,NEW_MEMBER_ADDED}=team.actions;
export default team.reducer;