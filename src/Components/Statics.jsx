
import React from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area } from "recharts";
const areaChartData = [
  {
    subject: "assingment1",
    id: 1,
    marks: 60
  },
  {
    subject: "assingment2",
    id: 2,
    marks: 54
  },
  {
    subject: "assingment3",
    id: 3,
    marks: 59
  },
  {
    subject: "assingment4",
    id: 4,
    marks: 60

  },
  {
    subject: "assingment5",
    id: 5,
    marks: 60
  },
  {
    subject: "assingment6",
    id: 6,
    marks: 60
  },
  {
    subject: "assingment7",
    id: 7,
    marks: 60
  }
];
const Statics = () => {
  return (

    <React.Fragment>
      <div className="w-full lg:w-[80%] mx-auto mt-14">
        <h3 style={{ color: "blue" }}>Course Marks chart</h3>
        <ResponsiveContainer width="100%" aspect={2} >
          <AreaChart data={areaChartData} lg:margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip contentStyle={{ backgroundColor: "lightgray" }} />
            <Area dataKey="subject" stroke="red" fill="red" activeDot={{ r: 10 }} type="monotone" />
            <Area dataKey="marks" stroke="green" fill="green" activeDot={{ r: 10 }} type="monotone" />
            <XAxis dataKey="id" interval="preserveStartEnd" tickFormatter={(value) => "Assingment" + " " + value} />
            <YAxis tickFormatter={(value) => "Marks" + value} />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>

  );

};

export default Statics;