'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：admin.js
 * 文件描述：学生接口
 * 创建时间：2019/10/25
 * 编写作者：noMonkSoul
 * 修改时间：NONE
 */

const Controller = require("./baseController");

/**
* @controller AdminService 管理员接口
*/
class AdminController extends Controller {

    /**
    * @summary 查询单个管理员
    * @description 查询单个管理员
    * @router get /v1/admin/getAdmin
    * @request query integer ID 管理员ID
    * @response 200 JsonResult 操作结果
    */
    async getAdmin() {
        const { ctx, service } = this;

        const id = ctx.query.Id;
        if (!id) ctx.throw(500, '参数错误');

        const result = await service.admin.getSingleByWhere(null, `Id=${id}`);
        this.jsonBody(result);
    }

    /**
    * @summary 查询所有管理员
    * @description 查询所有管理员
    * @router get /v1/admin/getAdmins
    * @request query string name 名称查询
    * @response 200 JsonResult 操作结果
    */
    async getAdmins() {
        const { ctx, service } = this;

        let whereSql = ' 1=1 and isDeleted=0 ';
        if (ctx.query.name) {
            whereSql += ` and Name like '%${ctx.query.name}%' `;
        }
        const pageIndex = ctx.query.pageIndex || 1;
        const pageSize = ctx.query.pageSize || 10;

        const results = await service.admin.getDatasByPage(pageIndex, pageSize, whereSql, `Id,Name,DATE_FORMAT(CreatedDate,'%Y-%m-%d %H:%i:%s') CreatedDate`);
        this.jsonBody(results);
    }

    /**
    * @summary 添加管理员
    * @description 添加管理员
    * @router put /v1/admin/addAdmin
    * @request body CreateAdminDto model 管理员参数
    * @response 200 JsonResult 操作结果
    */
    async addAdmin() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.CreateAdminDto);

        const param = ctx.request.body;
        if (param.Password !== param.PasswordConfirm) ctx.throw(500, '两次密码输入不一致！');

        if (await service.admin.isExitByWhere(null, `Name = '${param.Name}' `)) ctx.throw(500, '账号已存在');

        delete param.PasswordConfirm;
        param.CreatedDate = ctx.helper.getDate();

        const result = await service.admin.create(param);
        this.jsonBody(result);
    }

    /**
    * @summary 编辑管理员信息
    * @description 编辑管理员信息
    * @router post /v1/admin/editAdmin
    * @request body EditAdminDto model 管理员变更字段
    * @response 200 JsonResult 操作结果
    */
    async editAdmin() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.EditAdminDto);

        const param = ctx.request.body;
        if (!param.Id) ctx.throw(500, '管理员不存在');

        // 没有原密码默认不修改密码
        if (!param.passwordOriginal) {
            delete param.passwordOriginal;
            delete param.Password;
        } else {
            if (await service.admin.isExitByWhere(null, `Id!=${param.Id} and Name='${param.Name}'`)) ctx.throw(500, '账号重复');
            if (param.Password !== param.PasswordConfirm) ctx.throw(500, '两次密码输入不一致！');
            if (!(await service.admin.isExitByWhere(`Name`, `Id=${param.Id} and Password=${param.passwordOriginal}`))) ctx.throw(500, '原密码错误');
        }

        param.UpdatedDate = ctx.helper.getDate();
        delete param.PasswordConfirm;
        const result = await service.admin.update(param.Id, param);
        this.jsonBody(result);
    }

    /**
    * @summary 删除管理员
    * @description 删除管理员
    * @router delete /v1/admin/deleteAdmin
    * @request body DeleteAdminDto model 管理员ID
    * @response 200 JsonResult 操作结果
    */
    async deleteAdmin() {
        const { ctx, service } = this;

        const id = ctx.request.body.Id
        if (!id) ctx.throw(500, '参数错误');

        // const result = await service.admin.destroy(id);
        const result = await service.admin.update(id, { IsDeleted: true });   // 假删
        this.jsonBody(result);
    }
}

module.exports = AdminController;