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
    { name: 'Android Studio', category: 'Development', sale: "View" ,status:"Decline"},
    { name: 'B2B Mng ', category: 'Management', sale: "Approval" ,status:"Decline"},
    { name: 'Full Stack', category: 'Development', sale: "Approval",status:"Decline" },
    { name: 'Online Mkt ', category: 'Marketing', sale: "Approval",status:"Decline" },
  ];

  return (
    <Card>
      <Title>Student Queries</Title>
        <Table>
          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.category}</Text>
                </TableCell>
                <TableCell>
                <Text className={`rounded text-center py-2 ${item.sale === "View" ? 'bg-purple-400' : 'bg-green-300'}`}>{item.sale}</Text>
                </TableCell>
                <TableCell>
                  <Text className='rounded text-center py-2  bg-red-400'>{item.status}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </Card>
  );
}

export default WeeklySalesStats;
