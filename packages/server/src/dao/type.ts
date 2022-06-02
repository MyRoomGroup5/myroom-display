type HouseDetail = {
  id?: string
  listing_name?: string
  first_upload_at?: string
  pricing?: string
  squaremeter?: string
  floor?: string
  total_floor?: string
  dict_house_id?: string
  heating_type?: string
  house_duration?: string
  floor_level?: string
  facing_type?: string
  decoration_type?: string
  building_type?: string
  built_year?: string
  city_name?: string
  city_code?: string
  neighborhood_name?: string
  neighborhood_source_code?: string
  floor_plan_room?: string
  floor_plan_hall?: string
  floor_plan_bath?: string
  floor_plan_kitchen?: string
  house_type?: string
  layout_type?: string
  last_publish_time?: string
  ownership?: string
  property_management_type?: string
  elevator?: string
  property_certificate_period?: string
}

export const house_title_detail: HouseDetail = {
  // id: '房源 id',
  // listing_name: '房源 title',
  first_upload_at: '房源上架时间',
  // pricing: '报价，单位分',
  // squaremeter: '建筑面积，单位平方米（需要除以 100）',
  floor: '楼层',
  // total_floor: '总楼层数',
  // dict_house_id: '',
  heating_type: '加热方式',
  // house_duration:
  //   '',
  floor_level: '楼层位置',
  facing_type: '朝向分类',
  decoration_type: '装修程度',
  building_type: '楼型',
  built_year: '建造年代',
  house_type: '房源类型',
  // layout_type:'户型类型',
  last_publish_time: '房源更新时间',
  ownership: '交易权属',
  property_management_type: '房屋类型',
  elevator: '电梯',
  property_certificate_period: '房本年限',
}

const house_key_value = new Map()

interface house_item_type {
  title: string | undefined
  value: string | number | Date | bigint
}

// export { house_title_detail }
export type { house_item_type }
export type { HouseDetail }
