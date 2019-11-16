'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：学生业务类
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Service = require("./baseService");

class AdminService extends Service {
    constructor(ctx) {
        super(ctx, "Admin");  // 调用父类的构造方法
    }

    /**
     * 获取所有管理员
     * @param {*} whereSql where条件
     */
    async getAll(whereSql) {
        whereSql = whereSql || ' 1=1 ';
        
        const { ctx } = this;
        const [results] = await ctx.model.query(`select Id,Name,DATE_FORMAT(CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate from ${this.tableName} where ${whereSql};`);
        return results;
    }

    /**
     * 根据任何条件获取一条记录
     * @param {*} whereSql 
     */
    async getSingleByWhere(columns, whereSql) {
        const { ctx } = this;
        columns = columns || `Id,Name,DATE_FORMAT(CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate`;
        if (!whereSql) ctx.throw(500, '参数错误');

        const [results] = await ctx.model.query(`select ${columns} from ${this.tableName} where ${whereSql};`);
        return results[0];
    }

    /**
     * 查询是否存在数据
     * @param {*} whereSql 
     */
    async isExitByWhere(columns, whereSql) {
        const entity = await this.getSingleByWhere(columns, whereSql);
        return Boolean(entity);
    }
}

module.exports = AdminService;