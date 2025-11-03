import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/dropDown.css";
import { useAuth } from "../context/authContext";

export default function OptionsMenu() {
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate();
  const auth = useAuth();
  // ✅ Load current user data on mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.profileImage) {
      setProfilePic(currentUser.profileImage);
    }
  }, []);

  // ✅ Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    // navigate("/"); // redirect to login page or landing page
    window.location.reload();
  };

  return (
    <div className="options-menu relative" ref={menuRef}>
      <button
        id="profile-btn"
        className="w-[64px] h-[64px] cursor-pointer rounded-full border border-gray-300 overflow-hidden"
        onClick={() => setOpen(!open)}
      >
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-400"></div>
        )}
      </button>

      {open && (
        <div className="dropdown absolute top-[70px] right-0 bg-white shadow-md rounded-xl p-3 flex flex-col gap-2">
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            تعديل الملف الشخصي
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-500 text-right hover:text-red-600 transition"
          >
            تسجيل خروج
          </button>
        </div>
      )}
    </div>
  );
}
