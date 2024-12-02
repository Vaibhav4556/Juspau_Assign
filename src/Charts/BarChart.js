import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun'],
    },
   
    yAxis: {
        axisLabel: {
          formatter: (value) => `${value}M`, 
        },
      },
    series: [
      {
        data: [10, 22, 28, 43, 49,35],
        type: 'bar',
        stack: 'x',
        barWidth: '40%',
        itemStyle: {
          color: '#a8c5da', // Set color for the first stack
          
        },
      },
      {
        data: [5, 4, 3, 5, 10,7],
        type: 'bar',
        stack: 'x',
        barWidth: '40%',
        itemStyle: {
          color: '#cfdfea', // Set color for the second stack
          borderRadius: [5, 5, 0, 0], // Top-left, top-right, bottom-right, bottom-left
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // Add pointer for better usability
        type: 'shadow',
      },
    },
  };

  return (
    <div style={{ width: '95%', height: '300px', maxHeight: '300px', margin: 'auto', padding: 0 }}>
    <ReactECharts
      option={option}
      style={{ height: '90%', width: '100%' }} 
    />
  </div>
  );
};

export default BarChart;
