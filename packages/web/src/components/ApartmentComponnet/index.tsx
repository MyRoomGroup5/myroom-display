import React, { useState, useEffect } from 'react'
import { Space, NoticeBar, Toast, Card, Tabs, Ellipsis } from 'antd-mobile'
import styles from './style.module.css'
import './iconfont/iconfont.css'
// 导航栏组件
const NavComponent = (props: any) => {
  const [title, setTitle] = useState('朝阳小区热榜')
  useEffect(() => {
    // 在此处发送导航栏请求数据
  }, [])
  console.log(title)
  const show = () => {
    Toast.show({
      content: '前往下一个区域',
      duration: 1000,
    })
  }
  return (
    <Space onClick={show} block direction="vertical">
      <NoticeBar
        className={styles['my-NoticeBar']}
        icon={<i className="iconfont icon-jiangbei" />}
        extra={
          <Space style={{ '--gap': '1rem' }}>
            <i className="iconfont icon-right-outlined"></i>
          </Space>
        }
        content={title}
        color="info"
      />
    </Space>
  )
}

// 第一张卡片
const CardOneComponent = (props: any) => {
  const [price, setprice] = useState(69808)
  const [rate, setrate] = useState(0.06)
  const [houseNum, sethouseNum] = useState(36)
  useEffect(() => {
    // 在此处通过props.apartmentId发送请求获取数据
  })
  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }
  const consult = () => {
    Toast.show('咨询经纪人')
  }
  return (
    <div>
      <Card
        title={<div style={{ fontSize: '0.5rem', fontWeight: 900 }}>卡片标题</div>}
        extra={
          <div style={{ color: '#c5c5c5', fontSize: '0.3rem' }}>
            <span>小区详情</span>
            <i className="iconfont icon-right-outlined"></i>
          </div>
        }
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '0.1rem' }}
      >
        <div className={styles.cardOneContent}>
          <div>
            <span>小区均价</span>
            {price}元/平
            <div
              className="iconfont icon-gushi"
              style={{ color: '#f85701', display: 'inline', marginLeft: '0.1rem' }}
            >
              环比上涨{rate}%
            </div>
          </div>
        </div>
        <div className={styles.cardOneContent}>
          <div>
            <span>学校情况</span>
            <span onClick={consult} style={{ color: '#c6bbae' }}>
              <i className="iconfont icon-message"></i>
              咨询经纪人
            </span>
          </div>
        </div>
        <div className={styles.cardOneContent}>
          <div>
            <span>在售房源</span>
            {houseNum}套
          </div>
        </div>
      </Card>
      <hr />
    </div>
  )
}

// interface CardTwoComponentProps{
//   // 此处写props必备参数
// }

// 第二张卡片
const CardTwoComponent = (props: any) => {
  const [introduction, setIntroduction] = useState(
    '小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情小区概况详情',
  )
  const [infrastructure, setInfrastructure] = useState('小区概况详情')
  const [architecturalQuality, setArchitecturalQuality] = useState('小区概况详情')
  const [lobbyBuilding, setLobbyBuilding] = useState('小区概况详情')
  useEffect(() => {
    // 在此时通过props.apartmentId发送请求获取数据
  })
  return (
    <Card
      headerStyle={{
        display: 'none',
        border: 'none',
        marginBottom: '-1rem',
      }}
      title={<div style={{ fontSize: '0.5rem', fontWeight: 900 }}>小区介绍</div>}
      style={{ borderRadius: '0.1rem' }}
    >
      <Tabs
        style={{
          '--title-font-size': '0.4rem',
          '--active-title-color': '#ea7e61',
          '--active-line-color': '#ea7e61',
          '--content-padding': '0.4rem',
          fontSize: '0.3rem',
          backgroundColor: '#f9f9f9',
        }}
        stretch={true}
        activeLineMode="fixed"
      >
        <Tabs.Tab title="小区概况" key="introduction">
          {introduction}
        </Tabs.Tab>
        <Tabs.Tab title="基础设施" key="infrastructure">
          {infrastructure}
        </Tabs.Tab>
        <Tabs.Tab title="建筑品质" key="architecturalQuality">
          {architecturalQuality}
        </Tabs.Tab>
        <Tabs.Tab title="大堂楼栋" key="lobbyBuilding">
          {lobbyBuilding}
        </Tabs.Tab>
      </Tabs>
    </Card>
  )
}

interface ApartmentComponentPros {
  apartmentId: string
}

const ApartmentComponent = (props: ApartmentComponentPros) => {
  return (
    <div>
      <NavComponent></NavComponent>
      <CardOneComponent apartmentId={props.apartmentId} />
      <CardTwoComponent apartmentId={props.apartmentId} />
    </div>
  )
}
export default ApartmentComponent
