import React from "react";
import { Pagination, TextField, Button } from "@shopify/polaris";

function PaginationComponent({
  totalContests,
  currentPage,
  itemsPerPage,
  tempItemsPerPage,
  onPageChange,
  onTempItemsPerPageChange,
  onSetItemsPerPage,
}) {
  const startContest = (currentPage - 1) * itemsPerPage + 1;
  const endContest = Math.min(currentPage * itemsPerPage, totalContests);

  const handleNext = () => {
    if (currentPage * itemsPerPage < totalContests) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleTempItemsPerPageChange = (value) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0) {
      onTempItemsPerPageChange(value);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <div className="flex items-center gap-3   justify-center">
      <div className="w-24">
      <TextField
          // label="Items per page"
          type="number"
          value={tempItemsPerPage}
          onChange={handleTempItemsPerPageChange}
          autoComplete="off"
        />
      </div>
      
        <Button onClick={onSetItemsPerPage}>Set</Button>
      </div>

      <div className="flex items-center gap-3">
        <Pagination
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentPage > 1}
          hasNext={currentPage * itemsPerPage < totalContests}
          label={`${startContest}-${endContest} of ${totalContests} contests`}
        />
      </div>
    </div>
  );
}

export default PaginationComponent;






// import React from "react";
// import { Pagination, TextField } from "@shopify/polaris";

// function PaginationComponent({
//   totalContests,
//   currentPage,
//   totalPages,
//   onPageChange,

//   itemsPerPage,
//   onItemsPerPageChange,

// }) {
//   // Calculate start and end contest numbers
//   const startContest = (currentPage - 1) * itemsPerPage + 1;
//   const endContest = Math.min(currentPage * itemsPerPage, totalContests);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };
//   const handleItemsPerPageChange = (value) => {
//     const num = Number(value);
//     if (!isNaN(num) && num > 0) {
//       onItemsPerPageChange(num); // Update items per page in parent component
//     }
//   };

//   return (
//     <div className="flex flex-row justify-center items-center gap-3">
//       <div className="flex items-center">
//         <TextField
//           label="Items per page"
//           type="number"
//           value={String(itemsPerPage)} // Make sure the input reflects the current value
//           onChange={handleItemsPerPageChange}
//           autoComplete="off"
//         />
//       </div>

//       <div className="flex items-center gap-3">
//         <Pagination
//           onPrevious={handlePrevious}
//           onNext={handleNext}
//           hasPrevious={currentPage > 1}
//           hasNext={currentPage < totalPages}
//           label={`${startContest}-${endContest} of ${totalContests} contests`}
//         />
//       </div>
//     </div>
//   );
// }

// export default PaginationComponent;




// import React, { useState } from "react";
// import {
//   BlockStack,
//   Button,
//   Card,
//   InlineGrid,
//   Text,
//   InlineStack,
//   Box,
//   Select,
//   Pagination,
//   TextField,
// } from "@shopify/polaris";
// function PaginationComponent({ totalContests }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

//   const totalPages = Math.ceil(totalContests / itemsPerPage);

//   const startContest = (currentPage - 1) * itemsPerPage + 1;
//   const endContest = Math.min(currentPage * itemsPerPage, totalContests);
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleItemsPerPageChange = (value) => {
//     const num = Number(value);
//     if (!isNaN(num) && num > 0) {
//       setItemsPerPage(num);
//       // setCurrentPage(1); // Reset to the first page when items per page changes
//     }
//   };


//   return (
//     <div className="flex flex-row justify-centre">
//       <div className="  flex flex-row items-center w-24 ">
//         <TextField
//           //  label="Price"
//           type="number"
//           value={String(itemsPerPage)}
//           onChange={handleItemsPerPageChange}
//           autoComplete="off"
//         />
//       </div>
//       <div className=" ">
//         <Pagination
//           onPrevious={handlePrevious}
//           onNext={handleNext}
//           hasPrevious={currentPage > 1}
//           hasNext={currentPage < totalPages}
//           label={`${startContest}-${endContest} of ${totalContests} contests`}
//         />
//       </div>
//     </div>
//   );
// }

// export default PaginationComponent;
