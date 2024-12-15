/* eslint-disable camelcase */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./package-initalState";
import packageReducers from "./package-reducers";
import { PackageInitalState } from "./package-type";
import { getPackageDetail, getPackages } from "./package-extra-reducers";

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: packageReducers,
  extraReducers: (builder: ActionReducerMapBuilder<PackageInitalState>) => {
    builder
      .addCase(getPackages.pending, (state) => {
        state.list = {
          ...initialState.list,
          loading: true,
        };
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.list.data = action.payload.data;
        state.list.status = action.payload.status;
        state.list.message = action.payload.message;
        state.list.filteredData = action.payload.data;
        state.list.loading = false;
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.list = {
          ...initialState.list,
          loading: false,
        };
      });

    builder
      .addCase(getPackageDetail.pending, (state) => {
        state.details = {
          ...initialState.details,
          loading: true,
        };
      })
      .addCase(getPackageDetail.fulfilled, (state, action) => {
        state.details.data = action.payload.data;
        state.details.status = action.payload.status;
        state.details.message = action.payload.message;
        state.details.loading = false;
      })
      .addCase(getPackageDetail.rejected, (state, action) => {
        state.details = {
          ...initialState.details,
          loading: false,
        };
      });
  },
});

// actions from packageSlice
export const { filterPackages, getPackageDetailPending, setFilters } =
  packageSlice.actions;

export default packageSlice.reducer;
