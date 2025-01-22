import AdminReducer from "./AdminSlice";
import NavReducer from "./NavSlice";
import UserReducer from "./UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        admin: AdminReducer,
        user: UserReducer,
        nav: NavReducer
    }
})

export default store;   