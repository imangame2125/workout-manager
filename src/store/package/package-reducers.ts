import { PayloadAction } from "@reduxjs/toolkit";
import { PackageInitalState } from "./package-type";

const packageReducers = {
  filterPackages: (state: PackageInitalState) => {
    state.list.filteredData = state.list.data
      .filter((item) =>
        state.filter.field
          ? item.field.toLowerCase() === state.filter.field.toLowerCase()
          : true
      )
      .filter((item) =>
        state.filter.level ? item.level === state.filter.level : true
      )
      .filter((item) =>
        state.filter.status
          ? item.status.toLowerCase() === state.filter.status.toLowerCase()
          : true
      );
    state.list.loading = false;
  },

  getPackageDetailPending: (state: PackageInitalState) => {
    state.details.loading = true;
  },

  setFilters: (
    state: PackageInitalState,
    action: PayloadAction<{
      field?: string;
      level?: number;
      status?: string;
    }>
  ) => {
    state.filter = {
      ...state.filter,
      ...action.payload,
    };
  },
};

export default packageReducers;
