'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：database.config.js
 * 文件描述：数据库配置文件
 * 创建时间：2019/10/25
 * 编写作者：dengjing
 * 修改时间：NONE
 */

module.exports = {
    dialect: 'postgres',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
    host: "localhost",  // 数据库服务器地址
    port: 5432, // 数据库连接端口号
    database: "postgresnode", // 数据库名称
    username: "postgres",   // 数据库登录用户名
    password: null,   // 数据库登录密码
    define: {
        freezeTableName: true,
        timestamps: false
    }
};