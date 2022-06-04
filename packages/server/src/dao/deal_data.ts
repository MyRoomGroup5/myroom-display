export function deal_for_name(param: string, value: number | string | Date | bigint) {
  let res = ''
  switch (param) {
    case 'heating_type': {
      res = deal_heating_type(value)
      break
    }
    case 'floor_level': {
      res = deal_floor_level(value)
      break
    }
    case 'facing_type': {
      res = deal_facing_type(value)
      break
    }
    case 'decoration_type': {
      res = deal_decoration_type(value)
      break
    }
    case 'building_type': {
      res = deal_building_type(value)
      break
    }
    case 'house_type': {
      res = deal_house_type(value)
      break
    }
    case 'ownership': {
      res = deal_ownership(value)
      break
    }
    case 'property_management_type': {
      res = deal_property_management_type(value)
      break
    }
    case 'elevator': {
      res = deal_elevator(value)
      break
    }
    case 'property_certificate_period': {
      res = deal_property_certificate_period(value)
      break
    }
    default: {
      res = ''
    }
  }
  return res !== '' ? res : value
}

function deal_heating_type(params: number | string | Date | bigint): string {
  let res = '集中供暖'
  switch (params) {
    case 1: {
      res = '集中供暖'
      break
    }
    case 2: {
      res = '中央空调'
      break
    }
    case 99: {
      res = '壁挂炉'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_floor_level(params: number | string | Date | bigint): string {
  let res = '高'
  switch (params) {
    case 1: {
      res = '高'
      break
    }
    case 2: {
      res = '中'
      break
    }
    case 3: {
      res = '低'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_facing_type(params: number | string | Date | bigint): string {
  let res = '南北'
  console.log('fenlei', params)
  switch (params) {
    case 1: {
      res = '南北'
      break
    }
    case 2: {
      res = '东'
      break
    }
    case 3: {
      res = '南'
      break
    }
    case 4: {
      res = '西'
      break
    }
    case 5: {
      res = '北'
      break
    }
    case 6: {
      res = '东北'
      break
    }
    case 7: {
      res = '西北'
      break
    }
    case 8: {
      res = '东南'
      break
    }
    case 9: {
      res = '西南'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_decoration_type(params: number | string | Date | bigint): string {
  let res = '精装'
  switch (params) {
    case 1: {
      res = '精装'
      break
    }
    case 2: {
      res = '简装'
      break
    }
    case 99: {
      res = '精装'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_building_type(params: number | string | Date | bigint): string {
  let res = '板楼'
  switch (params) {
    case 1: {
      res = '板楼'
      break
    }
    case 2: {
      res = '塔楼'
      break
    }
    case 99: {
      res = '其他'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_house_type(params: number | string | Date | bigint): string {
  let res = '新房'
  switch (params) {
    case 1: {
      res = '新房'
      break
    }
    case 2: {
      res = '二手房'
      break
    }
    case 99: {
      res = '租房'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_ownership(params: number | string | Date | bigint): string {
  let res = '商品房'
  switch (params) {
    case 1: {
      res = '商品房'
      break
    }
    case 2: {
      res = '公房'
      break
    }
    case 3: {
      res = '央产房'
      break
    }
    case 4: {
      res = '军产房'
      break
    }
    case 5: {
      res = '校产房'
      break
    }
    case 6: {
      res = '私产'
      break
    }
    case 7: {
      res = '经济适用房'
      break
    }
    case 8: {
      res = '永久产权'
      break
    }
    case 9: {
      res = '空置房'
      break
    }
    case 10: {
      res = '使用权房'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_property_management_type(params: number | string | Date | bigint): string {
  let res = '普通住宅'
  switch (params) {
    case 1: {
      res = '普通住宅'
      break
    }
    case 2: {
      res = '别墅'
      break
    }
    case 3: {
      res = '写字楼'
      break
    }
    case 4: {
      res = '商铺'
      break
    }
    case 5: {
      res = '商住两用'
      break
    }
    case 6: {
      res = '公寓'
      break
    }
    case 7: {
      res = '工业厂房'
      break
    }
    case 8: {
      res = '车库'
      break
    }
    case 9: {
      res = '经济适用房'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}

function deal_elevator(params: number | string | Date | bigint): string {
  let res = '有'
  switch (params) {
    case 0: {
      res = '没有'
      break
    }
    case 1: {
      res = '有'
      break
    }
    default: {
      res = '未知'
    }
  }
  return res
}

function deal_property_certificate_period(params: number | string | Date | bigint): string {
  let res = '不满二'
  switch (params) {
    case 0: {
      res = '不满二'
      break
    }
    case 1: {
      res = '满二'
      break
    }
    case 2: {
      res = '满五'
      break
    }
    case 99: {
      res = '其他'
      break
    }
    default: {
      res = '其他'
    }
  }
  return res
}
