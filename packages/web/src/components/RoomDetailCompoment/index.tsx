import React from "react";
import { Tag, Space, Divider, List, Toast } from 'antd-mobile';
import { InformationCircleOutline, UserContactOutline, FileOutline } from 'antd-mobile-icons'

// 房源详情页tag
const RoomDetailTag = () => {
    return (
        <div >
            <Space>
                <Tag color='#2db7f5' style={{ fontSize: '0.3rem' }}>降7.0万</Tag>
                <Tag color='default' style={{ fontSize: '0.3rem' }}>唯一住房</Tag>
                <Tag style={{ fontSize: '0.3rem' }}>降7.0万</Tag>
            </Space>
            <span style={{ paddingLeft: '4rem' }}>
                <InformationCircleOutline color='var(--adm-color-weak)' fontSize={36} />
                <span style={{ fontSize: '0.3rem' }}>反馈</span>
            </span>
        </div>
    )
}

// 房源详情页标题
const RoomTitle = () => {
    return (
        <div>
            <h1>2室2厅 望京西园（一区）</h1>
            <Space>
                <UserContactOutline fontSize={36} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>房源发布人</span>
                <FileOutline fontSize={36} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>房源发布机构</span>
                <FileOutline fontSize={36} /><span style={{ fontSize: '0.3rem', fontWeight: '700' }}>官方资质</span>
            </Space>
        </div>
    )
}

// 房屋信息面包屑
const RoomDeatil = () => {
    const handleClick = () => {
        Toast.show({
            content: '点击了小区'
        })
    }
    return (
        <div style={{ marginTop: '0.3rem' }}>
            <span style={{ fontSize: '0.5rem', fontWeight: '700', paddingRight: ' 1.5rem' }}>
                <span>598万</span><Divider direction='vertical' />
            </span>
            <span style={{ fontSize: '0.5rem', fontWeight: '700', paddingRight: ' 1.5rem' }}>
                <span>2室2厅</span><Divider direction='vertical' />
            </span>
            <span style={{ fontSize: '0.5rem', fontWeight: '700' }}>
                <span>96.74平</span>
            </span>
            <div style={{ paddingTop: '0.3rem' }}>
                <div>
                    <span style={{ paddingRight: '1.5rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>单价</span><span>61815元/平</span>
                    </span>
                    <span style={{ paddingRight: '1.5rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>挂牌</span><span>2022-3-10</span>
                    </span>
                </div>
                <div style={{paddingTop: '0.1rem'}}>
                    <span style={{ paddingRight: '3.1rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>朝向</span><span>南</span>
                    </span>
                    <span style={{ paddingRight: '1.5rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>装修</span><span>简装修</span>
                    </span>
                </div>
                <div style={{paddingTop: '0.1rem'}}>
                    <span style={{ paddingRight: '3.1rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>电梯</span><span>有</span>
                    </span>
                    <span style={{ paddingRight: '1rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>楼型</span><span>塔楼0</span>
                    </span>
                </div>
                <div style={{paddingTop: '0.1rem'}}>
                    <span style={{ paddingRight: '2.7rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>类型</span><span>住宅</span>
                    </span>
                    <span style={{ paddingRight: '1rem', fontSize: '0.4rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>权属</span><span>商品房</span>
                    </span>
                </div>
                <div style={{paddingTop: '0.1rem'}}>
                    <span style={{ paddingRight: '2.7rem', fontSize: '0.39rem' }}>
                        <span style={{ paddingRight: '.3rem' }}>年代</span><span>1997年</span>
                    </span>
                </div>
                <List.Item prefix={<List.Item style={{paddingRight: '.3rem'}}>小区</List.Item > } onClick={handleClick} style={{fontSize: '0.38rem'}}>望京小区 （朝阳-望京）</List.Item>
            </div>
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