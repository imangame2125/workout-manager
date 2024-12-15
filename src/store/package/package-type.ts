export interface Tool {
  name: string;
  cover: string;
}

export interface Package {
  id: number;
  name: string;
  description: string;
  cover: string;
  thumbnail: string;
  level: number;
  field: string;
  field_title: string;
  price: number | null;
  status: string;
  coach: string;
  coach_cover: string;
  tools: Tool[];
}

interface Content {
  id: number;
  name: string;
  duration: string;
  cover: string;
  file: string;
}

interface PackageInfo {
  id: number;
  name: string;
  description: string;
  cover: string;
  thumbnail: string;
  level: number;
  field: string;
  field_title: string;
  intro_file: string;
  price: number | null;
  status: string;
  coach: string;
  coach_cover: string;
  tools: Tool[];
  contents: Content[];
}

interface Response<T> {
  data: T;
  status: number;
  message: string;
  loading: boolean;
}

export interface PackagesResponse extends Response<Package[]> {
  filteredData: Package[];
}

export type PackageResponse = Response<PackageInfo>;

export type PackageInitalState = {
  list: PackagesResponse;
  details: PackageResponse;
  filter: {
    field: string;
    level: number;
    status: string;
  };
};
