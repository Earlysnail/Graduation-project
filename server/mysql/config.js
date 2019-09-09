module.exports = {
  // 数据库配置
  mysqldb: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'data',
    useConnectionPooling: true
  },

  JWTs: {
    secret: 'admin', // 指定密钥
    expiresIn: '2h' // 超时设置 m分钟 h小时 d天数
  } 
}
