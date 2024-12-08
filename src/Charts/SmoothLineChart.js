import React from "react";
import ReactECharts from "echarts-for-react";
import { MyContext } from "../MyContext";
import  { useContext } from "react";
const SnakeLineChart = (theme) => {
  const { dark } = useContext(MyContext);
  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Line 1',
        type: 'line',
        smooth: true,
        data: [25, 30, 5, 10, 15, 35],
        itemStyle: !dark
        ? {
            color: '#cfdfea',
          }
        : {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#a9c4b4' }, // Start color
                { offset: 1, color: '#a8e3c0' }, // End color
              ],
              global: false,
            },
          },
      
        lineStyle: {
          width: 4,
        },
        symbol: 'circle',
        symbolSize: 1,
      },
      {
        name: 'Line 2',
        type: 'line',
        smooth: true,
        data: [5, 15, 30, 32, 20, 5],
        itemStyle: !dark
        ? {
            color: '#000000',
          }
        : {
            color: {
              type: 'linear',
              x: 0,
              y: 0, // Adjusted for a valid linear gradient direction
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#E5ECF6' }, // Start color
                { offset: 1, color: '#8A8CD9' }, // End color
              ],
              global: false,
            },
          },
      

        lineStyle: {
          width: 4,
        },
        symbol: 'circle',
        symbolSize: 1,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top: '5%',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '254px', 
        overflow: 'hidden', 
        
      }}
    >
      <div style={{ width: '100%', height: '90%' }}>
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default SnakeLineChart;
