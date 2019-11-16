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
    // 新增会员模型
    CreateOrUpdateBookDto: {
        Id: { type: 'integer', required: false },
        Name: { type: 'string', required: true },   // 名称
        Price: { type: 'string', required: true },   // 单价
        Author: { type: 'string', required: true },   // 作者
        MakeSource: { type: 'string', required: true },   // 出版社
        BookCategoryId: { type: 'integer', required: true },   // 分类ID
        Inventory: { type: 'integer', required: true },   // 库存
        IsSoldOut: { type: 'boolean', required: true }   // 下架
    },
    DeleteBookBookDto: {
        Id: { type: 'integer', required: true },    // ID
    }
};