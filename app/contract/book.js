'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书接口数据类型
 * 创建时间：2019/10/25
 * 编写作者：dengjing
 * 修改时间：NONE
 */

module.exports = {
    // 新增会员模型
    CreateOrUpdateBookDto: {
        id: { type: 'integer', required: false },
        name: { type: 'string', required: true },   // 名称
        price: { type: 'string', required: true },   // 单价
        author: { type: 'string', required: true },   // 作者
        make_source: { type: 'string', required: true },   // 出版社
        book_categoryid: { type: 'integer', required: true },   // 分类ID
        inventory: { type: 'integer', required: true },   // 库存
        isSoldOut: { type: 'integer', required: true },
        isDeleted: { type: 'integer', required: true }   // 删除
    },
    DeleteBookBookDto: {
        id: { type: 'integer', required: true },    // ID
    }
};