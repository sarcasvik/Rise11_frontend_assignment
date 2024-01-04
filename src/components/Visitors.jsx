import React from 'react'
import { Chart } from "react-google-charts";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

function Visitors() {
    const data = [
        ["DAY", "Visitors"],
        ["MON", 70],
        ["TUE", 50],
        ["WED", 50],
        ["THU", 20],
        ["FRI", 20],
        ["SAT", 10],
        ["SUN", 50],
      ];

  return (
    <Card className="max-w-full my-4">
      <Title>Visitors</Title>
      <Chart 
      chartType="ScatterChart"
      width="100%"
      height="400px"
      data={data}
      options={{ legend: { position: 'none' }, backgroundColor:"red-400"}}
    />
    </Card>
    
  )
}

export default Visitors







