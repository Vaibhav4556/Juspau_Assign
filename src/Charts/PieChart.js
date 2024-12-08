import React from 'react';
import ReactECharts from 'echarts-for-react';
import { MyContext } from "../MyContext";
import { useContext } from "react";

const Chart = () => {
  const { dark } = useContext(MyContext);

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: ${c} ({d}%)',
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: ['43%', '70%'], 
        center: ['50%', '50%'], 
        avoidLabelOverlap: false,
        label: {
          show: false, 
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
          { value: 300.56, name: 'Direct', itemStyle: { color:dark?"#C6C7F8": '#000000' } },
          { value: 135.18, name: 'Affiliate', itemStyle: { color: '#8BC34A' } },
          { value: 154.02, name: 'Sponsored', itemStyle: { color: '#03A9F4' } },
          { value: 48.96, name: 'E-mail', itemStyle: { color: '#B3E5FC' } },
        ],
      },
    ],
  };

  return (
    
      <ReactECharts option={options} style={{ height: '90%', width: '100%' }} />
   
  );
};

export default Chart;
