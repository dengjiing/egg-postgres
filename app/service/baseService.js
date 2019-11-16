'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：baseService.js
 * 文件描述：父业务类
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Service } = require('egg');

class BaseService extends Service {
    constructor(ctx, tableName) {
        super(ctx);
        this.tableName = tableName;
        this.db = this.ctx.model[tableName];
    }

    /**
     * 根据Id获取表信息
     * @param {*} id 主键
     */
    async getById(id) {
        const entity = await this.db.findByPk(id);

        return entity;
    }

    /**
     * 查询所有信息
     */
    async getAll() {
        const entities = await this.db.findAll();

        return entities;
    }

    /**
     * 新增表数据
     * @param {*} model 表模型信息
     */
    async create(model) {
        if (model.Id) delete model.Id;
        const results = await this.db.create(model);
        return results.dataValues;
    }

    /**
     * 更新表数据
     * @param {*} id 表主键Id
     * @param {*} model 表模型信息
     */
    async update(id, model) {
        const entity = await this.db.findByPk(id);
        if (!entity) {
            console.error("未找到该信息");
            return;
        }
        if (model.Id) delete model.Id;

        const results = await entity.update(model);
        return results;
    }

    /**
     * 删除表数据
     * @param {*} id 表主键Id
     */
    async destroy(id) {
        const entity = await this.db.findByPk(id);
        if (!entity) {
            console.error("未找到该信息");
            return;
        }

        const results = await entity.destroy();
        return results;
    }

    /**
     * 获取分页数据
     * @param {*} pageIndex 当前页码
     * @param {*} pageSize 当前页容量
     * @param {*} whereSql 查询条件
     * @param {*} columns 筛选列
     */
    async getDatasByPage(pageIndex, pageSize, whereSql, columns) {
        columns = columns || '*';
        if (pageIndex <= 0) console.error("页码不能小于或等于0");

        whereSql = whereSql || ' 1=1 ';

        const [results] = await this.ctx.model.query(`SELECT ${columns} FROM \`${this.tableName}\` where ${whereSql};`);
        var pageCount = Math.ceil(results.length / pageSize);

        const [pageResults] = await this.ctx.model.query(`SELECT ${columns} FROM \`${this.tableName}\` where ${whereSql} ORDER BY id DESC LIMIT ${(pageIndex - 1) * pageSize},${pageSize};`);

        return {
            pageIndex: pageIndex,   // 当前页
            pageSize: pageSize, // 页容量
            pageCount: pageCount,   // 总页数
            totalCount: results.length,// 总条数
            results: pageResults    // 当前页数据
        };
    }
}

module.exports = BaseService;