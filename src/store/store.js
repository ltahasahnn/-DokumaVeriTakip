import { configureStore } from "@reduxjs/toolkit"
import userManagament from "./features/UserManagament.js"

export const store = configureStore({
  reducer: {
    userManagament: userManagament
  }
})
