import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart = () => {
  const options = {
    
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: ${c} ({d}%)',
    },
    legend: {
      orient: 'verticle', // Arrange legend items in a row
      bottom: '0',        // Position legend below the pie chart
      left: 'center',       // Center legend horizontally
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
            fontSize: '20',
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

  return <ReactECharts option={options} style={{ padding:"0",height:"80%", width: '90%' }} />;
};

export default Chart;
