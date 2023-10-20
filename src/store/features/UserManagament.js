import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  tabBefore: 0,
  tabAfter: 15,
}
const UserManagament = createSlice({
  name: "UserManagament",
  initialState,
  reducers: {
    setTabAfter: (state, action) => {
      state.tabAfter = action.payload
    },
    setTabBefore: (state, action) => {
      state.tabBefore = action.payload
    },
  }
})

export const { setTabBefore, setTabAfter } = UserManagament.actions;
export default UserManagament.reducer