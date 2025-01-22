import AdminReducer from "./AdminSlice";
import NavReducer from "./NavSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        admin: AdminReducer,
        nav: NavReducer
    }
})

export default store;   