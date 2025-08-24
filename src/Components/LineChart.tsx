import * as React from "react";
import { LineChart } from "@mui/x-charts";

export default function BasicLineChart() {
  return (
    <LineChart
      width={700}
      height={400}
      series={[
        { 
          type: 'line', 
          data: [0, 500, 200, 600, 300, 830, 900, 850, 800, 850, 1100, 1200],
          color: "#00308F",
          label: "Profit"
        },
        { 
          type: 'line', 
          data: [600, 300, 700, 950, 400, 200, 600, 300, 700, 980, 400, 200],
          color: "orange",
          label: "Cost"
        }
      ]}
      xAxis={[
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // X-axis labels as integers
          label: "Months(2023)",
          tickNumber: 6, // Ensures we only show integer ticks
        }
      ]}
      yAxis={[
        {
          valueFormatter: (value) => `$${value}` // Format Y-axis labels with dollar sign
        }
      ]}
    />
  );
}
