import React, { useState, useEffect } from "react";
import CancelBtn from "../components/CancelBtn";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setUser({ ...user, profileImage: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? user : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate(-1);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between direction-rtl p-4 gap-10">
      <div className="lg:hidden">
        <CancelBtn />
      </div>

      <div className="flex flex-col lg:mt-20">
        <h2 className="text-[32px] opacity-70">الملف الشخصي</h2>
        <div className="flex flex-col lg:flex-row lg:mt-8 lg:w-1/2 gap-8">
          {/* Profile Picture */}
          <div className="w-full flex flex-col justify-center items-center">
            <p className="mt-8 opacity-60">تغيير صورة الملف الشخصي:</p>
            <div className="bg-gray-300 mb-4 w-[188px] h-[188px] rounded-full overflow-hidden flex justify-center items-center">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <p className="opacity-50 text-sm">بدون صورة</p>
              )}
            </div>
            <label className="bg-gray-300 w-[146px] mt-2 border border-gray-400 h-[40px] rounded-[15px] flex justify-center items-center cursor-pointer">
              <p className="opacity-50 text-xl">إضافة ملف</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* User Info */}
          <div className="lg:w-full flex flex-col">
            <p className="mt-8 opacity-60">اسم المستخدم:</p>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="bg-white mt-2 lg:w-full h-[60px] border border-gray-400 rounded-[17px] p-3"
            />
            <p className="mt-6 opacity-60">كلمة المرور:</p>
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              className="bg-white mt-2 lg:w-full h-[60px] border border-gray-400 rounded-[17px] p-3"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 w-full flex flex-row justify-center items-center gap-4">
        <div
          onClick={handleSave}
          className="lg:w-1/4 rounded-[21px] flex flex-1 justify-center px-8 items-center h-[68px] bg-[#FFCD18] active:bg-yellow-500 cursor-pointer"
        >
          <p className="text-[#3C3C3C] text-xl leading-[26px] text-center">
            تم
          </p>
        </div>
        <div className="lg:block hidden lg:w-1/2">
          <CancelBtn />
        </div>
      </div>
    </div>
  );
};

export default Profile;
