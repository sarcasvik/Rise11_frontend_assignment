import React from 'react'
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
  Badge,
} from "@tremor/react";
import { RxAvatar } from "react-icons/rx";
function CourseStat() {


const dummyData = [
  { name: 'Full-Stack', category: 'Development', sale: 120, rating: 4.5, earning: '$10,000', visitor: 500 },
  { name: 'UI/UX', category: 'Design', sale: 80, rating: 4.2, earning: '$8,000', visitor: 400 },
  { name: 'Android Development', category: 'Development', sale: 100, rating: 4.7, earning: '$12,000', visitor: 600 },
  { name: 'B2B strategies', category: 'Management', sale: 150, rating: 4.0, earning: '$15,000', visitor: 700 },
  { name: 'Data Analytics', category: 'Analyst', sale: 90, rating: 4.8, earning: '$9,000', visitor: 450 },
  { name: 'Online Marketing Strategies', category: 'Marketing', sale: 110, rating: 4.3, earning: '$11,000', visitor: 550 },
];
return (
  <Card>
      <Title>Course Statistics</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Sale</TableHeaderCell>
            <TableHeaderCell>Rating</TableHeaderCell>
            <TableHeaderCell>Earning</TableHeaderCell>
            <TableHeaderCell>Visitor</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((item) => (
            <TableRow key={item.name}>
              <TableCell>
                <Text><RxAvatar size={20} />{' '}{item.name}</Text></TableCell>
              <TableCell>
                <Text>{item.category}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.sale}</Text>
              </TableCell>
              <TableCell>
               <Text>
               <span role="img" aria-label="star">
                ⭐
              </span>{' '}{item.rating}</Text>
              </TableCell>
              <TableCell>
               <Text>{item.earning}</Text>
              </TableCell>
              <TableCell>
               <Text >{item.visitor}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
);
};

export default CourseStat