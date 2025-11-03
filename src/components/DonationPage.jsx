import { useLocation } from "react-router-dom";
import MastercardCard from "./CreditCard";
import VisaCard from "./VisaCard";

const DonationPage = () => {
  const location = useLocation();
  // Get the section from the state passed by the Link component
  const donationSection = location.state?.section;
  console.log(donationSection);
  return (
    <div className="direction-rtl w-full  flex flex-col justify-center px-4 items-center mt-10">
      {donationSection && (
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold mb-4">
            صفحة التبرع الخاصة بقسم الـ{" "}
            <span className="text-4xl">{donationSection}</span>
          </h1>

          <p className="text-center text-2xl opacity-50 ">
            شكرًا لرغبتك في المساهمة في تحسين مدينتنا! يمكنك التبرع عبر الوسائل
            التالية:
          </p>
          <div className="flex flex-col mb-12 lg:flex-row gap-10 mt-6">
            <MastercardCard />
            <VisaCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
