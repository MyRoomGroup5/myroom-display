import { Sequelize } from 'sequelize'
import { config } from '../config'

const { dbName, host, port, user, password } = config.database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host: host,
  port: port,
  logging: false,
  timezone: '+08:00',
  define: {
    timestamps: false,
    paranoid: false,
  },
})

sequelize
  .authenticate()
  .then((res) => {
    console.log('Connection has been established successfully.', res)
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

export default sequelize
