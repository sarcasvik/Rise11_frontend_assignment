import React, { useState } from "react";
import {
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Divider,
  Text,
  Title,
  Table,
  TableRow,
  TableBody,
  TableCell,
} from "@tremor/react";
import {
  ChartPieIcon,
} from "@heroicons/react/outline";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const sales = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return 3500
};

const SalesItem = () => {
  return (
    <Card className="max-w-full mx-auto">
      <Flex className="space-x-8 flex-col ">
        <Title>Overview</Title>
        <TabGroup>
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Sales</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Divider />
        <DonutChart
          data={sales}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
          className="mt-6"
        />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell><Text>Current Week</Text></TableCell>
              <TableCell><Text>2000</Text></TableCell>
              <TableCell><Text><FaArrowTrendUp />0.3%</Text></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Text>Last Week</Text></TableCell>
              <TableCell><Text>1500</Text></TableCell>
              <TableCell><Text><FaArrowTrendDown/>0.3%</Text></TableCell>
            </TableRow>
          </TableBody>
        </Table>

    </Card>
  );
};

export default SalesItem;
