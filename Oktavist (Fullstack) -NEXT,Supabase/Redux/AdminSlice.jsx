import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "@/lib/supabase";


const api_call = async () => {
    try {
        const { data: { user }, error } = await supabase.auth.getUser();

        console.log("Fetched User Data:", user);

        if (error) {
            throw new Error(error.message);
        }

        if (user) {
            console.log("User Metadata:", user.user_metadata);

            return {
                name: user.user_metadata?.name || "Admin",
                role: user.user_metadata?.role || "Admin",
                email: user.email,
            };
        } else {
            throw new Error("User not found");
        }
    } catch (err) {
        console.error("Error fetching admin data:", err.message);
        throw err;
    }
};



const initialState = {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: "",
};


export const AdminData = createAsyncThunk("AdminData", api_call);


const AdminSlice = createSlice({
    name: "Admin",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(AdminData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = "";
            })
            .addCase(AdminData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(AdminData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message || "An error occurred";
            });
    },
});


const AdminReducer = AdminSlice.reducer;
export default AdminReducer;
