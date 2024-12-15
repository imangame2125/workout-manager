import { PackageInitalState } from "./package-type";

export const initialState: PackageInitalState = {
  list: {
    data: [],
    status: 200,
    message: "",
    loading: false,
    filteredData: [],
  },
  details: {
    data: {
      id: 0,
      name: "",
      description: "",
      cover: "",
      thumbnail: "",
      level: 0,
      field: "",
      field_title: "",
      intro_file: "",
      price: 0,
      status: "",
      coach: "",
      coach_cover: "",
      tools: [],
      contents: [],
    },
    status: 200,
    message: "",
    loading: false,
  },
  filter: {
    field: "",
    level: 0,
    status: "",
  },
};
