import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuState",
  initialState: {
    menuItems: "",
    menu: true,
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    closeMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { closeMenu, setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
