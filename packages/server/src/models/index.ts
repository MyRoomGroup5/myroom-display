import { User, create_table_user } from './User'
import { House } from './House'
// 更新表格，如果没有则初始化

async function create_table_all() {
  await create_table_user()
}

create_table_all().then(() => {
  console.log('初始化表成功')
})

export { User, House }
