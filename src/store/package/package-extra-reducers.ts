import { AppApi } from "@/service/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PackageResponse, PackagesResponse } from "./package-type";
import { PackageUrl } from "./packageUrl";
import { getPackageDetailPending } from "./package-slice";

// Get all packages
export const getPackages = createAsyncThunk<PackagesResponse>(
  "package/getPackages",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await AppApi.get(PackageUrl.GetAllPackages)
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((error: Error) => {
          return rejectWithValue(error);
        });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Get package detail by id
export const getPackageDetail = createAsyncThunk<
  PackageResponse,
  { id: string }
>(
  "package/getPackageDetailsById",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(getPackageDetailPending());
      const response = await AppApi.get(
        `${PackageUrl.GetPackageDetailsById.replace(":id", id)}`
      )
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((error: Error) => {
          return rejectWithValue(error);
        });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
