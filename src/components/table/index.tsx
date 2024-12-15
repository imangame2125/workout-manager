import React from "react";
import { useTranslation } from "react-i18next";
import Spinner from "../spinner";

interface TableProps {
  data?: any[];
  columns?: {
    title: string;
    dataIndex: string;
    render?: (value: any, record: any) => any;
  }[];
  loading?: boolean;
  className?: string;
}

const Table: React.FC<TableProps> = ({
  data = [],
  columns = [],
  loading = false,
  className = "",
}) => {
  const { t } = useTranslation();
  return (
    <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.dataIndex}
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.length === 0 && !loading && (
          <tr>
            <td
              colSpan={columns.length}
              className="px-6 py-4 text-sm text-gray-700 text-center"
            >
              {t("noData")}
            </td>
          </tr>
        )}
        {loading && (
          <tr>
            <td
              colSpan={columns.length}
              className="px-6 py-4 text-sm text-gray-700 text-center"
            >
              <Spinner loading={loading} />
            </td>
          </tr>
        )}
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td
                key={column.dataIndex}
                className="px-6 py-4 text-sm text-gray-700"
              >
                {column?.render
                  ? column.render(row[column.dataIndex], row)
                  : row[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
