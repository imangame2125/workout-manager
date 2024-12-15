import Spinner from "@/components/spinner";
import { levelMapping } from "@/mappings";
import { Package } from "@/store/package/package-type";
import { useTranslation } from "react-i18next";

interface PackagesMobileProps {
  packages: Package[];
  loading: boolean;
}

const PackagesMobile: React.FC<PackagesMobileProps> = ({
  packages,
  loading,
}) => {
  const { t } = useTranslation();
  if (loading) {
    return <Spinner loading={loading} />;
  }
  return (
    <div className="grid gap-4 sm:hidden">
      {packages.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white border rounded shadow flex items-start gap-4"
        >
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-700">{item.field_title}</p>
            <p className="text-sm text-gray-700">
              {t("level")}: {levelMapping[item.level]}
            </p>
            <p className="text-sm text-gray-700">
              {t("status")}: {item.status}
            </p>
            <a
              className="mt-2 text-blue-600 hover:underline"
              href={`/packages/${item.id}`}
            >
              {t("viewDetails")}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesMobile;
