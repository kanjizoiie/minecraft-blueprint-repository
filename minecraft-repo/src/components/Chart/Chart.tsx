import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface TestChartProps {
  data: any;
}

function TestChart({ data }: TestChartProps) {
  return (
    <ResponsiveContainer width={300} height={300}>
      <LineChart width={400} height={400} data={data}>

        <Line type="monotone" dataKey="uv" stroke="#8884d8" />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis dataKey="uv" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export { TestChart };
