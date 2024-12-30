import React, { useState } from "react";
import HeaderNav from "./Components/HeaderNav";
import FilterBoard from "./Components/FilterBoard";
import ContentBoard from "./Components/ContentBoard";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* <HeaderNav onSearch={setSearchQuery} /> */}
      <div className="flex flex-row  h-screen">
        <div className="w-[30%]"> <FilterBoard /> </div>
        <div className="w-[70%] ">
          <ContentBoard searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;


