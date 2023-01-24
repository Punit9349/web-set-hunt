import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import lobbyReducer from "./lobbyReducer";
import teamReducer from "./teamReducer";
import userReducer from "./userReducer";

export default configureStore({
    reducer:{
        team:teamReducer,
        loader:loaderReducer,
        user:userReducer,
        lobby:lobbyReducer
    }
});