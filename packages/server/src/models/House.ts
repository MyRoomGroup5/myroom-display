import sequelize from '../core/db'
import { DataTypes, Model } from 'sequelize'

class House extends Model {
  declare id: bigint
  declare listing_name: string
  declare first_upload_at: Date
  declare pricing: bigint | number
  declare squaremeter: number
  declare floor: number
  declare total_floor: number
  declare dict_house_id: bigint | number
  declare heating_type: number
  declare house_duration: number
  declare floor_level: number
  declare facing_type: number
  declare decoration_type: number
  declare building_type: number
  declare built_year: string
  declare city_name: string
  declare city_code: string
  declare neighborhood_name: string
  declare neighborhood_source_code: string
  declare floor_plan_room: number
  declare floor_plan_hall: number
  declare floor_plan_bath: number
  declare floor_plan_kitchen: number
  declare house_type: number
  declare layout_type: number
  declare last_publish_time: Date
  declare ownership: number
  declare property_management_type: number
  declare elevator: number
  declare property_certificate_period: number
}

House.init(
  {
    id: {
      type: DataTypes.BIGINT(),
      primaryKey: true,
      comment: '房源 id',
    },
    listing_name: {
      type: DataTypes.STRING(1024),
      comment: '房源 title',
    },
    first_upload_at: {
      type: DataTypes.DATE,
      comment: '房源上架时间',
    },
    pricing: {
      type: DataTypes.BIGINT,
      comment: '报价，单位分',
    },
    squaremeter: {
      type: DataTypes.INTEGER,
      comment: '建筑面积，单位平方米（需要除以 100）',
    },
    floor: {
      type: DataTypes.INTEGER,
      comment: '楼层',
    },
    total_floor: {
      type: DataTypes.INTEGER,
      comment: '总楼层数',
    },
    dict_house_id: {
      type: DataTypes.BIGINT,
      comment: '',
    },
    heating_type: {
      type: DataTypes.INTEGER,
      comment: '加热方式',
    },
    house_duration: {
      type: DataTypes.INTEGER,
      comment: '',
    },
    floor_level: {
      type: DataTypes.INTEGER,
      comment: '楼层位置：1: 高 2:中 3:低',
    },
    facing_type: {
      type: DataTypes.INTEGER,
      comment: '朝向分类，1：南北',
    },
    decoration_type: {
      type: DataTypes.INTEGER,
      comment: '装修程度，1:简装 2:豪装',
    },
    building_type: {
      type: DataTypes.INTEGER,
      comment: '楼型，TODO',
    },
    built_year: {
      type: DataTypes.STRING,
      comment: '建造年代',
    },
    city_name: {
      type: DataTypes.STRING,
      comment: '',
    },
    city_code: {
      type: DataTypes.STRING,
      comment: '',
    },
    neighborhood_name: {
      type: DataTypes.STRING,
      comment: '',
    },
    neighborhood_source_code: {
      type: DataTypes.STRING,
      comment: '小区 id，neighborhood 主键',
    },
    floor_plan_room: {
      type: DataTypes.INTEGER,
      comment: '卧室个数',
    },
    floor_plan_hall: {
      type: DataTypes.INTEGER,
      comment: '厅个数',
    },
    floor_plan_bath: {
      type: DataTypes.INTEGER,
      comment: '厕所个数',
    },
    floor_plan_kitchen: {
      type: DataTypes.INTEGER,
      comment: '厨房个数',
    },
    house_type: {
      type: DataTypes.INTEGER,
      comment: '房源类型，1: 新房 2: 二手房 3:租房',
    },
    layout_type: {
      type: DataTypes.INTEGER,
      comment: '户型类型',
    },
    last_publish_time: {
      type: DataTypes.DATE,
      comment: '房源更新时间',
    },
    ownership: {
      type: DataTypes.INTEGER,
      comment:
        '交易权属: 1.商品房， 2. 公房，3.央产房，4.军产房，5.校产房， 6.私产，7. 经济适用房， 8.永久产权，9.空置房，10.使用权房，99.其他',
    },
    property_management_type: {
      type: DataTypes.INTEGER,
      comment:
        '房屋类型 ，房屋类型: 1.普通住宅，2.别墅，3.写字楼， 4.商铺，5.商住两用，6.公寓，7.工业厂房，8.车库，9.经济适用房，99. 其他',
    },
    elevator: {
      type: DataTypes.INTEGER,
      comment: '是否有电梯，0： 没有；1：有；null：未知',
    },
    property_certificate_period: {
      type: DataTypes.INTEGER,
      comment: '房本年限: 0.不满二，1.满二，2.满五，99.其他',
    },
  },
  {
    sequelize,
    modelName: 'houses',
    tableName: 'agent_house',
  },
)

export { House }
