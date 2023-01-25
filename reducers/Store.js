import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./loaderReducer";
import lobbyReducer from "./lobbyReducer";
import teamReducer from "./teamReducer";
import userReducer from "./userReducer";
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
    team: teamReducer,
    loader: loaderReducer,
    user: userReducer,
    lobby: lobbyReducer
});


const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);