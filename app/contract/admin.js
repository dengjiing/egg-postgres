'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书接口数据类型
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    CreateAdminDto: {
        Name: { type: 'string', required: true },    // 账号
        Password: { type: 'string', required: true, min: 6, max: 16 },    // 密码
        PasswordConfirm: { type: 'string', required: true, min: 6, max: 16 },    // 密码确认
    },
    EditAdminDto: {
        Id: { type: 'integer', required: true },    // ID
        Name: { type: 'string', required: true },    // 账号
        Password: { type: 'string', required: false, min: 6, max: 16 },    // 密码
        PasswordConfirm: { type: 'string', required: false, min: 6, max: 16 },    // 密码确认
    },
    DeleteAdminDto: {
        Id: { type: 'integer', required: true },    // ID
    }
}