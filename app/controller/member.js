'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Controller = require("./baseController");

/**
* @controller MemberService 会员接口
*/
class MemberController extends Controller {
   /**
    * @summary 查询会员
    * @description 查询会员
    * @router get /v1/member/selectMember
    * @request query integer id 会员ID
    * @response 200 JsonResult 操作结果
    */

    async selectMember() {
        const { ctx, service } = this;
        
        const id = ctx.query.id;
        const result = await service.member.getById(id);
        this.jsonBody(result);
    }
}

module.exports = MemberController;