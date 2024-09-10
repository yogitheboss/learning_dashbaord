"use client";

import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

// Sample data for the bar chart representing student enrollments by month
const enrollmentData = [
  { month: "January", enrolled: 35 },
  { month: "February", enrolled: 50 },
  { month: "March", enrolled: 40 },
  { month: "April", enrolled: 65 },
  { month: "May", enrolled: 55 },
  { month: "June", enrolled: 70 },
];

// Configuration for the chart colors
const chartConfig = {
  enrolled: {
    label: "Enrolled Students",
    color: "#34d399", // Green color for enrollments
  },
};

export function Component() {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg"> {/* Smaller width container */}
      <h2 className="text-xl font-bold mb-4 text-center">Student Enrollments</h2> {/* Title for the chart */}
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={enrollmentData}>
          <Bar dataKey="enrolled" fill={chartConfig.enrolled.color} radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
