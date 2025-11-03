import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-5 px-4 items-center justify-center  my-8  ">
      {/* About Card */}
      <div className=" z-10 bg-white w-full rounded-[21px] p-10 lg:w-[420px] text-center border border-white/30">
        <h1 className="text-3xl font-bold  mb-4">مدينتي</h1>
        <p className="text-gray-500  leading-relaxed">
          مشروع "مدينتي" هو تطبيق ويب تفاعلي يهدف إلى تمكين المواطنين من الإبلاغ
          عن المشاكل العامة في مناطقهم بسهولة وسرعة، مثل مشاكل الطرق، الإنارة،
          النظافة وغيرها. يتيح التطبيق للمستخدم إنشاء حساب شخصي، رفع صورة
          للمشكلة، كتابة وصف، وتحديد موقعها. كما يمكن للمستخدمين التفاعل مع
          البلاغات عبر خاصية التصويت (Upvote) لتحديد أولويات الإصلاح بناءً على
          أهمية البلاغات وعدد الأصوات.
        </p>
      </div>
    </div>
  );
};

export default About;
