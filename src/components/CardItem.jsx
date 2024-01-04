import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = (e) => {
  return (
    <Card className=" w-xs " decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>{e.value}</Text>
        <BadgeDelta deltaType="moderateIncrease">{e.p}</BadgeDelta>
      </Flex>
      <Metric>{e.data}</Metric>
    </Card>
  );
};

export default CardItem;
