import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./data-slice/data-slice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    data: dataSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch : () => AppDispatch  = useDispatch

export default store