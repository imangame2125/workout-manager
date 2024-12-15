import { useAppDispatch, useAppSelector } from "@/hooks";
import { getPackageDetail } from "@/store/package/package-extra-reducers";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { levelMapping } from "@/mappings";
import { useTranslation } from "react-i18next";
import Spinner from "@/components/spinner";

interface PackageDetailsProps {}

const PackageDetails: React.FC<PackageDetailsProps> = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { data: selectedPackage, loading } = useAppSelector(
    (state) => state.package.details
  );

  useEffect(() => {
    dispatch(getPackageDetail({ id: id! }));
  }, [dispatch, id]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/packages")}
        className="flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200"
      >
        <svg
          className="w-5 h-5 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        {t("returnToList")}
      </button>
      <div className="max-w-5xl mx-auto p-4">
        <div
          className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md mb-6"
          style={{
            backgroundImage: `url(${selectedPackage.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {selectedPackage.name}
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <section className="mb-6">
            <video
              controls
              src={selectedPackage.intro_file}
              className="w-full rounded-lg shadow-md"
            />
          </section>

          <section className="mb-6">
            {/* <h2 className="text-xl font-semibold mb-2">{t("description")}</h2> */}
            <p className="text-gray-700">{selectedPackage.description}</p>
          </section>

          <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {/* <h2 className="text-xl font-semibold mb-2">{t("details")}</h2> */}
              <ul className="text-gray-700">
                <li>
                  <strong>{t("field")}:</strong> {selectedPackage.field_title}
                </li>
                <li>
                  <strong>{t("level")}:</strong>{" "}
                  {levelMapping[selectedPackage.level] || "N/A"}
                </li>
                <li>
                  <strong>{t("status")}:</strong> {selectedPackage.status}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={selectedPackage.coach_cover}
                alt={selectedPackage.coach}
                className="w-20 h-20 object-cover rounded-full shadow-md"
              />
              <div>
                <h2 className="text-xl font-semibold">{t("coach")}</h2>
                <p className="text-gray-700">{selectedPackage.coach}</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">{t("tools")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedPackage.tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4"
                >
                  <img
                    src={tool.cover}
                    alt={tool.name}
                    className="w-16 h-16 object-cover mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t("videos")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedPackage.contents.map((content) => (
                <div
                  key={content.id}
                  className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col"
                >
                  <img
                    src={content.cover}
                    alt={content.name}
                    className="w-full h-32 object-cover mb-2 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mb-1">{content.name}</h3>
                  <p className="text-sm text-gray-600">
                    {t("duration")}: {content.duration}
                  </p>
                  <a
                    href={content.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-blue-500 text-white text-sm py-2 px-4 rounded shadow hover:bg-blue-600"
                  >
                    {t("watchVideo")}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
