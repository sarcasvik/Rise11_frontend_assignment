import React from "react";
import CardItem from "./CardItem";
import AreaChartComponent from "./AreaChartComponent";
import SalesItem from "./SalesItem";
import WeeklySalesStats from "./WeeklySalesStats";
import Sidebar from "./Sidebar";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <CardItem value="Impressions" data="800" p="10%"/>
        <CardItem value="Total Audience" data="800" p="12%"/>
        <CardItem value="Engagements" data="800" p="18%"/>
        
      </div>
      <div className="flex-auto w-full">
        <AreaChartComponent />
      </div>
      <div style={{marginTop:20}} className="flex flex-col lg:flex-row gap-3 w-full">
        <SalesItem />
        <WeeklySalesStats/>
      </div>
    </div>
  );
};

export default LeftColumn;
