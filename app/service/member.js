'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员业务类
 * 创建时间：2019/10/25
 * 编写作者：nodengjing
 * 修改时间：NONE
 */

const Service = require('./baseService');

class MemberService extends Service {
    constructor(ctx) {
        super(ctx, 'Member');
    }
}

module.exports = MemberService;