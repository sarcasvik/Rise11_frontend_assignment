import React from 'react';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from "@tremor/react";

function WeeklySalesStats() {
  const dummyData = [
    { name: 'Full Stack', category: 'Development', sale: 120 },
    { name: 'UI/UX', category: 'Design', sale: 80 },
    { name: 'B2B Strategies', category: 'Management', sale: 150 },
  ];

  return (
    <Card>
      <Title>Weekly Sales Statistics</Title>
      <div className="flex flex-col">
        {/* Your other content can go here */}
        <div className="flex-grow">
          <img className="py-2" src="https://chartexpo.com/Content/Images/charts/Clustered-Bar-Chart.jpg" alt="" />
        </div>
        <Table>
          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.category}</Text>
                </TableCell>
                <TableCell>
                  <Text className='rounded py-2 text-center bg-green-300'>${item.sale}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

export default WeeklySalesStats;
