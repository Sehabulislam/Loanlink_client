import React from "react";
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center min-h-[80vh] items-center">
      <BounceLoader
        color="#f60909"
        height={45}
        margin={3}
        radius={2}
        width={5}
      />
    </div>
  );
};

export default Spinner;
