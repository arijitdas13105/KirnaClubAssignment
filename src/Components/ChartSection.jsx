import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ChartSection() {
  const data = useSelector((state) => state.graph.graphData);

  const tooltipFormatter = (value, name) => {
    if (name === "durationHours") {
      return [`${value} hours`, "Duration"];
    }
    return value;
  };

  const formattedData = data.map((contest) => ({
    ...contest,
    durationHours: contest.durationSeconds / 3600,
  }));

  const getPhaseColor = (phase) => {
    switch (phase) {
      case "FINISHED":
        return "#4caf50";
      case "CODING":
        return "#2196f3";
      case "BEFORE":
        return "#ff9800";
      default:
        return "#808080";
    }
  };
  return (
    <ResponsiveContainer>
      <BarChart
        data={formattedData}
        margin={{
          top: 5,
          right: 50,
          left: 2,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip formatter={tooltipFormatter} />
        <Legend />
        <Bar dataKey="durationHours" name="Duration (Hours)">
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getPhaseColor(entry.phase)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
