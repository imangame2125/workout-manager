import { Table } from "@/components";
import { levelMapping } from "@/mappings";
import { Package, Tool } from "@/store/package/package-type";
import { useTranslation } from "react-i18next";

interface PackagesDesktopProps {
  packages: Package[];
  loading: boolean;
}

const PackagesDesktop: React.FC<PackagesDesktopProps> = ({
  packages,
  loading,
}) => {
  const { t } = useTranslation();
  return (
    <Table
      className="hidden sm:table overflow-x-auto"
      loading={loading}
      data={packages}
      columns={[
        {
          title: t("cover"),
          dataIndex: "cover",
          render: (value: string, record: Package) => (
            <img
              src={value}
              alt={record.name}
              className="w-20 h-20 object-cover"
            />
          ),
        },
        {
          dataIndex: "name",
          title: t("name"),
          render: (value: string, record: Package) => (
            <a href={`/packages/${record.id}`}>{value}</a>
          ),
        },
        {
          dataIndex: "level",
          title: t("level"),
          render: (value: number) => levelMapping[value],
        },
        { dataIndex: "field_title", title: t("field") },
        { dataIndex: "coach", title: t("coach") },
        { dataIndex: "status", title: t("status") },
        {
          dataIndex: "tools",
          title: t("tools"),
          render: (value: Tool[]) => {
            return value?.map((tool, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={tool.cover}
                  alt={tool.name}
                  className="w-10 h-10 object-cover"
                />
                <span>{tool.name}</span>
              </div>
            ));
          },
        },
      ]}
    />
  );
};

export default PackagesDesktop;
