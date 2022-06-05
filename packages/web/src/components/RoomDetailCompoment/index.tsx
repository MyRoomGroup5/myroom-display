import React from "react";
import { Tag, Space, Divider, List, Toast } from 'antd-mobile';
import { InformationCircleOutline, UserContactOutline, FileOutline } from 'antd-mobile-icons'
import axios from "axios";
import res from "antd-mobile-icons/es/AaOutline";

const roomDetail = {
    "data": {
      "tags": [
        "中楼层",
        "二手房",
        "普通住宅"
      ],
      "basic_message": {
        "price": 160,
        "name": "富力城小区",
        "room_type": "2室2厅",
        "ares": 86.97
      },
      "detail_message": [
        {
          "title": "挂牌",
          "value": "2018-11-21"
        },
        {
          "title": "加热",
          "value": "集中供暖"
        },
        {
          "title": "楼层",
          "value": "中"
        },
        {
          "title": "朝向",
          "value": "北"
        },
        {
          "title": "年代",
          "value": "2010"
        },
        {
          "title": "房源",
          "value": "二手房"
        },
        {
          "title": "更新",
          "value": "2021-07-23"
        },
        {
          "title": "类型",
          "value": "普通住宅"
        },
        {
          "title": "电梯",
          "value": "有"
        }
      ]
    }
  }

  const price = Math.floor(roomDetail.data.basic_message.price * 10000 / roomDetail.data.basic_message.ares)

  const tags = roomDetail.data.tags.map((item, index) => (
      <Tag color='orange' style={{ fontSize: '0.3rem' }} key={index}>{item}</Tag>
  ))

// 房源详情页tag
const RoomDetailTag = () => {
    return (
        <div >
            <Space>
                {tags}
            </Space>
            <span style={{ paddingLeft: '3rem' }}>
                <InformationCircleOutline color='var(--adm-color-weak)' fontSize={16} />
                <span style={{ fontSize: '0.3rem' }}>反馈</span>
            </span>
        </div>
    )
}

// 房源详情页标题
const RoomTitle = () => {
    return (
        <div>
            <h1>{roomDetail.data.basic_message.name}</h1>
            <Space>
                <UserContactOutline fontSize={24} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>房源发布人</span>
                <FileOutline fontSize={24} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>房源发布机构</span>
                <FileOutline fontSize={24} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>官方资质</span>
            </Space>
        </div>
    )
}

// 获取房屋具体信息
const roomDetailList = roomDetail.data.detail_message.map((item, index) => (
    <List.Item key={index} style={{float: 'left', fontSize: '0.45rem', width: '4.6rem'}}><span style={{paddingRight: '0.4rem', color: 'gray'}}>{item.title}</span><span>{item.value}</span></List.Item>
))



// 房屋信息面包屑
const RoomDeatil = () => {
    const handleClick = () => {
        Toast.show({
            content: '点击了小区'
        })
    }
    return (
        <div>
            <div style={{ marginTop: '0.3rem', overflow: 'hidden', display: 'flex'}}>
                <List.Item style={{float: 'left', width: '2rem', paddingRight: '1rem'}}>
                    <span style={{paddingRight: '0.4rem', fontWeight: '700', fontSize: '0.5rem', color: 'orange', }}>{roomDetail.data.basic_message.price}万</span>
                    <span style={{fontSize: '0.4rem', color: 'gray'}}>售价</span>
                </List.Item>
                <List.Item style={{float: 'left', color: 'orange', width: '2rem', paddingRight: '1.5rem',}}>
                    <span style={{paddingRight: '0.3rem', fontWeight: '700', fontSize: '0.5rem', color: 'orange'}}>{roomDetail.data.basic_message.room_type}</span>
                    <span style={{fontSize: '0.4rem', color: 'gray'}}>房型</span>
                </List.Item>
                <List.Item style={{float: 'left', color: 'orange', width: '2.5rem'}}>
                    <span style={{paddingRight: '0.4rem', fontWeight: '700', fontSize: '0.5rem', color: 'orange'}}>{roomDetail.data.basic_message.ares}平</span>
                    <span style={{fontSize: '0.4rem', color: 'gray'}}>建筑面积</span>
                </List.Item>
            </div>
            <div style={{overflow: 'hidden'}}>
                <List.Item style={{float: 'left', fontSize: '0.45rem', width: '4.6rem'}}><span style={{paddingRight: '0.4rem', color: 'gray'}}>售价</span><span>{price}万/平</span></List.Item>
                {roomDetailList}
            </div>
             <List.Item onClick={handleClick} style={{fontSize: '0.45rem'}}><span style={{paddingRight: '0.4rem', color: 'gray'}}>小区</span><span>{roomDetail.data.basic_message.name}</span></List.Item>
        </div>
    )
}

const RoomDetailComponent = () => {
    return (
        <div style={{ padding: '0.4rem' }}>
            <RoomDetailTag />
            <RoomTitle />
            <RoomDeatil />
        </div>
    )
}
export default RoomDetailComponent