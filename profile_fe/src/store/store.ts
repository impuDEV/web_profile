import {combineReducers, configureStore} from '@reduxjs/toolkit'
import configReducer from './reducers/ConfigSlice'
import usersReducer from './reducers/UserSlice'
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    configReducer,
    usersReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']