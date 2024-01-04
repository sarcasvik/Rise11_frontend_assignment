import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    "Course Visit": 2890,
    "Course Sales": 2338,
  },
  {
    date: "Feb 22",
    "Course Visit": 2756,
    "Course Sales": 2103,
  },
  {
    date: "Mar 22",
    "Course Visit": 3322,
    "Course Sales": 2194,
  },
  {
    date: "Apr 22",
    "Course Visit": 3470,
    "Course Sales": 2108,
  },
  {
    date: "May 22",
    "Course Visit": 3475,
    "Course Sales": 1812,
  },
  {
    date: "Jun 22",
    "Course Visit": 3129,
    "Course Sales": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartComponent = () => {
  return (
    <Card className="mt-4">
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Course Visit", "Course Sales"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;
