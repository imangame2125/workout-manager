import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          {t("workoutManager")}
        </h1>
      </div>
    </header>
  );
};

export default Header;
