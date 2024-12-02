import React from "react";
import ReactECharts from "echarts-for-react";

const SnakeLineChart = () => {
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
        itemStyle: {
          color: '#cfdfea',
        },
        lineStyle: {
          width: 2,
        },
        symbol: 'circle',
        symbolSize: 1,
      },
      {
        name: 'Line 2',
        type: 'line',
        smooth: true,
        data: [5, 15, 30, 32, 20, 5],
        itemStyle: {
          color: '#000000',
        },
        lineStyle: {
          width: 2,
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
