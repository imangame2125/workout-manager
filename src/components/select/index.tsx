interface SelectProps {
  dataSource: string[];
  onChange: (value: string) => void;
  value?: string;
}

const Select: React.FC<SelectProps> = ({ dataSource, onChange, value }) => {
  return (
    <select
      className="p-2 border rounded w-full"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      {dataSource.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
