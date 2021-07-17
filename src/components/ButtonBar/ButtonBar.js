import React from "react";
import Button from "../Button/Button";

export default function ButtonBar({
  handlePrevious,
  handleNext,
  status,
  page,
}) {
  return (
    <div>
      <Button
        label="Previous"
        handleClick={handlePrevious}
        status={status.previous}
        page={page}
      />
      <p>{page + 1}</p>
      <Button label="Next" handleClick={handleNext} status={status.next} />
    </div>
  );
}
