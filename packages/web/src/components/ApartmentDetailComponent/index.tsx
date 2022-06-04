import { FloatingPanel, List, NavBar, Toast, Space, Card, ProgressBar, Button } from 'antd-mobile'
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import './iconfont/iconfont.css'
import { useNavigate } from 'react-router-dom'

const data = ['区域描述', '地块价值', '发展前景', '卖点概述']

// 小区介绍详情页导航栏
const ApartmentDetailNav = () => {
  const navigate = useNavigate()
  const back = () => navigate('/MyRoom/RoomDetailPage')
  // Toast.show({
  //   content: '点击了返回区域',
  //   duration: 1000,
  // })
  const share = () =>
    Toast.show({
      content: '点击了分享按钮',
      duration: 1000,
    })
  const right = (
    <div onClick={share}>
      <i style={{ fontSize: '0.5rem' }} className="iconfont icon-fenxiang"></i>
    </div>
  )
  return (
    <NavBar
      right={right}
      onBack={back}
      style={{ '--height': '1rem', fontSize: '0.5rem', alignItems: 'center', display: 'flex' }}
    >
      <div style={{ fontSize: '0.5rem' }}>小区详情</div>
    </NavBar>
  )
}

// 小区介绍头部信息部分
const ApartmentDetailHeader = () => {
  const [price, setPrice] = useState(120065)
  const [headerTitle, setHeaderTitle] = useState('新景家园(东区)')
  const [increment, setIncrement] = useState(1.5)
  const [position, setPosition] = useState(['东城', '崇文门', '西花市大街'])

  const follow = () => {
    Toast.show({
      content: '点击了关注按钮',
      duration: 1000,
    })
  }
  return (
    <div className={styles.ApartmentDetailHeader}>
      <h2 className={styles.postFix}>{headerTitle}</h2>
      <p>
        <b style={{ color: '#f7631d', marginRight: '0.1rem' }}>{price}元/平</b>环比上月
        {increment >= 0 ? `涨${increment}%` : `跌${-increment}%`}
      </p>
      <p>
        {position.map((item, index) => {
          return (
            <span key={index} style={{ marginRight: '0.1rem' }}>
              {item}
            </span>
          )
        })}
      </p>
      <Button onClick={follow} className={styles.ApartmentDetailHeaderButton}>
        关注
      </Button>
    </div>
  )
}

// 小区介绍评价卡片
const ApartmentDetailCard = () => {
  const [evaluate, setEvaluate] = useState(8.5)
  const [transcend, setTranscend] = useState(94)
  const [price1, setPrice1] = useState(8.0)
  const [price2, setPrice2] = useState(8.2)
  const [price3, setPrice3] = useState(9.0)
  const [price4, setPrice4] = useState(8.6)

  return (
    <Card
      className={styles.ApartmentDetailCard}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className={styles.ApartmentDetailCardLeft}>
        <div style={{ fontSize: '1rem', fontWeight: 700 }}>{evaluate}</div>
        <div style={{ color: '#a2a2a2' }}>超过{transcend}%小区</div>
      </div>
      <div className={styles.ApartmentDetailCardRight}>
        <div>
          <span>区域价值</span>
          <ProgressBar
            className={styles.ProgressBar}
            percent={price1 * 10}
            style={{
              '--fill-color': '#f34e00',
              '--track-color': '#f4e9e0',
            }}
          />
          <span>{price1.toFixed(1)}</span>
        </div>
        <div>
          <span>产品价值</span>
          <ProgressBar
            className={styles.ProgressBar}
            percent={price2 * 10}
            style={{
              '--fill-color': '#f34e00',
              '--track-color': '#f4e9e0',
            }}
          />
          <span>{price2.toFixed(1)}</span>
        </div>
        <div>
          <span>配套价值</span>
          <ProgressBar
            className={styles.ProgressBar}
            percent={price3 * 10}
            style={{
              '--fill-color': '#f34e00',
              '--track-color': '#f4e9e0',
            }}
          />
          <span>{price3.toFixed(1)}</span>
        </div>
        <div>
          <span>交易价格</span>
          <ProgressBar
            className={styles.ProgressBar}
            percent={price4 * 10}
            style={{
              '--fill-color': '#f34e00',
              '--track-color': '#f4e9e0',
            }}
          />
          <span>{price4.toFixed(1)}</span>
        </div>
      </div>
    </Card>
  )
}

// 小区介绍注脚
const ApartmentDetailFooter = () => {
  const [footer, setFooter] = useState(
    '小区分是基于巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉',
  )
  useEffect(() => {
    // 在这里请求信息，一般只需要请求一次信息
  }, [])
  return (
    <div className={styles.ApartmentDetailFooter}>
      <p>{footer}</p>
    </div>
  )
}
// 小区介绍详情页框架
const ApartmentDetailInformation = (props: any) => {
  const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]
  const shareTo = () => {
    Toast.show({
      content: '点击了分享按钮',
      duration: 1000,
    })
  }
  const consultTo = () => {
    Toast.show({
      content: '点击了咨询专家按钮',
      duration: 1000,
    })
  }
  return (
    <>
      <FloatingPanel anchors={anchors}>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>
              <GetInformation
                title={item}
                apartmentId={props.apartmentId}
                index={index}
              ></GetInformation>
            </List.Item>
          ))}
        </List>
        <div className={styles.ApartmentDetailInformationButtons}>
          <Button onClick={shareTo}>分享给家人</Button>
          <Button onClick={consultTo}>咨询小区专家</Button>
        </div>
      </FloatingPanel>
    </>
  )
}

// 小区介绍信息页，采用了浮动窗口设计
// @param title 标题
// @param apartmentId 小区id
// @param index 标题对应的下标
const GetInformation = (props: any) => {
  const [information, setInformation] = useState(['测试消息1', '测试消息2'])
  useEffect(() => {
    // 使用props.apartmentId和props.index向后端发送请求请求对应数据
    // 注意，此处请求回的information应该是数组格式数据，每个元素就是一段
  })
  return (
    <div>
      <h3 className={styles.prefix}>{props.title}</h3>
      <div>
        {information.map((item, index) => {
          return (
            <p style={{ fontSize: '0.1rem' }} key={index}>
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

// 整体组件
const ApartmentDetailComponent = () => {
  return (
    <div>
      <ApartmentDetailNav />
      <ApartmentDetailHeader />
      <ApartmentDetailCard />
      <ApartmentDetailFooter />
      <ApartmentDetailInformation />
    </div>
  )
}

export default ApartmentDetailComponent
