import React from "react";

export default function FilterBar({ handleFilter }) {
  const handleInputChange = (event) => handleFilter(event.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="filter..."
        name="filter"
        onChange={handleInputChange}
      />
    </div>
  );
}
