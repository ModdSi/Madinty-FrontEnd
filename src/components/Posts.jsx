import { useEffect, useState } from "react";
import upvote from "../assets/images/upvote.png";
import locationIcon from "../assets/images/location.png";
import OptionsMenu from "./PostOptionMenu";
import { Link } from "react-router-dom";

const Posts = ({ selectedSection }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports")) || [];
    const filteredReports = savedReports.filter((report) => !report.completed);
    const sortedReports = filteredReports.sort(
      (a, b) => (b.votes || 0) - (a.votes || 0)
    );
    setReports(sortedReports);
  }, []);

  const displayedReports =
    selectedSection === "عام"
      ? reports
      : reports.filter((r) => r.section === selectedSection);

  const handleUpvote = (id) => {
    const updatedReports = reports.map((report) => {
      if (report.id === id) {
        return { ...report, votes: (report.votes || 0) + 1 };
      }
      return report;
    });

    localStorage.setItem("reports", JSON.stringify(updatedReports));
    setReports(updatedReports);
  };

  return (
    <div className="direction-rtl w-full flex flex-col justify-center px-4 items-center mt-10">
      {displayedReports.length === 0 ? (
        <p className="text-gray-400 mt-10 text-lg">
          لا توجد بلاغات في هذا القسم
        </p>
      ) : (
        displayedReports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col justify-center w-full mb-12 max-w-md"
          >
            <div className="flex flex-row justify-between items-start">
              <div>
                <div className="flex flex-row items-center mb-2">
                  <div className="w-[28px] h-[28px] rounded-full overflow-hidden bg-gray-300">
                    {report.profileImage ? (
                      <img
                        src={report.profileImage}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-400" />
                    )}
                  </div>
                  <p className="text-center mx-2 text-sm">
                    {report.userName || "مستخدم مجهول"}
                  </p>
                </div>
                <p className="mb-2 opacity-70 px-2 break-words">
                  {report.description || "بدون وصف"}
                </p>
              </div>
              <div className="px-2 py-4">
                <OptionsMenu report={report} />
              </div>
            </div>

            {report.image ? (
              <img
                src={report.image}
                alt="report"
                className="w-full h-auto mb-2 object-cover rounded-[21px]"
              />
            ) : (
              <div className="w-full h-[266px] mb-2 bg-gray-300 rounded-[21px]" />
            )}

            <div className="w-full flex flex-row gap-3 justify-between items-center">
              <button
                onClick={() => handleUpvote(report.id)}
                className="bg-gray-300 hover:scale-103 hover:bg-[#c7c6cd] cursor-pointer active:bg-gray-400 active:scale-95 transition duration-[0.1s] w-1/3 h-[36px] flex flex-row justify-center items-center rounded-[18px]"
              >
                <img
                  src={upvote}
                  className="w-[18px] opacity-40 h-[18px] ml-1"
                />
                <p className="opacity-70 mt-1">{report.votes || 0}</p>
              </button>

              {/* Donate button */}
              <Link
                to="/donation"
                state={{ section: report.section }}
                className="bg-[#FFCD18] hover:scale-103 hover:bg-[#ffba18] cursor-pointer active:bg-yellow-500 active:scale-95 transition duration-[0.1s] w-1/3 h-[36px] flex flex-row justify-center items-center rounded-[18px]"
              >
                <p className="opacity-65">تبرع</p>
              </Link>

              {/* Location */}
              <div className="bg-gray-300 w-1/3 h-[36px] flex flex-row justify-center items-center rounded-[18px]">
                <img
                  src={locationIcon}
                  className="w-[20px] opacity-40 h-[20px]"
                />
                <p className="opacity-40 text-[13px]">
                  {report.location || "غير محدد"}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
