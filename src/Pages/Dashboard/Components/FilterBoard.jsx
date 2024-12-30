import React, { useState, useEffect, useCallback } from "react";
import { LegacyCard, OptionList, Checkbox } from "@shopify/polaris";
import { useDispatch, useSelector } from "react-redux";
import Contest from "../../../Api/contest";
import { fetchSuccess } from "../../../Redux/Slices/ContestSlice";

function FilterBoard() {
  const dispatch = useDispatch();
  const { allContests, fetchContests } = Contest();

  useEffect(() => {
    fetchContests();
  }, []);

  useEffect(() => {
    dispatch(fetchSuccess(allContests));
  }, [allContests, dispatch]);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPhases, setSelectedPhases] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const applyFilters = useCallback(() => {
    const filteredContests = allContests.filter((contest) => {
      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(contest.type);
      const phaseMatch =
        selectedPhases.length === 0 || selectedPhases.includes(contest.phase);
      const favoriteMatch = !showFavorites || contest.isFavorite;
      return typeMatch && phaseMatch && favoriteMatch;
    });
    dispatch(fetchSuccess(filteredContests));
  }, [allContests, selectedTypes, selectedPhases, showFavorites, dispatch]);

  useEffect(() => {
    applyFilters();
  }, [selectedTypes, selectedPhases, showFavorites, applyFilters]);

  return (
    <div className="flex flex-col gap-5">
      <LegacyCard>
        <OptionList
          title="Filter by Contest Type"
          onChange={setSelectedTypes}
          options={[
            { value: "ICPC", label: "ICPC" },
            { value: "CF", label: "CF" },
          ]}
          selected={selectedTypes}
          allowMultiple
        />
      </LegacyCard>
      <LegacyCard>
        <OptionList
          title="Filter by Contest Phase"
          onChange={setSelectedPhases}
          options={[
            { value: "FINISHED", label: "FINISHED" },
            { value: "BEFORE", label: "BEFORE" },
            { value: "CODING", label: "CODING" },
          ]}
          selected={selectedPhases}
          allowMultiple
        />
      </LegacyCard>
    </div>
  );
}

export default FilterBoard;
