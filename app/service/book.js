'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书业务类
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Service = require("./baseService");

class BookService extends Service {
    constructor(ctx) {
        super(ctx, "Book");  // 调用父类的构造方法
    }

    /**
     * 获取所有图书
     * @param {*} whereSql 
     */
    async getAll(whereSql) {
        const { ctx } = this;
        whereSql = whereSql || '1=1';

        const [ result ] = await ctx.model.query(`select b.Id,b.Name,b.Price,b.Author,b.MakeSource,b.Inventory,b.IsSoldOut,DATE_FORMAT(b.CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate,bc.Name Category from ${this.tableName} ${whereSql}`);
        return result;
    }

    /**
     * 查询图书分类
     * @param {*} whereSql 
     */
    async getAllCategory(whereSql) {
        const { ctx } = this;
        const tableName = 'bookCategory';
        whereSql = whereSql || 'where 1=1';

        console.log('=============',`select Id,Name from ${tableName} ${whereSql}`);
        const [ result ] = await ctx.model.query(`select Id,Name from ${tableName} ${whereSql}`);
        return result;
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

module.exports = BookService;