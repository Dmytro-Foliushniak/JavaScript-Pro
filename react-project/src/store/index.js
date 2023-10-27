import {configureStore} from "@reduxjs/toolkit";
import ToDoSlice from "./slice/ToDoSlice";

export default configureStore({
    reducer: {
        tasks: ToDoSlice
    }
})