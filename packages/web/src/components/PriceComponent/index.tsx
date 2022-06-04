import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './style.css'

export default function PriceComponent(prise: any) {
  // const price = {
  //   district: {
  //     name: '海沧',
  //     value: [3.13, 3.07, 3.07, 3.05, 3.07, 3.04],
  //   },
  //   avenue: {
  //     name: '海沧区政府',
  //     value: [3.1, 3.08, 3.1, 3.12, 3.09, 3.1],
  //   },
  //   community: {
  //     name: '兴港花园三期',
  //     value: [3.09, 3.08, 3.08, 3.11, 3.11, 3.11],
  //   },
  //   date: ['12月', '01月', '02月', '03月', '04月', '05月'],
  // }
  // 折线图配置对象
  const price = prise.price
  console.log(price)
  if (Object.keys(price).length > 1) {
    const option = {
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value: number) => value + '万元/平',
        backgroundColor: 'rgba(0, 0, 0,0.5)',
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
      },
      legend: {},
      xAxis: {
        type: 'category',
        data: price.date,
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: 'value',
        name: '万元/平',
        min: function (value: any) {
          return value.min - (value.max - value.min) / 5
        },
        axisLabel: {
          formatter: function (value: number) {
            return value.toFixed(2)
          },
        },
      },
      series: [
        {
          name: price.community.name,
          type: 'line',
          data: price.community.value,
          symbolSize: 8,
          itemStyle: {
            color: 'rgba(255, 0, 0, 0.7)',
          },
        },
        {
          name: price.avenue.name,
          type: 'line',
          data: price.avenue.value,
          symbolSize: 8,
          itemStyle: {
            color: 'rgba(0, 0, 255, 0.7)',
          },
        },
        {
          name: price.district.name,
          type: 'line',
          data: price.district.value,
          symbolSize: 8,
          itemStyle: {
            color: 'rgba(255, 165, 0, 0.7)',
          },
        },
      ],
    }
    return (
      <div className="price-component">
        <h2>价格走势</h2>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    )
  } else {
    return <h1>价格组件</h1>
  }
}
