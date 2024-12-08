import React from 'react';
import ReactECharts from 'echarts-for-react';
import { color } from 'echarts';
import { MyContext } from "../MyContext";
import  { useContext } from "react";

const Chart = () => {
  const { dark } = useContext(MyContext);
  const options = {
    
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: ${c} ({d}%)',
    },
    legend: {
      orient: 'verticle', // Arrange legend items in a row
      bottom: '-3px',        // Position legend below the pie chart
      left: 'center', 
      textStyle: {
        color: dark ? '#ffffff' : 'grey',    // Set the text color to red
      },
      data: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: ['50%', '70%'], // Inner and outer radius for donut
        center: ['50%', '30%'], // Center the pie chart vertically and horizontally
        avoidLabelOverlap: false,
        label: {
          show: false, // Disable labels on the pie slices
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16px',
            fontWeight: 'bold',
           
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 300.56, name: 'Direct', itemStyle: { color: '#000000' } },
          { value: 135.18, name: 'Affiliate', itemStyle: { color: '#8BC34A' } },
          { value: 154.02, name: 'Sponsored', itemStyle: { color: '#03A9F4' } },
          { value: 48.96, name: 'E-mail', itemStyle: { color: '#B3E5FC' } },
        ],
      },
    ],
  };

  return <ReactECharts option={options} style={{ height:"100%", width: '40%' }} />;
};

export default Chart;
