import AdminReducer from "./AdminSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        admin: AdminReducer
    }
})

export default store;   