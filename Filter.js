import React, { useState, useEffect } from "react";
import FilterModal from "./FilterModal";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Filter = () => {
  //Stae for controlling modal visibility.
  const [isModalOpen, setIsModalOpen] = useState(false);
  //State for storing selected filters
  const [selectedFilters, setSelectedFilters] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  }, [selectedFilters, dispatch]);

  //Function to handle opening the Modal(PopUp Window)
  const handleOpenModal = () => {
    setIsModalOpen(true); //sets isModalOpen is true to open the modal
  };

  //Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); //sets isModalOpen is false to open the modal
  };

  //Function to handle changes in filters
  const handleFilterChange = (filterName, value) => {
    //Update the selected filters with the new values
    setSelectedFilters((prevFilters) => ({
      ...prevFilters, //((...)=> is a spread operator)
      [filterName]: value,
    }));
  };
  return (
    <>
      {/* Click event to open the modal */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Filter;
