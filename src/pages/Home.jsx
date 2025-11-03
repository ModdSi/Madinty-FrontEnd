import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReportBtn from "../components/ReportBtn";
import Sections from "../components/Sections";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import ClearCacheButton from "../utility/ClearCache";

const Home = () => {
  return (
    <div className="lg:relative">
      <Link to="/add-report" className=" lg:hidden">
        <ReportBtn />
      </Link>

      <Sections />
      <ClearCacheButton />
    </div>
  );
};

export default Home;
