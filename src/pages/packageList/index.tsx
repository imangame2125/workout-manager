import { useAppDispatch, useAppSelector } from "@/hooks";
import { getPackages } from "@/store/package/package-extra-reducers";
import { filterPackages } from "@/store/package/package-slice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PackagesDesktop from "./PackagesDesktop";
import PackagesMobile from "./PackagesMobile";
import Filters from "./Filters";

interface PackageListtProps {}

const PackageList: React.FC<PackageListtProps> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { filteredData: packages, loading } = useAppSelector(
    (state) => state.package.list
  );

  const handleFilterChange = (
    key: string,
    value: string | number | undefined
  ) => {
    dispatch(filterPackages());
  };

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{t("workoutPackages")}</h1>
      <Filters onChange={handleFilterChange} />
      <PackagesMobile packages={packages} loading={loading} />
      <PackagesDesktop packages={packages} loading={loading} />
    </div>
  );
};

export default PackageList;
