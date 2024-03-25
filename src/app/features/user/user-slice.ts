import {
    createSlice,
    type PayloadAction,
    createAsyncThunk,
    createAction,
  } from "@reduxjs/toolkit";
  import api from "../../api";
  
  import { type User } from "../../types";
  
  
  export type UserState = {
    users: User[];
    selectedUser: User | null;
    loading: boolean;
    error: string;
  };
  
  const initialState: UserState = {
    users: [],
    loading: false,
    error: "",
    selectedUser: null,
  };
  
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<User>) => {
        state.selectedUser = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[] | undefined>) => {
        state.users = action.payload ?? [];
        state.loading = false;
      });
      builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
    },
  });
  

export const setUser = createAction<User | null>("user/setUser");

  export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async () => {
      try {
        const users = await api.fetchUsers();
        return users;
      } catch (error) {
        throw Error(error as string);
      }
    },
  );
  
  export default userSlice.reducer;
  