import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContestCard from "../../../Components/ContestCard";
import PaginationComponent from "../../../Components/Pagination";
import { graphSuccess } from "../../../Redux/Slices/GraphContestSlice";

function ContentList() {
  const dispatch = useDispatch();
  const contestlist = useSelector((state) => state.contest.allContests);
  const totalContests = contestlist.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [tempItemsPerPage, setTempItemsPerPage] = useState(5);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const startContest = (currentPage - 1) * itemsPerPage;
  const endContest = startContest + itemsPerPage;

  const handleSetItemsPerPage = () => {
    const newItemsPerPage = parseInt(tempItemsPerPage, 10);
    if (!isNaN(newItemsPerPage) && newItemsPerPage > 0) {
      const currentIndex = startContest;
      const newPage = Math.floor(currentIndex / newItemsPerPage) + 1;
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(newPage);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleToggleFavorite = (contest) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === contest.id)) {
        return prevFavorites.filter((fav) => fav.id !== contest.id);
      } else {
        return [...prevFavorites, contest];
      }
    });
  };

  const filteredContests = contestlist.filter((contest) => {
    const contestName = contest.name || "";
    return contestName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const currentContests = showFavorites
    ? favorites
    : filteredContests.slice(startContest, endContest);

  dispatch(graphSuccess(currentContests));

  return (
    <div className="flex flex-col h-full">
      {/* Search Bar */}
      <div className="flex flex-row w-full   items-center justify-center">
        <div className="flex justify-end   ">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-lg px-10 "
          />
        </div>

        <div className="flex justify-end p-3">
          <button
            className={`py-2 px-4 rounded ${
              showFavorites ? "bg-blue-500 text-white" : "bg-red-300  "
            }`}
            onClick={() => setShowFavorites(!showFavorites)}
          >
            {showFavorites ? "Show All Contests" : "Show Favorites"}
          </button>
        </div>
      </div>

      <div className="px-3 grid grid-cols-2 gap-4 overflow-y-scroll">
        {currentContests.map((contest) => (
          <div key={contest.id}>
            <ContestCard
              contest={contest}
              isFavorite={favorites.some((fav) => fav.id === contest.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <PaginationComponent
          totalContests={totalContests}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          tempItemsPerPage={tempItemsPerPage}
          onPageChange={handlePageChange}
          onTempItemsPerPageChange={setTempItemsPerPage}
          onSetItemsPerPage={handleSetItemsPerPage}
        />
      </div>
    </div>
  );
}

export default ContentList;
