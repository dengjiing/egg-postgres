'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口数据类型
 * 创建时间：2019/10/25
 * 编写作者：dengjing
 * 修改时间：NONE
 */

module.exports = {
    // 新增/编辑会员模型
    CreateOrUpdateMemberDto: {
        Name: { type: 'string', required: true },   // 名称
        Age: { type: 'integer', required: true },   // 年龄
        Sex: { type: 'string', required: true },   // 性别
        AdminId: { type: 'integer', required: true },   // 是否管理员
    }
};