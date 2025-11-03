import { Link } from "react-router-dom";
import ReportBtn from "./ReportBtn";
import { useState } from "react";
import AddReport from "../pages/AddReport";
import { useSection } from "../context/SectionContext";
import cleaning from "../assets/images/cleaning.jpg";
import general from "../assets/images/general.jpeg";
import lighting from "../assets/images/lights.jpg";
import parks from "../assets/images/parks.jpg";
import roads from "../assets/images/roads.jpeg";
import more from "../assets/images/more.jpg";
import sewers from "../assets/images/sewers.avif";

const Sections = () => {
  const { selectedSection, setSelectedSection } = useSection();

  const sec = [
    {
      name: "عام",
      desc: "يتضمن هذا القسم جميع البلاغات والملاحظات العامة بغض النظر عن القسم المحدد.",
      picture: general,
    },
    {
      name: "طرق",
      desc: "يُعنى هذا القسم بمشكلات الطرق مثل الحفر، التلف، أو الحاجة إلى صيانة الأسفلت.",
      picture: roads,
    },
    {
      name: "إنارة",
      desc: "يختص هذا القسم بمشكلات إنارة الشوارع مثل المصابيح التالفة أو المناطق التي تفتقر للإنارة.",
      picture: lighting,
    },
    {
      name: "نظافة",
      desc: "يُركز هذا القسم على قضايا النظافة العامة مثل تراكم النفايات أو نقص الحاويات.",
      picture: cleaning,
    },
    {
      name: "حدائق",
      desc: "يتعلق هذا القسم بصيانة وتجميل الحدائق العامة، وزراعة الأشجار والمساحات الخضراء.",
      picture: parks,
    },
    {
      name: "مجاري",
      desc: "يُعالج هذا القسم المشكلات المرتبطة بشبكات الصرف الصحي والمجاري وانسدادها.",
      picture: sewers,
    },
    {
      name: "أخرى",
      desc: "يشمل هذا القسم أي ملاحظات أو بلاغات لا تندرج ضمن الأقسام الأخرى.",
      picture: more,
    },
  ];

  return (
    <div className="w-full my-4 flex flex-col lg:relative direction-rtl lg:grid grid-cols-5 lg:gap-7  justify-center lg:px-20 px-4 ">
      <Link to="/add-report" className="hidden  lg:block flex-1 ">
        <ReportBtn />
      </Link>

      {/* sections */}
      {sec.map((section, index) => (
        <Link
          to="/reports"
          className="h-[126px] lg:h-[313px] hover:scale-103 active:scale-95 transition duration-[0.2s] direction-ltr lg:flex-none mb-3 flex-1 active:bg-gray-100 rounded-[21px]   flex  lg:flex-col bg-white"
          key={index}
          onClick={() => setSelectedSection(section.name)}
        >
          <div className="w-1/3 lg:w-full lg:h-[195px]  bg-gray-400 overflow-hidden lg:rounded-t-[21px] lg:rounded-bl-[0px] rounded-l-[21px]">
            <img
              src={section.picture}
              className="w-full h-full object-cover"
              alt="section"
            ></img>
          </div>

          <div className=" w-full flex flex-col">
            <div className="h-1/3 direction-rtl py-2 px-4 w-full">
              <p className=" mt-2 text-2xl  opacity-70 ">{section.name}</p>
            </div>
            <div className=" direction-rtl py-2 px-4 w-full">
              <p className=" mt-2 text-sm opacity-70 ">{section.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sections;
