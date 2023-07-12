import React from "react";
import { CardNorthblue } from "./CardNorthblue";
import { CardPatriot } from "./CardPatriot";
import { CardSorts } from "./CardSorts";

export const FirstCardBlock = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-6">
      <CardNorthblue />
      <CardPatriot />
      <CardSorts />
    </div>
  );
};
