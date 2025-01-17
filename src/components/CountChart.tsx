"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
const data = [
  {
    name: "Total",
    count: 100,
    fill: "#F7F8FA",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#83a6ed",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#8dd1e1",
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg  font-semibold"> Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
      </div>

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex items-center justify-center gap-16">
        <div className="flex flex-col">
          <div className="rounded-full  bg-lamaSky w-5 h-5"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col">
          <div className="rounded-full  bg-lamaYellow w-5 h-5"></div>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girl (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
