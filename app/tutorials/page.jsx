import Beginer from "@/components/Beginer";
import Intermediate from "@/components/Intermediate";
import Professional from "@/components/Professional";
import React from "react";

const tutorials = () => {
  return (
    <div className=" py-10">
      <h1 className="container mx-auto font-bold mb-3 text-4xl">
        Watch Tutorials According to your level
      </h1>
      <hr />
      <div className="space-y-5 mt-5">
        <Beginer />
        <Intermediate />
        <Professional />

      </div>
    </div>
  );
};

export default tutorials;
