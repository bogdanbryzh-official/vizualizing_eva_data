import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";

const TimeSeriesChart = ({ chartData }) => (
  <ResponsiveContainer width="95%" height={500}>
    <ScatterChart>
      <XAxis
        dataKey="time"
        domain={["auto", "auto"]}
        name="Time"
        tickFormatter={(unixTime) => moment(unixTime).format("HH:mm Do")}
        type="number"
      />
      <YAxis dataKey="value" name="Value" />

      <Scatter
        data={chartData}
        fill="#00000000"
        line={{ stroke: "#333" }}
        lineJointType="monotoneX"
        lineType="joint"
        name="Values"
      />
    </ScatterChart>
  </ResponsiveContainer>
);

TimeSeriesChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default TimeSeriesChart;
