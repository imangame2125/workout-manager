import { Select } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import usePackageFields from "@/hooks/usePackageFields";
import usePackageLevels from "@/hooks/usePackageLevels";
import usePackgeStatuses from "@/hooks/usePackageStatuses";
import { fieldMapping, levelMapping } from "@/mappings";
import { setFilters } from "@/store/package/package-slice";
import { useTranslation } from "react-i18next";

interface FiltersProps {
  onChange: (key: string, value: string | number | undefined) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const { level, field, status } = useAppSelector(
    (state) => state.package.filter
  );
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const statuses = usePackgeStatuses();
  const levels = usePackageLevels();
  const fields = usePackageFields();

  const handleStatusChange = (value: string) => {
    if (value === t("allStatuses")) {
      value = "";
    }

    dispatch(setFilters({ status: value }));

    onChange("status", value);
  };

  const handleFieldChange = (value: string) => {
    if (value === t("allFields")) {
      value = "";
    }

    Object.keys(fieldMapping).forEach((key) => {
      if (fieldMapping[key] === value) {
        value = key;
      }
    });

    dispatch(setFilters({ field: value }));

    onChange("field", value);
  };

  const handleLevelChange = (value: string) => {
    // set loading to true
    let val: number | undefined = undefined;

    if (value === t("allLevels")) {
      val = undefined;
    }

    Object.keys(levelMapping).forEach((key) => {
      if (levelMapping[+key] === value) {
        val = +key;
      }
    });

    dispatch(setFilters({ level: val }));
    onChange("level", val);
  };

  return (
    <div className="flex gap-4 mb-4">
      <Select
        dataSource={[t("allFields"), ...fields.map((field) => t(field))]}
        onChange={(value: string) => handleFieldChange(value)}
        value={field ? t(fieldMapping[field]) : t("allFields")}
      />
      <Select
        dataSource={[
          t("allLevels"),
          ...levels.map((level) => levelMapping[level]),
        ]}
        onChange={(value: string) => handleLevelChange(value)}
        value={level ? levelMapping[level] : t("allLevels")}
      />
      <Select
        dataSource={[t("allStatuses"), ...statuses]}
        onChange={(value: string) => handleStatusChange(value)}
        value={status ? status : t("allStatuses")}
      />
    </div>
  );
};

export default Filters;
