import React from "react";
import SalesItem from "./SalesItem";
import Visitors from "./Visitors";
import StudentQueries from "./StudentQueries"
import CardItem from "./CardItem";

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <CardItem value="Engaged Audience" data="750" p="15%"/>
      <Visitors/>
     <StudentQueries/>
    </div>
  );
};

export default RightColumn;
